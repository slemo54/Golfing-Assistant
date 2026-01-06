export enum Sender {
  User = 'user',
  Bot = 'model'
}

export interface Message {
  id: string;
  text: string;
  sender: Sender;
  timestamp: Date;
  // Optional: references to specific entities mentioned in the response
  relatedEntities?: Entity[];
}

export interface GolfClub {
  id: string;
  name: string;
  region: string;
  holes: number;
  par: number;
  description: string;
  priceRange: string;
  features: string[];
  imageUrl: string;
}

export interface Hotel {
  id: string;
  name: string;
  stars: number;
  region: string;
  distanceToGolf: Record<string, string>; // e.g., "GC_ROMA": "5km"
  description: string;
  amenities: string[]; // e.g., "Golf Storage", "Shuttle", "Spa"
  priceRange: string;
  imageUrl: string;
}

export type Entity = GolfClub | Hotel;

export interface KnowledgeBase {
  golfClubs: GolfClub[];
  hotels: Hotel[];
}