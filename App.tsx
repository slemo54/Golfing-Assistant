import React, { useState, useRef, useEffect } from 'react';
import { Sender, Message, Entity } from './types';
import { sendMessage } from './services/geminiService';
import { knowledgeBase } from './data/knowledgeBase';
import ChatMessage from './components/ChatMessage';
import EntityCard from './components/EntityCard';

type Language = 'it' | 'en';

interface QuickAction {
  label: string;
  text: string;
}

const UI_TEXT = {
  it: {
    intro: "Ciao! 👋 Sono il tuo assistente golf. Come posso aiutarti oggi?",
    placeholder: "Scrivi un messaggio...",
    golfTitle: "GOLF CLUB CONSIGLIATI",
    hotelTitle: "HOTEL PARTNER",
    powered: "Powered by Bookingolf AI"
  },
  en: {
    intro: "Hello! 👋 I'm your golf assistant. How can I help you today?",
    placeholder: "Write a message...",
    golfTitle: "RECOMMENDED GOLF CLUBS",
    hotelTitle: "PARTNER HOTELS",
    powered: "Powered by Bookingolf AI"
  }
};

const PROMPTS: Record<Language, QuickAction[]> = {
  it: [
    { 
      label: "Verona Golf & Hotel", 
      text: "Sto giocando al Golf Club Verona. Quali hotel sono vicini e quali sono i prezzi?" 
    },
    { 
      label: "Lusso Jesolo & Venezia", 
      text: "Voglio giocare al Golf Jesolo o al Circolo Golf Venezia. C'è un resort di lusso nelle vicinanze?" 
    },
    { 
      label: "Hotel Asolo Golf", 
      text: "C'è un hotel associato all'Asolo Golf Club?" 
    }
  ],
  en: [
    { 
      label: "Verona Golf & Hotels", 
      text: "I'm playing at Golf Club Verona. Which hotels are nearby and what are their prices?" 
    },
    { 
      label: "Jesolo & Venice Luxury", 
      text: "I want to play at Golf Jesolo or Circolo Golf Venezia. Do you have a luxury resort nearby?" 
    },
    { 
      label: "Asolo Golf Hotel", 
      text: "Is there an hotel associated with Asolo Golf Club?" 
    }
  ]
};

const App: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [language, setLanguage] = useState<Language>('en'); // Default to English
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isLoading, isOpen]);

  const handleActionClick = (actionText: string) => {
    handleSend(undefined, actionText);
  };

  const handleSend = async (e?: React.FormEvent, overrideText?: string) => {
    e?.preventDefault();
    const textToSend = overrideText || inputText;
    if (!textToSend.trim() || isLoading) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      text: textToSend,
      sender: Sender.User,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMsg]);
    setInputText('');
    setIsLoading(true);

    try {
      const languageInstruction = language === 'it' ? " (Rispondi in Italiano)" : " (Reply in English)";
      const promptWithLang = textToSend + languageInstruction;

      const responseText = await sendMessage(promptWithLang);
      
      const suggestedEntities: Entity[] = [];
      const lowerRes = responseText.toLowerCase();

      knowledgeBase.golfClubs.forEach(club => {
        if (lowerRes.includes(club.name.toLowerCase())) {
          suggestedEntities.push(club);
        }
      });
      knowledgeBase.hotels.forEach(hotel => {
        if (lowerRes.includes(hotel.name.toLowerCase()) && !suggestedEntities.some(e => e.id === hotel.id)) {
          suggestedEntities.push(hotel);
        }
      });

      const botMsg: Message = {
        id: (Date.now() + 1).toString(),
        text: responseText,
        sender: Sender.Bot,
        timestamp: new Date(),
        relatedEntities: suggestedEntities
      };
      setMessages(prev => [...prev, botMsg]);
    } catch (error) {
      console.error(error);
      const errorMsg: Message = {
         id: (Date.now() + 1).toString(),
         text: language === 'it' ? "Errore di connessione. Controlla la tua API Key." : "Connection error. Please check your API key.",
         sender: Sender.Bot,
         timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCardAction = (entity: Entity) => {
    const actionText = language === 'it' 
      ? `Ho scelto: ${entity.name}. Qual è il prossimo passo?`
      : `I have chosen: ${entity.name}. What is the next step?`;
    handleSend(undefined, actionText);
  };

  // Golf Ball Image URL (Generic high quality green ball icon/image)
  const WIDGET_IMAGE = "https://cdn-icons-png.flaticon.com/512/1206/1206338.png"; 

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end pointer-events-auto">
      
      {/* Chat Window */}
      {isOpen && (
        <div className="bg-white w-[380px] h-[600px] rounded-2xl shadow-2xl overflow-hidden flex flex-col border border-slate-200 mb-4 widget-enter">
          
          {/* Header */}
          <div className="px-5 py-4 flex justify-between items-center bg-slate-900 text-white z-10 shrink-0">
            <div>
              <h1 className="text-lg font-bold tracking-tight">Bookingolf</h1>
              <p className="text-[10px] text-emerald-400 font-medium">Digital Concierge</p>
            </div>
            
            <div className="flex items-center space-x-3">
              {/* Language Switcher */}
              <div className="flex bg-slate-800 rounded-md p-0.5 border border-slate-700">
                <button 
                  onClick={() => setLanguage('it')}
                  className={`px-2 py-0.5 text-[10px] font-bold rounded transition-all ${language === 'it' ? 'bg-white text-slate-900' : 'text-slate-400 hover:text-white'}`}
                >
                  IT
                </button>
                <button 
                  onClick={() => setLanguage('en')}
                  className={`px-2 py-0.5 text-[10px] font-bold rounded transition-all ${language === 'en' ? 'bg-white text-slate-900' : 'text-slate-400 hover:text-white'}`}
                >
                  EN
                </button>
              </div>

              <button 
                onClick={() => setIsOpen(false)}
                className="text-slate-400 hover:text-white transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
              </button>
            </div>
          </div>

          {/* Chat Area */}
          <div className="flex-grow overflow-y-auto p-4 space-y-4 bg-slate-50/50">
            
            {messages.length === 0 && (
              <div className="mt-2 space-y-4 animate-fade-in-up">
                <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100">
                  <p className="text-sm font-medium text-slate-800 leading-relaxed">
                    {UI_TEXT[language].intro}
                  </p>
                </div>
                
                <div className="flex flex-col gap-2">
                  {PROMPTS[language].map((action, idx) => (
                    <button 
                      key={idx}
                      onClick={() => handleActionClick(action.text)}
                      className="px-4 py-3 bg-white border border-slate-200 rounded-xl text-xs font-medium text-slate-700 hover:bg-emerald-50 hover:border-emerald-200 hover:text-emerald-700 transition-all shadow-sm text-left group flex justify-between items-center"
                    >
                      <span>{action.label}</span>
                      <svg className="w-3 h-3 text-slate-300 group-hover:text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {messages.map((msg) => {
              const golfClubs = msg.relatedEntities?.filter(e => (e as any).holes) || [];
              const hotels = msg.relatedEntities?.filter(e => !(e as any).holes) || [];

              return (
                <div key={msg.id} className="space-y-3">
                  <ChatMessage message={msg} />
                  
                  {/* Golf Clubs Horizontal Scroll */}
                  {golfClubs.length > 0 && (
                    <div className="space-y-1 mt-1">
                      <h4 className="text-[9px] font-bold text-slate-400 uppercase tracking-widest px-1">{UI_TEXT[language].golfTitle}</h4>
                      <div className="flex overflow-x-auto gap-3 pb-2 -mx-4 px-4 scrollbar-hide">
                        {golfClubs.map(entity => (
                          <div key={entity.id} className="min-w-[220px] w-[220px]">
                            <EntityCard 
                              entity={entity} 
                              type="golf"
                              onAction={handleCardAction}
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Hotels Horizontal Scroll */}
                  {hotels.length > 0 && (
                    <div className="space-y-1 mt-1">
                      <h4 className="text-[9px] font-bold text-slate-400 uppercase tracking-widest px-1">{UI_TEXT[language].hotelTitle}</h4>
                      <div className="flex overflow-x-auto gap-3 pb-2 -mx-4 px-4 scrollbar-hide">
                        {hotels.map(entity => (
                          <div key={entity.id} className="min-w-[220px] w-[220px]">
                            <EntityCard 
                              entity={entity} 
                              type="hotel"
                              onAction={handleCardAction}
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}

            {isLoading && (
               <div className="flex items-center space-x-1 p-2 bg-slate-100 rounded-lg w-fit">
                  <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce"></div>
                  <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce delay-75"></div>
                  <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce delay-150"></div>
               </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Footer Input */}
          <div className="p-4 bg-white border-t border-slate-100">
            <form onSubmit={(e) => handleSend(e)} className="relative">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder={UI_TEXT[language].placeholder}
                className="w-full py-2.5 text-sm text-slate-800 placeholder-slate-400 bg-slate-50 border border-slate-200 rounded-full px-4 focus:border-emerald-500 focus:outline-none transition-colors pr-10"
                disabled={isLoading}
              />
              <button
                type="submit"
                disabled={!inputText.trim() || isLoading}
                className={`absolute right-1.5 top-1.5 p-1.5 bg-emerald-600 rounded-full text-white hover:bg-emerald-700 transition-all ${!inputText.trim() && 'opacity-50 cursor-default bg-slate-300 hover:bg-slate-300'}`}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path></svg>
              </button>
            </form>
            
             <div className="text-[10px] text-center text-slate-300 font-medium mt-2">
               {UI_TEXT[language].powered}
             </div>
          </div>

        </div>
      )}

      {/* Widget Toggle Button (Golf Ball) */}
      {!isOpen && (
        <button 
          onClick={() => setIsOpen(true)}
          className="w-16 h-16 rounded-full shadow-2xl transition-transform hover:scale-110 focus:outline-none group relative"
          aria-label="Open Chat"
        >
          {/* Simple Green Golf Ball Representation using an Image */}
          <img 
            src={WIDGET_IMAGE} 
            alt="Chat with us" 
            className="w-full h-full object-cover drop-shadow-lg"
          />
          {/* Notification Badge Simulation */}
          <span className="absolute top-0 right-0 w-4 h-4 bg-red-500 border-2 border-white rounded-full"></span>
        </button>
      )}

    </div>
  );
};

export default App;