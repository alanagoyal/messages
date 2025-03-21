import { Recipient } from "@/types";
import {
  useState,
  useRef,
  useEffect,
  forwardRef,
  useImperativeHandle,
} from "react";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";
import { Icons } from "./icons";
import { useTheme } from "next-themes";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Mention from "@tiptap/extension-mention";
import { SuggestionProps } from "@tiptap/suggestion";
import Placeholder from "@tiptap/extension-placeholder";
import { soundEffects } from "@/lib/sound-effects";

interface MessageInputProps {
  message: string;
  setMessage: (value: string) => void;
  handleSend: () => void;
  disabled?: boolean;
  recipients: Recipient[];
  isMobileView?: boolean;
  conversationId?: string;
  isNewChat?: boolean;
}

// Export type for message input's focus method
export type MessageInputHandle = {
  focus: () => void;
};

// Forward ref component to expose focus method to parent
export const MessageInput = forwardRef<
  MessageInputHandle,
  Omit<MessageInputProps, "ref">
>(function MessageInput(
  {
    message,
    setMessage,
    handleSend,
    disabled = false,
    recipients,
    isMobileView = false,
    conversationId,
    isNewChat = false,
  },
  ref
) {
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const pickerRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const { theme } = useTheme();

  // Tiptap editor definition
  const editor = useEditor({
    extensions: [
      StarterKit,
      Placeholder.configure({
        placeholder: "Type a message...",
      }),
      Mention.configure({
        HTMLAttributes: {
          class: "mention-node",
          style: "color: #0A7CFF !important; font-weight: 500 !important;",
          onanimationend: 'this.classList.add("shimmer-done")',
        },
        renderText: ({ node }) => {
          // Try to find the recipient by ID to get their name
          const recipient = recipients.find((r) => r.id === node.attrs.id);
          return (
            recipient?.name.split(" ")[0] ?? node.attrs.label ?? node.attrs.id
          );
        },
        renderHTML: ({ node }) => {
          // Try to find the recipient by ID to get their name
          const recipient = recipients.find((r) => r.id === node.attrs.id);
          const label =
            recipient?.name.split(" ")[0] ?? node.attrs.label ?? node.attrs.id;
          return [
            "span",
            {
              "data-type": "mention",
              "data-id": node.attrs.id,
              "data-label": label,
              class: "mention-node",
              style: "color: #0A7CFF !important; font-weight: 500 !important;",
            },
            label,
          ];
        },
        suggestion: {
          items: ({ query }: { query: string }) => {
            if (!query) return [];

            const searchText = query.toLowerCase().replace(/^@/, "");
            return recipients
              .filter((recipient) => {
                const [firstName] = recipient.name.split(" ");
                return firstName.toLowerCase().startsWith(searchText);
              })
              .slice(0, 5)
              .map((match) => ({
                id: match.id,
                label: match.name.split(" ")[0],
              }));
          },
          render: () => {
            let component: {
              element: HTMLElement;
              update: (props: {
                items: Array<{ id: string; label: string }>;
                query: string;
                command: (attrs: { id: string; label: string }) => void;
              }) => void;
            };
            return {
              onStart: (props: SuggestionProps) => {
                const { editor } = props;
                component = {
                  element: document.createElement("div"),
                  update: (props) => {
                    if (!props.query) return;

                    const match = props.items.find(
                      (item) =>
                        item.label.toLowerCase() ===
                        props.query.toLowerCase().replace(/^@/, "")
                    );

                    if (match) {
                      const { tr } = editor.state;
                      const start = tr.selection.from - props.query.length - 1;
                      const end = tr.selection.from;
                      editor
                        .chain()
                        .focus()
                        .deleteRange({ from: start, to: end })
                        .insertContent([
                          {
                            type: "mention",
                            attrs: { id: match.id, label: match.label },
                          },
                        ])
                        .run();
                    }
                  },
                };
                return component;
              },
              onUpdate: (props: SuggestionProps) => {
                component?.update(props);
              },
              onExit: () => {
                component?.element.remove();
              },
            };
          },
          char: "@",
          allowSpaces: false,
          decorationClass: "suggestion",
        },
      }),
    ],
    content: message,
    autofocus: !isMobileView && !isNewChat ? "end" : false,
    onUpdate: ({ editor }) => {
      const element = editor.view.dom as HTMLElement;
      const height = Math.min(200, Math.max(32, element.scrollHeight));
      const containerHeight = height + 32; // Add padding (16px top + 16px bottom)
      document.documentElement.style.setProperty(
        "--dynamic-height",
        `${containerHeight}px`
      );
      setMessage(editor.getHTML());
    },
    onCreate: ({ editor }) => {
      if (!isMobileView && !isNewChat) {
        editor.commands.focus("end");
      }
    },
    editorProps: {
      attributes: {
        class:
          "w-full bg-background/80 border border-muted-foreground/20 rounded-[18px] pl-4 pr-8 py-1 text-base sm:text-sm focus:outline-none disabled:opacity-50 prose-sm prose-neutral dark:prose-invert prose flex items-center",
        enterKeyHint: "send",
        style: "min-height: 32px; max-height: 200px; overflow-y: hidden;",
      },
      handleKeyDown: (view, event) => {
        if (event.key === "Enter" && !event.shiftKey) {
          event.preventDefault();
          handleSubmit();
          if (isMobileView) {
            view.dom.blur();
          }
          return true;
        }
        return false;
      },
    },
    immediatelyRender: false,
  });

  const handleSubmit = () => {
    handleSend();
    soundEffects.playSentSound();
  };

  // Expose focus method to parent through ref
  useImperativeHandle(
    ref,
    () => ({
      focus: () => {
        // Focus editor at end of content
        if (editor) {
          editor.commands.focus("end");
        }
      },
    }),
    [editor]
  );

  // Effects
  // Update editor content when message changes
  useEffect(() => {
    if (editor && message !== editor.getHTML()) {
      editor.commands.setContent(message);
    }
  }, [message, editor, isMobileView, disabled, conversationId]);

  // Destroy editor when switching to new chat
  useEffect(() => {
    const isNewChat = conversationId === undefined;
    const shouldDestroyEditor = editor && !isNewChat;

    if (shouldDestroyEditor) {
      editor.destroy();
    }
  }, [conversationId]);

  // Focus editor at end of content
  useEffect(() => {
    if (editor && conversationId && !isMobileView && !isNewChat) {
      editor.commands.focus("end");
    }
  }, [editor, conversationId, isMobileView, isNewChat]);

  // Update editor height for multi-line messages
  useEffect(() => {
    const updateHeight = () => {
      if (editor) {
        const element = editor.view.dom as HTMLElement;
        // Force reflow to get accurate scrollHeight
        element.style.height = "auto";
        // Get the scroll height including all content
        const contentHeight = element.scrollHeight;
        // Set the height considering padding and ensuring we don't exceed max height
        const height = Math.min(200, Math.max(32, contentHeight));
        const containerHeight = height + 32;

        // Handle height for both mobile and desktop
        element.style.height = `${height}px`;
        element.style.overflowY = height >= 200 ? "auto" : "hidden";
        document.documentElement.style.setProperty(
          "--dynamic-height",
          `${containerHeight}px`
        );
      }
    };

    // Update height on editor changes
    editor?.on("update", updateHeight);

    // Update height on window resize
    window.addEventListener("resize", updateHeight);

    // Initial height calculation
    updateHeight();

    return () => {
      window.removeEventListener("resize", updateHeight);
      editor?.off("update", updateHeight);
    };
  }, [editor, isMobileView]);

  // Reset editor height when message is cleared (e.g. after sending)
  useEffect(() => {
    if (message === "") {
      const element = editor?.view.dom as HTMLElement;
      if (element) {
        element.style.height = "32px";
        document.documentElement.style.setProperty("--dynamic-height", "64px");
      }
    }
  }, [message, editor]);

  // Handle blur with click outside and escape
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        pickerRef.current &&
        buttonRef.current &&
        !pickerRef.current.contains(event.target as Node) &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setShowEmojiPicker(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        if (showEmojiPicker) {
          setShowEmojiPicker(false);
        } else if (editor) {
          editor.commands.blur();
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [showEmojiPicker, editor]);

  return (
    <div
      className="w-full bg-background/50 backdrop-blur-md"
      style={{ height: "var(--dynamic-height, 64px)" }}
    >
      <div className="flex gap-2 p-4 h-full">
        <div className="relative w-full">
          <EditorContent editor={editor} className="w-full" />
          {/* Show send button for mobile when there's text */}
          {isMobileView && editor?.getText().trim() && (
            <button
              type="submit"
              onClick={handleSubmit}
              disabled={disabled || !message.trim()}
              className="absolute right-1 bottom-1 bg-[#0A7CFF] rounded-full p-1 text-white font-bold transition-colors"
              aria-label="Send message"
            >
              <Icons.arrowUp className="h-4 w-4" strokeWidth={3} />
            </button>
          )}
        </div>
        {/* Show emoji picker for desktop */}
        {!isMobileView && (
          <button
            ref={buttonRef}
            type="button"
            onClick={() => setShowEmojiPicker(!showEmojiPicker)}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Icons.smile className="h-5 w-5" />
          </button>
        )}
        {showEmojiPicker && !isMobileView && (
          <div
            ref={pickerRef}
            className="absolute bottom-12 right-0 z-50"
            style={{ width: "352px" }}
          >
            <Picker
              data={data}
              onEmojiSelect={(emoji: { native: string }) => {
                if (editor) {
                  editor.commands.insertContent(emoji.native);
                }
                setShowEmojiPicker(false);
              }}
              theme={theme === "dark" ? "dark" : "light"}
            />
          </div>
        )}
      </div>
    </div>
  );
});
