import { atom } from 'jotai';

export interface Message {
  id: number;
  sender: 'user' | 'ai';
  content: string;
}

export const messagesAtom = atom<Message[]>([]);

export const messageIdAtom = atom<number>(0);
