export interface Message {
  id: string;
  content: string;
  htmlContent?: string;  
  sender: "me" | "system" | string;
  timestamp: string;
  mentions?: { id: string; name: string; }[];
  reactions?: Reaction[];
}

export interface Conversation {
  id: string;
  recipients: Recipient[];
  messages: Message[];
  lastMessageTime: string;
  unreadCount: number;
  pinned?: boolean;
  isTyping?: boolean;
}

export interface Recipient {
  id: string;
  name: string;
  avatar?: string;
}

export type ReactionType = 'heart' | 'like' | 'dislike' | 'laugh' | 'emphasize' | 'question';

export interface Reaction {
  type: ReactionType;
  sender: string;
  timestamp: string;
}