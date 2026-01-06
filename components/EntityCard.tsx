import React from 'react';
import { Entity, GolfClub, Hotel } from '../types';

interface EntityCardProps {
  entity: Entity;
  type: 'golf' | 'hotel';
  onAction: (entity: Entity) => void;
}

const EntityCard: React.FC<EntityCardProps> = ({ entity, type, onAction }) => {
  const isGolf = type === 'golf';
  const item = entity as any;

  return (
    <div className="bg-white rounded-xl shadow-lg border border-slate-100 overflow-hidden flex flex-col h-full hover:shadow-xl transition-all duration-300 transform group">
      <div className="relative h-32 w-full overflow-hidden">
        <img 
          src={item.imageUrl} 
          alt={item.name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-2 left-2 bg-black/50 backdrop-blur-md px-2 py-1 rounded-md text-[10px] font-semibold text-white uppercase tracking-wider">
          {isGolf ? 'Golf Club' : 'Hotel Partner'}
        </div>
      </div>
      
      <div className="p-4 flex flex-col flex-grow relative">
        <div className="flex justify-between items-start mb-2">
           <div>
              <h3 className="text-sm font-bold text-slate-800 leading-tight mb-1 line-clamp-2">{item.name}</h3>
              <div className="flex items-center text-xs text-slate-500">
                <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                {item.region}
              </div>
           </div>
           <div className="text-right">
              <span className="block text-sm font-bold text-emerald-600">{item.priceRange}</span>
              {!isGolf && (
                <div className="flex text-yellow-400 text-[10px] justify-end">
                   {"★".repeat((entity as Hotel).stars)}
                </div>
              )}
           </div>
        </div>
        
        <p className="text-xs text-slate-500 mb-3 line-clamp-2 leading-relaxed">
          {item.description}
        </p>
        
        <div className="mt-auto pt-2 border-t border-slate-50">
           <button 
             onClick={() => onAction(entity)}
             className="w-full py-2 bg-slate-900 hover:bg-emerald-600 text-white font-medium rounded-lg text-xs transition-colors flex items-center justify-center gap-2"
           >
             {isGolf ? 'Prenota Tee Time' : 'Vedi Disponibilità'}
             <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
           </button>
        </div>
      </div>
    </div>
  );
};

export default EntityCard;