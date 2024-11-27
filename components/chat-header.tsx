import { Icons } from "./icons";
import { ThemeToggle } from "./theme-toggle";
import { Conversation } from "../types";

interface ChatHeaderProps {
  isNewChat: boolean;
  recipientInput: string;
  setRecipientInput: (value: string) => void;
  handleCreateChat: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  onBack?: () => void;
  isMobileView?: boolean;
  activeConversation?: Conversation;
}

export function ChatHeader({
  isNewChat,
  recipientInput,
  setRecipientInput,
  handleCreateChat,
  onBack,
  isMobileView,
  activeConversation,
}: ChatHeaderProps) {
  // Helper function to get valid recipients by splitting the comma-separated string,
  // trimming whitespace, and filtering out empty entries
  const getValidRecipients = () => {
    return recipientInput
      .split(',')
      .map(r => r.trim())
      .filter(r => r.length > 0);
  };

  // Handles keyboard events in the recipient input field
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      const currentInput = e.currentTarget.value.trim();
      
      if (currentInput) {
        // If there's text in the input field:
        // 1. Get existing recipients by splitting the comma-separated string
        // 2. Check if the new recipient isn't already in the list
        // 3. Add the new recipient and append a comma for the next entry
        const recipients = recipientInput ? recipientInput.split(',').filter(r => r.trim()) : [];
        if (!recipients.includes(currentInput)) {
          const newValue = [...recipients, currentInput].join(',');
          setRecipientInput(newValue + ',');
          e.currentTarget.value = ''; // Clear the input field for the next recipient
        }
      } else if (getValidRecipients().length >= 2) {
        // If input is empty and we have at least 2 recipients,
        // pressing Enter will create the chat
        handleCreateChat(e);
      }
    }
  };

  // Renders recipient "pills" for all complete entries
  const renderRecipients = () => {
    const recipients = recipientInput.split(',');
    const completeRecipients = recipients.slice(0, -1); // Exclude the one being typed
    
    return (
      <>
        {completeRecipients.map((recipient, index) => {
          const trimmedRecipient = recipient.trim();
          if (!trimmedRecipient) return null;
          
          return (
            <span 
              key={index}
              className="inline-flex items-center px-2.5 py-0.5 rounded-lg text-sm bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100"
            >
              {trimmedRecipient}
            </span>
          );
        })}
      </>
    );
  };

  return (
    <div className="h-auto min-h-12 flex items-center justify-between p-2 sm:p-4 border-b dark:border-foreground/20 bg-muted">
      <div className="flex items-center gap-2 flex-1">
        {isMobileView && (
          <button
            onClick={onBack}
            className="hover:bg-background rounded-sm"
            aria-label="Back to conversations"
          >
            <Icons.back />
          </button>
        )}
        {isNewChat ? (
          <div className="flex-1">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-base sm:text-sm font-medium text-muted-foreground">
                To:
              </span>
              <div className="flex flex-wrap gap-2 flex-1 items-center">
                {renderRecipients()}
                <input
                  type="text"
                  onChange={(e) => {
                    e.currentTarget.value = e.currentTarget.value;  // Let the input manage its own value
                  }}
                  onKeyDown={handleKeyDown}
                  placeholder="Enter two or more recipients and hit enter"
                  className="flex-1 bg-transparent outline-none text-base sm:text-sm placeholder:text-sm min-w-[200px]"
                  autoFocus
                />
              </div>
            </div>
          </div>
        ) : (
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-muted-foreground">
              {activeConversation?.recipients.map(r => r.name).join(', ')}
            </span>
          </div>
        )}
      </div>
      <ThemeToggle />
    </div>
  );
}
