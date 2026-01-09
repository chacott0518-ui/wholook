export enum LoadingState {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR'
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export interface Designer {
  id: string;
  name: string;
  role: string;
  specialty: string;
  image: string;
  instagram: string;
}

export interface ServiceItem {
  name: string;
  price: string;
  description?: string;
}

export interface ServiceCategory {
  category: string;
  items: ServiceItem[];
}