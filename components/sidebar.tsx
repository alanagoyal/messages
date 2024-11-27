import React from "react";
import { Conversation } from "../types";
import { SearchBar } from "./search-bar";
import { formatDistanceToNow, parseISO } from 'date-fns';

interface SidebarProps {
  children: React.ReactNode;
  conversations: Conversation[];
  activeConversation: string | null;
  onSelectConversation: (id: string) => void;
  isMobileView?: boolean;
}

export function Sidebar({ 
  children, 
  conversations, 
  activeConversation,
  onSelectConversation,
  isMobileView
}: SidebarProps) {
  const formatTime = (timestamp: string | undefined) => {
    if (!timestamp) return '';
    
    try {
      const date = parseISO(timestamp);
      return formatDistanceToNow(date, { addSuffix: true });
    } catch (error) {
      console.error('Error formatting time:', error, timestamp);
      return 'Just now';
    }
  };

  const getInitials = (name: string) => {
    const names = name.split(' ');
    if (names.length >= 2) {
      return `${names[0][0]}${names[names.length - 1][0]}`.toUpperCase();
    }
    return name[0].toUpperCase();
  };

  const sortedConversations = [...conversations].sort((a, b) => {
    const timeA = a.lastMessageTime ? new Date(a.lastMessageTime).getTime() : 0;
    const timeB = b.lastMessageTime ? new Date(b.lastMessageTime).getTime() : 0;
    return timeB - timeA; // Most recent first
  });

  return (
    <div className={`${isMobileView ? 'w-full' : 'w-80 border-r dark:border-foreground/20'} h-full flex flex-col bg-muted`}>
      {children}
      <SearchBar value="" onChange={() => {}} />
      <div className="flex-1 overflow-y-auto">
        {sortedConversations.map((conversation) => (
          <React.Fragment key={conversation.id}>
            <button
              onClick={() => onSelectConversation(conversation.id)}
              className={`w-full p-4 text-left ${
                activeConversation === conversation.id 
                  ? 'bg-blue-500 text-white rounded-sm' 
                  : ''
              }`}
            >
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                  {conversation.recipients[0].avatar ? (
                    <img 
                      src={conversation.recipients[0].avatar} 
                      alt="" 
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gray-400 text-white font-medium">
                      {getInitials(conversation.recipients[0].name)}
                    </div>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-baseline">
                    <span className="text-sm font-medium truncate">
                      {conversation.recipients.map(r => r.name).join(', ')}
                    </span>
                    {conversation.lastMessageTime && (
                      <span className={`text-xs ml-2 flex-shrink-0 ${
                        activeConversation === conversation.id 
                          ? 'text-white/80' 
                          : 'text-muted-foreground'
                      }`}>
                        {formatTime(conversation.lastMessageTime)}
                      </span>
                    )}
                  </div>
                  {conversation.messages.length > 0 && (
                    <p className={`text-xs truncate ${
                      activeConversation === conversation.id 
                        ? 'text-white/80' 
                        : 'text-muted-foreground'
                    }`}>
                      {conversation.messages[conversation.messages.length - 1].content}
                    </p>
                  )}
                </div>
              </div>
            </button>
            {conversations.indexOf(conversation) < conversations.length - 1 && (
              <div className="px-[56px] pr-2">
                <div className="h-[1px] bg-foreground/10 dark:bg-foreground/20" />
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
