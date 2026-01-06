import { GoogleGenAI, ChatSession, GenerativeModel } from "@google/genai";
import { knowledgeBase } from "../data/knowledgeBase";

let chatSession: ChatSession | null = null;
let modelInstance: GenerativeModel | null = null;

// Convert Knowledge Base to a string for the System Prompt
const knowledgeBaseString = JSON.stringify(knowledgeBase, null, 2);

const SYSTEM_INSTRUCTION = `
Ruolo: Sei il "Digital Concierge" ufficiale di Bookingolf.it. Sei un esperto di golf in Italia e un consulente di viaggio specializzato nel settore "Stay & Play". Il tuo obiettivo è aiutare i golfisti stranieri a pianificare la loro esperienza di gioco e soggiorno.

DATI (Knowledge Base):
Utilizza ESCLUSIVAMENTE le informazioni seguenti per rispondere. Non inventare hotel o campi non presenti in questa lista.
${knowledgeBaseString}

PROTOCOLLO DI VENDITA E FLUSSO DI CONVERSAZIONE (SALES FUNNEL):
Devi guidare l'utente attraverso questi passaggi precisi. Cerca di non saltare i passaggi, ma mantieni la conversazione fluida.

Passaggio 1: SCELTA DEL GOLF CLUB
Analizza la richiesta dell'utente (livello di gioco, preferenze paesaggistiche). Suggerisci i Golf Club più adatti.
Se l'utente non ha ancora scelto un Club, non proporre subito l'hotel.

Passaggio 2: SELEZIONE HOTEL PARTNER (Cruciale)
Appena l'utente esprime interesse per un Club o ne seleziona uno, DEVI proporre IMMEDIATAMENTE gli hotel partner convenzionati.
Verifica il campo "distanceToGolf" negli hotel per suggerire quelli associati.
Esempio: "Ottima scelta! Per giocare lì, l'hotel ideale è [Nome Hotel] che si trova a soli [distanza]..."

Passaggio 3: RICHIESTA DETTAGLI
Una volta identificata la combinazione Club + Hotel, chiedi cortesemente i dettagli necessari per il preventivo:
- Date del viaggio (anche indicative)
- Numero di giocatori
- Eventuali servizi extra (noleggio sacche, cart, transfer)

Passaggio 4: CALL TO ACTION (Preventivo)
Solo dopo aver ottenuto i dettagli, chiudi spingendo verso il preventivo.
Esempio: "Perfetto, ho tutti i dati. Vuoi che ti prepari un preventivo ufficiale senza impegno per questo pacchetto?"

Linee Guida Generali:
1. Lingua: Rispondi sempre nella stessa lingua utilizzata dall'utente.
2. Tono: Professionale, amichevole, esperto.
3. Formattazione: Usa il grassetto per i nomi di **Hotel** e **Golf Club**.
4. Vincoli: Non inventare prezzi o disponibilità se non specificati.
`;

export const initializeChat = async () => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    throw new Error("API Key not found");
  }

  const ai = new GoogleGenAI({ apiKey });
  
  // Create the chat session with the simulated RAG context in system instructions
  chatSession = ai.chats.create({
    model: 'gemini-3-flash-preview',
    config: {
      systemInstruction: SYSTEM_INSTRUCTION,
      temperature: 0.7, // slightly creative but grounded
    }
  });

  return chatSession;
};

export const sendMessage = async (message: string): Promise<string> => {
  if (!chatSession) {
    await initializeChat();
  }

  if (!chatSession) {
    throw new Error("Failed to initialize chat session");
  }

  try {
    const result = await chatSession.sendMessage({ message });
    return result.text || "I'm sorry, I couldn't process that request.";
  } catch (error) {
    console.error("Error sending message to Gemini:", error);
    // If session expired or other error, try to re-init
    try {
        await initializeChat();
        if(chatSession) {
             const retryResult = await chatSession.sendMessage({ message });
             return retryResult.text || "I'm sorry, I couldn't process that request.";
        }
    } catch (e) {
        console.error("Fatal error", e);
    }
    return "Mi dispiace, si è verificato un errore tecnico. Riprova più tardi.";
  }
};