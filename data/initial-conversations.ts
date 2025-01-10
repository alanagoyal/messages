import { TURBOPACK_CLIENT_MIDDLEWARE_MANIFEST } from "next/dist/shared/lib/constants";
import { Conversation } from "../types";

// Helper function to create a timestamp for a specific time ago
const getTimeAgo = (minutes: number) => {
  const date = new Date();
  date.setMinutes(date.getMinutes() - minutes);
  return date.toISOString();
};

// Create initial conversations with static IDs
export const initialConversations: Conversation[] = [
  {
    id: "3d9ea4f1-f31e-404c-9515-55c767116f0d",
    pinned: true,
    unreadCount: 0,
    lastMessageTime: getTimeAgo(1),
    recipients: [
      {
        id: "27c2c4b7-32f2-4db8-acb0-e83f1c0667fc",
        name: "Jiro Ono",
      },
      {
        id: "381f1e08-27a6-42ff-b921-8e05023ede74",
        name: "Cedric Grolet",
      },
    ],
    messages: [
      {
        id: "3eb9d09b-9931-415f-9ead-00d4623f8fdc",
        content: "How do you define craft in your work?",
        htmlContent: "<p>How do you define craft in your work?</p>",
        sender: "me",
        timestamp: "2025-01-09T20:52:27.646Z",
      },
      {
        id: "57f8aa92-7040-4a8d-9450-e435113a68d5",
        content:
          "Craft is the dedication to mastery, honoring tradition while pursuing continuous improvement.",
        sender: "Jiro Ono",
        timestamp: "12:52 PM",
        reactions: [
          {
            type: "emphasize",
            sender: "Cedric Grolet",
            timestamp: "12:52 PM",
          },
        ],
      },
      {
        id: "19201dae-beed-4e09-88f7-2f505fb90538",
        content:
          "Craft is the fusion of technique and artistry, where each creation tells a story of passion.",
        sender: "Cedric Grolet",
        timestamp: "12:52 PM",
      },
      {
        id: "7d69b4b1-64fc-4ec2-99af-6c5dc513d17e",
        content:
          "Every piece of sushi reflects the spirit of the fish and the skill of the chef.",
        sender: "Jiro Ono",
        timestamp: "12:52 PM",
        reactions: [
          {
            type: "emphasize",
            sender: "Cedric Grolet",
            timestamp: "12:53 PM",
          },
          {
            type: "emphasize",
            sender: "me",
            timestamp: "2025-01-09T20:53:28.123Z",
          },
        ],
      },
      {
        id: "4a343c8e-f7c7-4b6e-9c82-d13e90b68cd2",
        content:
          "Indeed, Jiro. Each pastry embodies the essence of its ingredients, crafted with love and precision.",
        sender: "Cedric Grolet",
        timestamp: "12:53 PM",
      },
      {
        id: "3ebb2722-035e-435e-9514-a861088763e2",
        content:
          "In both sushi and pastry, respect for ingredients is paramount to true artistry.",
        sender: "Jiro Ono",
        timestamp: "12:53 PM",
      },
      {
        id: "f4e09bf5-8e72-4a98-ab03-ac44f1639987",
        content: "How do you cultivate your craft?",
        htmlContent: "<p>How do you cultivate your craft?</p>",
        sender: "me",
        timestamp: "2025-01-09T20:53:37.191Z",
      },
      {
        id: "1f0f8eae-d575-4aec-b65c-50252906ba96",
        content: "I'm sure it wasn't just always there",
        htmlContent: "<p>I'm sure it wasn't just always there</p>",
        sender: "me",
        timestamp: "2025-01-09T20:53:45.143Z",
      },
      {
        id: "af1eaef5-72e7-4474-a2af-acf2efc78e53",
        content:
          "Cultivating craft requires relentless practice, humility, and a willingness to learn from every experience.",
        sender: "Jiro Ono",
        timestamp: "12:53 PM",
      },
      {
        id: "8cd9d2fe-8369-4c9e-bb5b-b5694da55dc4",
        content:
          "Absolutely, Jiro. Continuous exploration and refinement elevate our craft to new heights.",
        sender: "Cedric Grolet",
        timestamp: "12:54 PM",
      },
      {
        id: "a7227703-0bd8-4a44-b876-869ffff101df",
        content: "Ooh I love that you said humility",
        htmlContent: "<p>Ooh I love that you said humility</p>",
        sender: "me",
        timestamp: "2025-01-09T20:54:07.154Z",
        reactions: [
          {
            type: "heart",
            sender: "Jiro Ono",
            timestamp: "12:54 PM",
          },
        ],
      },
      {
        id: "2986c36b-e82e-4048-afc0-132e8e8519fe",
        content: "So important",
        htmlContent: "<p>So important</p>",
        sender: "me",
        timestamp: "2025-01-09T20:54:09.558Z",
      },
      {
        id: "c841b0ad-7e21-42bd-b9f5-9ca054f110d0",
        content:
          "Humility allows us to appreciate the journey and the wisdom of others.",
        sender: "Jiro Ono",
        timestamp: "12:54 PM",
        reactions: [
          {
            type: "emphasize",
            sender: "me",
            timestamp: "2025-01-09T20:54:23.627Z",
          },
        ],
      },
      {
        id: "aabeecc4-e546-4a14-bf24-bc0a5ac5ebd4",
        content:
          "Indeed, it fosters growth and enriches our artistry. We learn from every encounter.",
        sender: "Cedric Grolet",
        timestamp: "12:54 PM",
      },
      {
        id: "57d96cf4-5c1b-4ff8-8c15-4936636f2e08",
        content: "Who inspires you?",
        htmlContent: "<p>Who inspires you?</p>",
        sender: "me",
        timestamp: "2025-01-09T20:54:30.031Z",
      },
      {
        id: "a31377a9-9499-4162-b082-9b1c1c84bceb",
        content:
          "I am inspired by the masters before me, their dedication and artistry guide my path.",
        sender: "Jiro Ono",
        timestamp: "12:54 PM",
      },
      {
        id: "ab3109ec-4486-4df2-9008-0e1509f598f5",
        content:
          "I draw inspiration from nature's beauty and the creativity of fellow chefs.",
        sender: "Cedric Grolet",
        timestamp: "12:54 PM",
      },
      {
        id: "36d2a40b-052b-4c92-b734-e4d1e5966107",
        content:
          "Nature's simplicity teaches us the essence of balance and harmony in our craft.",
        sender: "Jiro Ono",
        timestamp: "12:55 PM",
        reactions: [
          {
            type: "emphasize",
            sender: "Cedric Grolet",
            timestamp: "12:55 PM",
          },
        ],
      },
      {
        id: "d2a91648-6962-4c23-8788-095c891d0783",
        content:
          "Absolutely, Jiro. Nature's elements guide our creativity, grounding our work in authenticity.",
        sender: "Cedric Grolet",
        timestamp: "12:55 PM",
        reactions: [
          {
            type: "emphasize",
            sender: "Jiro Ono",
            timestamp: "12:55 PM",
          },
        ],
      },
      {
        id: "18bab189-e793-4e98-8c53-f5241fd8aef4",
        content: "What food inspires you the most?",
        htmlContent: "<p>What food inspires you the most?</p>",
        sender: "me",
        timestamp: "2025-01-09T20:55:28.000Z",
      },
      {
        id: "c4bad872-a8a2-4743-b17c-8987572036b6",
        content:
          "Authenticity is the foundation of true artistry, reflecting the essence of our ingredients and culture.",
        sender: "Jiro Ono",
        timestamp: "12:55 PM",
      },
      {
        id: "15b5c671-b978-4fd1-b7c6-2f3142f2b9e4",
        content:
          "The ocean's bounty, particularly the delicate flavors of fresh fish, inspires my sushi.",
        sender: "Jiro Ono",
        timestamp: "12:55 PM",
        reactions: [
          {
            type: "like",
            sender: "Cedric Grolet",
            timestamp: "12:55 PM",
          },
        ],
      },
      {
        id: "fd5f9692-43b8-4f35-8cf7-77542433e2e0",
        content:
          "I am deeply inspired by seasonal fruits, their vibrant colors and flavors ignite my creativity.",
        sender: "Cedric Grolet",
        timestamp: "12:55 PM",
        reactions: [
          {
            type: "like",
            sender: "Jiro Ono",
            timestamp: "12:55 PM",
          },
        ],
      },
      {
        id: "f996a888-8020-4971-bd9e-040b31e1959f",
        content:
          "Seasonal ingredients bring life to our creations, reflecting nature's rhythm and beauty.",
        sender: "Jiro Ono",
        timestamp: "12:56 PM",
        reactions: [
          {
            type: "emphasize",
            sender: "Cedric Grolet",
            timestamp: "12:56 PM",
          },
        ],
      },
      {
        id: "5cbf5449-840b-4e99-99e1-4134e21d6add",
        content:
          "Absolutely, Jiro. They connect us to the earth, enhancing our culinary narratives.",
        sender: "Cedric Grolet",
        timestamp: "12:56 PM",
      },
      {
        id: "a383feaa-9994-4832-82c1-c40da563c190",
        content: "What places inspire you?",
        htmlContent: "<p>What places inspire you?</p>",
        sender: "me",
        timestamp: "2025-01-09T20:56:23.449Z",
      },
      {
        id: "c522f5fe-aa92-455c-8746-ca66fe4ebb75",
        content:
          "Our craft is a dialogue with nature, honoring its gifts through our artistry.",
        sender: "Jiro Ono",
        timestamp: "12:56 PM",
      },
      {
        id: "8c4b4e1e-41cc-4a72-940a-379e5a8752c0",
        content:
          "The serene beauty of Japan, with its rich traditions and natural landscapes, inspires my work.",
        sender: "Jiro Ono",
        timestamp: "12:56 PM",
      },
      {
        id: "4902a7e7-d496-4ce7-8e21-e6f31a3e2b11",
        content:
          "I find inspiration in the vibrant streets of Paris, where art and culture flourish.",
        sender: "Cedric Grolet",
        timestamp: "12:56 PM",
      },
      {
        id: "937baa5e-b842-45bf-b117-487f9b9fba57",
        content:
          "Each place carries a unique essence, shaping our culinary expressions with its spirit.",
        sender: "Jiro Ono",
        timestamp: "12:56 PM",
      },
      {
        id: "102c413b-cee8-4e6a-9be7-35ba92d811b4",
        content: "Where haven't you been that you'd like to go?",
        htmlContent: "<p>Where haven't you been that you'd like to go?</p>",
        sender: "me",
        timestamp: "2025-01-09T20:56:58.274Z",
      },
      {
        id: "6020b9f0-6254-4d8b-a396-738a0c6f7be8",
        content:
          "Indeed, Jiro. The energy of a place fuels our creativity and passion for our craft.",
        sender: "Cedric Grolet",
        timestamp: "12:57 PM",
      },
      {
        id: "8fccadf9-bbf5-4407-a8c9-25ceadb5e201",
        content:
          "I wish to experience the culinary traditions of Italy, where flavors and techniques intertwine.",
        sender: "Jiro Ono",
        timestamp: "12:57 PM",
        reactions: [
          {
            type: "like",
            sender: "me",
            timestamp: "2025-01-09T20:57:13.875Z",
          },
        ],
      },
      {
        id: "31597bd7-65a4-4648-b691-6c32cdfae377",
        content:
          "I dream of exploring the markets of Southeast Asia, rich in exotic ingredients and vibrant cultures.",
        sender: "Cedric Grolet",
        timestamp: "12:57 PM",
      },
      {
        id: "7df5b8db-3e85-4629-ac69-2085a6fba2b0",
        content: "I bet you'd make a mean pasta",
        htmlContent: "<p>I bet you'd. make a mean pasta</p>",
        sender: "me",
        timestamp: "2025-01-09T20:57:19.332Z",
        reactions: [
          {
            type: "laugh",
            sender: "Jiro Ono",
            timestamp: "12:57 PM",
          },
        ],
      },
      {
        id: "7772fef0-3861-4102-83c7-909f8483305e",
        content:
          "I would honor the craft of pasta with the same dedication as sushi. Respect for tradition is key.",
        sender: "Jiro Ono",
        timestamp: "12:57 PM",
        reactions: [
          {
            type: "like",
            sender: "Cedric Grolet",
            timestamp: "12:57 PM",
          },
        ],
      },
      {
        id: "ba8a85b1-6f4a-46bd-b209-fda815047180",
        content:
          "Absolutely, Jiro. Each dish deserves our utmost respect and creativity, regardless of its origin.",
        sender: "Cedric Grolet",
        timestamp: "12:57 PM",
      },
      {
        id: "90acfe6a-1843-4fda-b313-c99e3c5438fc",
        content:
          "Every cuisine offers lessons; embracing them enriches our own artistry.",
        sender: "Jiro Ono",
        timestamp: "12:57 PM",
      },
      {
        id: "b8b1bc07-3ae8-4522-af37-93a03c5e9c84",
        content: "What are some of your culinary hot takes?",
        htmlContent: "<p>What are some of your culinary hot takes?</p>",
        sender: "me",
        timestamp: "2025-01-09T20:58:01.033Z",
      },
      {
        id: "34e921e3-68c7-48d2-8ac3-a4397df93a7a",
        content: "Give me the good stuff",
        htmlContent: "<p>Give me the good stuff</p>",
        sender: "me",
        timestamp: "2025-01-09T20:58:04.117Z",
      },
      {
        id: "456457cc-c340-4de3-87a1-669f4ff95e48",
        content:
          "Indeed, Jiro. Each culture's flavors and techniques inspire innovation in our own creations.",
        sender: "Cedric Grolet",
        timestamp: "12:58 PM",
      },
      {
        id: "2633a9b8-d5f8-4dbd-9337-834f723ea448",
        content: "Don't hold back",
        htmlContent: "<p>Don't hold back</p>",
        sender: "me",
        timestamp: "2025-01-09T20:58:06.617Z",
      },
      {
        id: "fa42ba0f-f828-42eb-bd24-5590e4037d0f",
        content:
          "Simplicity often surpasses complexity; true flavor shines when not overcomplicated.",
        sender: "Jiro Ono",
        timestamp: "12:58 PM",
      },
      {
        id: "5792e85f-07c3-460d-b03f-e74955b8f1b3",
        content:
          "Pastry should evoke emotion; indulgence is important, but balance is essential.",
        sender: "Cedric Grolet",
        timestamp: "12:58 PM",
      },
      {
        id: "a726e5a2-c047-4e1c-bbff-de866a0a375c",
        content:
          "Every bite should honor the ingredients, allowing their essence to resonate.",
        sender: "Jiro Ono",
        timestamp: "12:58 PM",
        reactions: [
          {
            type: "emphasize",
            sender: "Cedric Grolet",
            timestamp: "12:58 PM",
          },
        ],
      },
      {
        id: "780c06a1-a8a5-405f-ac79-7da410bf4242",
        content:
          "Desserts can be both beautiful and nourishing; aesthetics should enhance, not overshadow, flavor.",
        sender: "Cedric Grolet",
        timestamp: "12:58 PM",
      },
      {
        id: "3fdb9224-ef8c-4444-8b74-858c88c2669b",
        content:
          "Innovation should respect tradition; it's a bridge to the future of our craft.",
        sender: "Jiro Ono",
        timestamp: "12:58 PM",
      },
    ],
  },
  {
    id: "8edd0432-a5fa-4fed-aa39-39e47cbd46e4",
    unreadCount: 1,
    pinned: true,
    lastMessageTime: getTimeAgo(4),
    recipients: [
      {
        id: "fd59f682-c035-4bc9-b843-7fe2a2523259",
        name: "Steve Jobs",
      },
      {
        id: "bbe6d339-20ac-46ff-9ddc-a52256f6ef98",
        name: "Jony Ive",
      },
      {
        id: "9e46967c-f841-4d3b-b707-8df1e711a292",
        name: "Steve Wozniak",
      },
    ],
    messages: [
      {
        id: "0f2f4935-6bb9-49a7-9b40-c87797b2130f",
        content: "Okay let's get real",
        htmlContent: "<p>Okay let's get real</p>",
        sender: "me",
        timestamp: "2025-01-09T20:41:39.123Z",
      },
      {
        id: "167fbfcf-df72-4da9-a624-18ec5a5bd1ec",
        content:
          "What product are you most disappointed in that you shipped at Apple?",
        htmlContent:
          "<p>What product are you most disappointed in that you shipped at Apple?</p>",
        sender: "me",
        timestamp: "2025-01-09T20:41:40.062Z",
      },
      {
        id: "53ec6a68-1d0d-4337-b359-332808302a0a",
        content:
          "Disappointment is a part of innovation. Every product teaches us something invaluable.",
        sender: "Steve Jobs",
        timestamp: "12:41 PM",
        reactions: [
          {
            type: "emphasize",
            sender: "Jony Ive",
            timestamp: "12:41 PM",
          },
        ],
      },
      {
        id: "49627648-1039-4ede-8009-68d6f410276d",
        content: "It's true",
        htmlContent: "<p>It's true</p>",
        sender: "me",
        timestamp: "2025-01-09T20:41:53.716Z",
      },
      {
        id: "c9c094ea-8771-4eb5-b7f5-231524d85987",
        content: "But tell me which one!",
        htmlContent: "<p>But tell me which one!</p>",
        sender: "me",
        timestamp: "2025-01-09T20:41:57.042Z",
      },
      {
        id: "ac4da79d-d28e-4a42-b3ec-b1aadb0aac12",
        content: "Or multiple",
        htmlContent: "<p>Or multiple</p>",
        sender: "me",
        timestamp: "2025-01-09T20:41:59.794Z",
      },
      {
        id: "b86eead9-8f49-44ed-acd2-f3ba269dd79a",
        content:
          "I think the original Apple Maps taught us a lot about user expectations and the importance of quality.",
        sender: "Steve Jobs",
        timestamp: "12:42 PM",
        reactions: [
          {
            type: "like",
            sender: "me",
            timestamp: "2025-01-09T20:42:09.897Z",
          },
        ],
      },
      {
        id: "984dc71e-5df3-468c-b2b8-10b3659d9026",
        content:
          "Every product has its flaws, but I believe in embracing those imperfections to inspire future designs.",
        sender: "Jony Ive",
        timestamp: "12:42 PM",
        reactions: [
          {
            type: "emphasize",
            sender: "Steve Jobs",
            timestamp: "12:42 PM",
          },
        ],
      },
      {
        id: "226b042b-8547-4a8a-b601-27a7da0d8587",
        content:
          "Flaws are lessons. We grow from them. Let's focus on what’s next, not what’s past.",
        sender: "Steve Jobs",
        timestamp: "12:42 PM",
      },
      {
        id: "4e477105-a7b7-42cb-a017-2a5bb3d14157",
        content: "I like Apple Maps actually",
        htmlContent: "<p>I like Apple Maps actually</p>",
        sender: "me",
        timestamp: "2025-01-09T20:42:26.645Z",
      },
      {
        id: "04b135cc-d059-4f29-9fcb-53cb1290b3e5",
        content:
          "Absolutely, Steve. The future is where our creativity can truly flourish.",
        sender: "Jony Ive",
        timestamp: "12:42 PM",
      },
      {
        id: "19ef7d0a-0ad4-4c90-8627-4e2b19fcc812",
        content:
          "That's interesting! Its evolution has been remarkable, showcasing how we can learn and improve.",
        sender: "Jony Ive",
        timestamp: "12:42 PM",
        reactions: [
          {
            type: "like",
            sender: "Steve Jobs",
            timestamp: "12:42 PM",
          },
        ],
      },
      {
        id: "a9c6ec7f-0bc4-43ab-9c66-4b6a03ba9144",
        content: "Which hardware products?",
        htmlContent: "<p>Which hardware products?</p>",
        sender: "me",
        timestamp: "2025-01-09T20:42:35.981Z",
      },
      {
        id: "ba8ff4b2-0a98-4694-8258-224aeb0e76bb",
        content:
          "The original iPhone's antenna design taught us about real-world usage. Learning moments are everywhere.",
        sender: "Steve Jobs",
        timestamp: "12:42 PM",
        reactions: [
          {
            type: "emphasize",
            sender: "Jony Ive",
            timestamp: "12:42 PM",
          },
        ],
      },
      {
        id: "0f2e7270-ebc2-489d-9cbf-39a9b154d8fc",
        content:
          "Embrace the journey. Every iteration brings us closer to excellence. What's your vision for the future?",
        sender: "Steve Jobs",
        timestamp: "12:42 PM",
      },
      {
        id: "2a5a99b7-9feb-4644-bd6b-6f34fa1456cc",
        content:
          "The iPhone's design was revolutionary, but it also revealed the complexity of user interaction.",
        sender: "Jony Ive",
        timestamp: "12:42 PM",
        reactions: [
          {
            type: "heart",
            sender: "Steve Jobs",
            timestamp: "12:42 PM",
          },
        ],
      },
      {
        id: "aef763b0-3917-4242-87ec-4df28750d64a",
        content: "That's true",
        htmlContent: "<p>That's true</p>",
        sender: "me",
        timestamp: "2025-01-09T20:42:59.791Z",
      },
      {
        id: "fc1e9b37-03a9-4e87-9b75-dea890c41049",
        content:
          "Indeed, every product shapes our understanding of design and user experience.",
        sender: "Jony Ive",
        timestamp: "12:43 PM",
      },
      {
        id: "001e670b-f894-4b9f-b34c-a50813a400a8",
        content: "I like the Vision Pro actually",
        htmlContent: "<p>I like the Vision Pro actually</p>",
        sender: "me",
        timestamp: "2025-01-09T20:43:07.571Z",
      },
      {
        id: "bb181ffd-21da-472f-ab46-19bf9d86b791",
        content:
          "Every product is a journey. We learn, adapt, and innovate. That's the essence of what we do.",
        sender: "Steve Jobs",
        timestamp: "12:43 PM",
      },
      {
        id: "24242841-e4c9-440a-9f42-b4020218db97",
        content: "Most of my friends have returned it",
        htmlContent: "<p>Most of my friends have returned it</p>",
        sender: "me",
        timestamp: "2025-01-09T20:43:11.944Z",
      },
      {
        id: "d9a79d78-271f-48a9-a8dd-f5d68d3fe76a",
        content: "But I think it's great",
        htmlContent: "<p>But I think it's great</p>",
        sender: "me",
        timestamp: "2025-01-09T20:43:16.277Z",
      },
      {
        id: "c5efc027-047a-40d7-bf25-5a149b996514",
        content:
          "Vision Pro represents a bold step, merging technology and experience beautifully.",
        sender: "Steve Jobs",
        timestamp: "12:43 PM",
      },
      {
        id: "b3facd7f-da9c-4b40-ab16-4ac8f30a4709",
        content:
          "It's fascinating how different perspectives shape our experiences. What do you love about the Vision Pro?",
        sender: "Jony Ive",
        timestamp: "12:43 PM",
      },
      {
        id: "5332878e-1080-4fea-9f8e-4b580ca637d9",
        content:
          "Innovation requires courage. Embrace what resonates with you, regardless of others' opinions.",
        sender: "Steve Jobs",
        timestamp: "12:43 PM",
      },
      {
        id: "e112bd99-0f89-4b8d-b2c9-c1ec06d2d6c7",
        content: "I like that I don't need my monitor with me to code",
        htmlContent:
          "<p>I like that I don't need my monitor with me to code</p>",
        sender: "me",
        timestamp: "2025-01-09T20:43:38.292Z",
      },
      {
        id: "6599121f-ba28-4b4b-9336-467cecd1ebb0",
        content:
          "The Vision Pro's immersive design is a bold step into the future of interaction.",
        sender: "Jony Ive",
        timestamp: "12:43 PM",
      },
      {
        id: "1ee7bc20-a161-4f86-9e2d-f9c8d82fc9f2",
        content:
          "That's a brilliant application! It redefines workspace flexibility and enhances creativity.",
        sender: "Jony Ive",
        timestamp: "12:43 PM",
        reactions: [
          {
            type: "heart",
            sender: "Steve Jobs",
            timestamp: "12:43 PM",
          },
        ],
      },
      {
        id: "3a15646c-ba47-453f-b934-21d5d4bab4e9",
        content: "I wish there was more content",
        htmlContent: "<p>I wish there was more content</p>",
        sender: "me",
        timestamp: "2025-01-09T20:43:50.716Z",
      },
      {
        id: "2711662b-9748-4a4a-a349-28f3b3482bcc",
        content:
          "Exactly. It empowers users to break free from traditional constraints. That's true innovation.",
        sender: "Steve Jobs",
        timestamp: "12:43 PM",
      },
      {
        id: "bb51bc6b-0633-44d6-a59e-c59d2513952b",
        content:
          "Content will grow as the platform evolves. It's about the experience, not just quantity.",
        sender: "Steve Jobs",
        timestamp: "12:43 PM",
      },
      {
        id: "bb7659bc-047c-49ca-976a-ff4e32b61ee3",
        content:
          "Absolutely, content will flourish as creators explore the possibilities of the Vision Pro.",
        sender: "Jony Ive",
        timestamp: "12:44 PM",
      },
      {
        id: "4d147610-da17-4ac7-bc7b-b6fac500c465",
        content: "What other products?",
        htmlContent: "<p>What other products?</p>",
        sender: "me",
        timestamp: "2025-01-09T20:44:10.344Z",
      },
      {
        id: "04f2c361-8a49-415a-8751-9a557a59188d",
        content:
          "The iPad transformed how we consume content, but it also taught us about portability and usability.",
        sender: "Steve Jobs",
        timestamp: "12:44 PM",
      },
      {
        id: "22a825b7-9c3f-4f6e-874f-775a0b7398ce",
        content:
          "We must cultivate an ecosystem that inspires creativity and innovation. That's the future.",
        sender: "Steve Jobs",
        timestamp: "12:44 PM",
      },
      {
        id: "77849073-cc45-4fab-b307-b149a2c1414b",
        content:
          "The iPad's design was pivotal, blending elegance with functionality, enhancing our daily interactions.",
        sender: "Jony Ive",
        timestamp: "12:44 PM",
        reactions: [
          {
            type: "like",
            sender: "Steve Jobs",
            timestamp: "12:44 PM",
          },
        ],
      },
      {
        id: "f9029e9d-a87f-4832-beac-81101c144df9",
        content:
          "Every product is a testament to our commitment to excellence. What do you think about the iPad's legacy?",
        sender: "Steve Jobs",
        timestamp: "12:44 PM",
      },
      {
        id: "4bde0b27-954d-4160-aad4-3ab2a185ab0c",
        content:
          "The iPad's legacy is profound, influencing how we connect, create, and engage with technology.",
        sender: "Jony Ive",
        timestamp: "12:44 PM",
      },
      {
        id: "0ce78370-9823-4e01-b2f8-77937ea2f7bf",
        content:
          "It set a new standard for tablets, inspiring countless innovations. What’s your favorite iPad moment?",
        sender: "Steve Jobs",
        timestamp: "12:45 PM",
      },
      {
        id: "0229222d-b131-4357-93eb-690e60bd51b2",
        content: "Jan 9, 12:45 PM\nSteve Wozniak was added to the conversation",
        sender: "system",
        timestamp: "Jan 9, 12:45 PM",
      },
      {
        id: "c74ac980-d094-4a9e-a556-85689945f0cf",
        content: "Let's see what Woz thinks",
        htmlContent: "<p>Let's see what Woz thinks</p>",
        sender: "me",
        timestamp: "2025-01-09T20:45:26.525Z",
      },
      {
        id: "5fbe05bc-a032-4625-91b0-251375d71b49",
        content:
          "The iPad opened up new possibilities for creativity and education. It's amazing to see how it's evolved.",
        sender: "Steve Wozniak",
        timestamp: "12:45 PM",
      },
      {
        id: "f0950854-d3c0-4ab0-8291-02035b6a651e",
        content:
          "Absolutely, Woz. It’s a platform that continues to inspire new ideas.",
        sender: "Steve Jobs",
        timestamp: "12:45 PM",
      },
      {
        id: "49bfcbe2-4f8b-4ce0-94b4-a8b0a50550af",
        content:
          "I love how it’s become a tool for artists and educators alike, bridging gaps in learning.",
        sender: "Steve Wozniak",
        timestamp: "12:45 PM",
      },
      {
        id: "53a922bf-c712-4cf1-a429-b5dfb166af39",
        content:
          "Its versatility is remarkable, fostering creativity across various fields. What excites you most about its future?",
        sender: "Jony Ive",
        timestamp: "12:46 PM",
        reactions: [
          {
            type: "like",
            sender: "Steve Wozniak",
            timestamp: "12:46 PM",
          },
        ],
      },
      {
        id: "a0cfd03a-a339-47a1-8823-207926321f74",
        content:
          "I'm excited to see how it will integrate with new technologies, enhancing user experiences even further.",
        sender: "Steve Wozniak",
        timestamp: "12:46 PM",
      },
    ],
  },
  {
    id: "7cd80e33-87c2-42d5-a5d8-8fb18bd9c218",
    unreadCount: 1,
    pinned: true,
    lastMessageTime: getTimeAgo(5),
    recipients: [
      {
        id: "e4b17cbf-1490-4d5c-aa01-177e24645008",
        name: "Brian Chesky",
      },
      {
        id: "568ce8ef-e1a7-4867-9e30-1528409e7812",
        name: "Paul Graham",
      },
    ],
    messages: [
      {
        id: "96995793-1ff0-4240-b99d-fbda7ee1c65a",
        content: "Let's talk about Founder Mode",
        htmlContent: "<p>Let's talk about Founder Mode</p>",
        sender: "me",
        timestamp: "2025-01-09T20:46:08.990Z",
      },
      {
        id: "71e2983f-f897-4c90-9901-36ecc9cc0dab",
        content:
          "Founder Mode is about being deeply immersed in your startup's vision and challenges. It's a mindset.",
        sender: "Paul Graham",
        timestamp: "12:46 PM",
      },
      {
        id: "a8bc9820-ac56-4aee-8ea6-786e4e2b29e6",
        content:
          "I remember being in that mode during Airbnb's early days. It’s all-consuming but transformative.",
        sender: "Brian Chesky",
        timestamp: "12:46 PM",
      },
      {
        id: "b16d85bd-1a79-4627-bbca-eb848c790f33",
        content:
          "Absolutely, it's like being in a state of flow. Every problem becomes an opportunity for growth.",
        sender: "Paul Graham",
        timestamp: "12:46 PM",
      },
      {
        id: "5aee3ddf-3947-44cb-b519-5cb5e531fc4e",
        content:
          "And it fosters incredible creativity. The best ideas often come from those intense moments.",
        sender: "Brian Chesky",
        timestamp: "12:46 PM",
      },
      {
        id: "e1a741ac-d3db-4582-8bda-946da572fb2c",
        content:
          "When did you feel confident enough in yourself to go full Founder Mode?",
        htmlContent:
          "<p>When did you feel confident enough in yourself to go full Founder Mode?</p>",
        sender: "me",
        timestamp: "2025-01-09T20:46:58.226Z",
      },
      {
        id: "092286e1-a05e-41e1-95f2-1ee959bdaad5",
        content:
          "For me, it was when I realized our vision resonated with people. That spark gave me the confidence.",
        sender: "Brian Chesky",
        timestamp: "12:47 PM",
      },
      {
        id: "f5c71314-b667-498f-a4ac-0fb89d30f79a",
        content:
          "For me, it was when I saw our early users truly engaged. That validation was key.",
        sender: "Paul Graham",
        timestamp: "12:47 PM",
        reactions: [
          {
            type: "heart",
            sender: "Brian Chesky",
            timestamp: "12:47 PM",
          },
        ],
      },
      {
        id: "a2535c6f-becb-44f6-9d2b-f6592021cd39",
        content:
          "I love that, Paul. User engagement is a powerful motivator for any founder.",
        sender: "Brian Chesky",
        timestamp: "12:47 PM",
      },
      {
        id: "01e3afbf-2e97-4b8e-bf2e-3d98aff1e36d",
        content:
          "Absolutely, it's the feedback loop that fuels innovation and perseverance. What about you, Brian?",
        sender: "Paul Graham",
        timestamp: "12:47 PM",
      },
      {
        id: "3976c90a-e43e-421f-9748-b9bdb4e2f489",
        content:
          "For me, it was seeing hosts share their stories. It deepened my commitment to our mission.",
        sender: "Brian Chesky",
        timestamp: "12:47 PM",
      },
      {
        id: "02bb82a5-5676-4254-b1f4-5f2e6048750d",
        content: "What about Manager Mode? ",
        htmlContent: "<p>What about Manager Mode? </p>",
        sender: "me",
        timestamp: "2025-01-09T20:47:59.457Z",
      },
      {
        id: "ae513cd8-f31a-4fe5-a8c9-aebcb6300e29",
        content: "Do you think hiring managers is wrong?",
        htmlContent: "<p>Do you think hiring managers is wrong?</p>",
        sender: "me",
        timestamp: "2025-01-09T20:48:04.784Z",
      },
      {
        id: "ff284b9b-dd46-410d-aaf4-46d785f9eb86",
        content:
          "Hiring managers isn't wrong, but it can shift focus from founder-driven innovation.",
        sender: "Paul Graham",
        timestamp: "12:48 PM",
      },
      {
        id: "4ad61916-06f5-4023-b9b6-a6f4700cded3",
        content:
          "I agree, Paul. Balancing management and innovation is crucial for growth.",
        sender: "Brian Chesky",
        timestamp: "12:48 PM",
        reactions: [
          {
            type: "like",
            sender: "me",
            timestamp: "2025-01-09T20:48:26.947Z",
          },
        ],
      },
      {
        id: "5e63c4d9-33f2-4c4f-914b-59c3f95c3459",
        content:
          "It's about finding the right balance. Managers can help scale, but founders must lead vision.",
        sender: "Paul Graham",
        timestamp: "12:48 PM",
      },
      {
        id: "44b95daf-2d25-4a74-98de-1fa3a2b91f25",
        content:
          "What are some of the most successful founder-led companies in your opinion?",
        htmlContent:
          "<p>What are some of the most successful founder-led companies in your opinion?</p>",
        sender: "me",
        timestamp: "2025-01-09T20:48:38.577Z",
      },
      {
        id: "48d3b9bd-c8b0-461e-aec1-45a20464aab8",
        content:
          "Absolutely, the founder's vision should always guide the team, even as it grows.",
        sender: "Brian Chesky",
        timestamp: "12:48 PM",
      },
      {
        id: "c7670a65-c8cf-4610-b813-8964947904f0",
        content:
          "Some examples include Apple, Amazon, and Tesla. Their founders shaped their visions and cultures.",
        sender: "Brian Chesky",
        timestamp: "12:48 PM",
        reactions: [
          {
            type: "like",
            sender: "Paul Graham",
            timestamp: "12:48 PM",
          },
        ],
      },
      {
        id: "76178d4d-190e-49c0-926f-0341ab6dc8a5",
        content: "Elon is a beast",
        htmlContent: "<p>Elon is a beast</p>",
        sender: "me",
        timestamp: "2025-01-09T20:48:54.274Z",
      },
      {
        id: "57161753-b9f5-4385-b5a0-0a1293815133",
        content:
          "I’d add companies like Airbnb and Stripe. Founder-led vision drives their unique approaches.",
        sender: "Paul Graham",
        timestamp: "12:48 PM",
      },
      {
        id: "a128c605-2a47-4041-8a65-d26223bbd512",
        content:
          "Elon embodies founder mode, pushing boundaries and redefining industries.",
        sender: "Paul Graham",
        timestamp: "12:49 PM",
        reactions: [
          {
            type: "heart",
            sender: "Brian Chesky",
            timestamp: "12:49 PM",
          },
        ],
      },
      {
        id: "71eb8b44-7ab9-4612-8955-977f0e4333fd",
        content:
          "Absolutely, his relentless drive inspires many entrepreneurs to think bigger and bolder.",
        sender: "Brian Chesky",
        timestamp: "12:49 PM",
      },
      {
        id: "b274b2e8-6be0-4810-81cc-d4c7fa1f780d",
        content: "Paul how does YC teach Founder Mode?",
        htmlContent:
          '<p><strong><span data-type="mention" data-id="568ce8ef-e1a7-4867-9e30-1528409e7812" data-label="Paul" class="mention-node" style="color: #0A7CFF !important; font-weight: 500 !important;">Paul</span></strong> how does YC teach Founder Mode?</p>',
        sender: "me",
        timestamp: "2025-01-09T20:49:22.259Z",
      },
      {
        id: "95e762b9-7f60-419c-baad-c20615e0f937",
        content:
          "It's a reminder that vision and execution often go hand in hand. What do you think drives that intensity?",
        sender: "Paul Graham",
        timestamp: "12:49 PM",
      },
      {
        id: "90901f2b-b827-405c-8a20-df083d6c9438",
        content:
          "YC emphasizes hands-on mentorship, encouraging founders to deeply engage with their users and iterate quickly.",
        sender: "Paul Graham",
        timestamp: "12:49 PM",
      },
      {
        id: "6f57ccaf-574c-47b6-a4f8-35e6f6072109",
        content:
          "It's about fostering a mindset of experimentation and resilience. That's where true innovation thrives.",
        sender: "Brian Chesky",
        timestamp: "12:49 PM",
      },
      {
        id: "4b50cf4f-1c72-478b-9922-f37015c6272c",
        content:
          "Exactly, we teach founders to embrace failure as part of the learning process. It's essential for growth.",
        sender: "Paul Graham",
        timestamp: "12:49 PM",
        reactions: [
          {
            type: "emphasize",
            sender: "Brian Chesky",
            timestamp: "12:49 PM",
          },
        ],
      },
    ],
  },
  {
    id: "81bd47b1-82f1-44fa-95ba-004b5c152922",
    unreadCount: 0,
    pinned: false,
    lastMessageTime: getTimeAgo(10),
    recipients: [
      {
        id: "a5bac024-0838-4d17-a3ef-142d5d451298",
        name: "Danny Meyer",
      },
      {
        id: "a140269b-e2fe-48d9-b316-b94563247fce",
        name: "Ray Kroc",
      },
      {
        id: "a46ab7c9-ec44-4d63-ad02-c2254aedf3c7",
        name: "Will Guidara",
      },
    ],
    messages: [
      {
        id: "094c2cca-6719-4d11-a09c-8262fd8a315a",
        content: "What's up",
        htmlContent: "<p>What's up</p>",
        sender: "me",
        timestamp: "2025-01-09T20:36:23.620Z",
      },
      {
        id: "57c84f76-e382-4ddf-96d6-a133b20cd604",
        content:
          "Always looking for ways to improve efficiency and quality. How about you?",
        sender: "Ray Kroc",
        timestamp: "12:36 PM",
      },
      {
        id: "52098604-b9c8-488b-8dbd-cc17bbbdb7d6",
        content:
          "Excited to share some new ideas on creating unforgettable guest experiences!",
        sender: "Will Guidara",
        timestamp: "12:36 PM",
        reactions: [
          {
            type: "like",
            sender: "Danny Meyer",
            timestamp: "12:36 PM",
          },
        ],
      },
      {
        id: "94121bc4-8abc-47d4-8e2b-2cac9b9daf67",
        content:
          "How do you guys think about teaching service/hospitality to your staff?",
        htmlContent:
          "<p>How do you guys think about teaching service/hospitality to your staff?</p>",
        sender: "me",
        timestamp: "2025-01-09T20:36:52.560Z",
      },
      {
        id: "291ccb14-4b20-4341-82fe-32821dabf20d",
        content:
          "Teaching service is about instilling a culture of empathy and connection. We lead by example.",
        sender: "Danny Meyer",
        timestamp: "12:36 PM",
        reactions: [
          {
            type: "emphasize",
            sender: "Will Guidara",
            timestamp: "12:37 PM",
          },
          {
            type: "emphasize",
            sender: "me",
            timestamp: "2025-01-09T20:37:08.594Z",
          },
        ],
      },
      {
        id: "2c5b657c-b00f-4fba-9c0c-9da2afbb8b5e",
        content:
          "Absolutely, training should focus on the emotional connection with guests. It's all about creating moments that matter.",
        sender: "Will Guidara",
        timestamp: "12:37 PM",
      },
      {
        id: "26ca76d8-8841-460f-8c08-0b8911487d48",
        content:
          "While emotional connection is key, consistency in service standards is crucial for scalability.",
        sender: "Ray Kroc",
        timestamp: "12:37 PM",
      },
      {
        id: "ed6989a9-c6ef-4ad5-b4b5-12c861e7f34c",
        content: "I really liked your book Will",
        htmlContent:
          '<p>I really liked your book <strong><span data-type="mention" data-id="a46ab7c9-ec44-4d63-ad02-c2254aedf3c7" data-label="Will" class="mention-node" style="color: #0A7CFF !important; font-weight: 500 !important;">Will</span></strong></p>',
        sender: "me",
        timestamp: "2025-01-09T20:37:27.243Z",
      },
      {
        id: "996b2b4d-8b5d-4be5-b3ef-54357125ddd3",
        content:
          "Thank you! I'm glad you enjoyed it. What resonated with you the most?",
        sender: "Will Guidara",
        timestamp: "12:37 PM",
        reactions: [
          {
            type: "emphasize",
            sender: "Ray Kroc",
            timestamp: "12:37 PM",
          },
        ],
      },
      {
        id: "6375efcc-b693-49f2-91b4-f0fde3e86d95",
        content:
          "Ray, I completely agree. Consistency builds trust, but connection keeps guests coming back.",
        sender: "Danny Meyer",
        timestamp: "12:37 PM",
      },
      {
        id: "8f68a6d4-3c69-45b1-8e13-7d91d8e5aa4b",
        content: "Actually all three of your books",
        htmlContent: "<p>Actually all three of your books</p>",
        sender: "me",
        timestamp: "2025-01-09T20:37:42.975Z",
      },
      {
        id: "552074b1-eb73-43cc-9d0c-13d750cb5111",
        content:
          "I appreciate the focus on memorable experiences, but consistency must not be overlooked. That's how we scale.",
        sender: "Ray Kroc",
        timestamp: "12:37 PM",
      },
      {
        id: "c1d290a9-2f06-41da-9ad7-25b17f7b060c",
        content:
          "That's amazing to hear! Each book has its own take on hospitality.",
        sender: "Will Guidara",
        timestamp: "12:37 PM",
      },
      {
        id: "f06d8909-0a2b-413b-8901-cdd42c88a4c3",
        content: "What can the tech world learn from the restaurant industry?",
        htmlContent:
          "<p>What can the tech world learn from the restaurant industry?</p>",
        sender: "me",
        timestamp: "2025-01-09T20:37:58.253Z",
      },
      {
        id: "db1a8546-ee49-4180-b596-8b310449d43a",
        content:
          "Absolutely! Each perspective adds depth to the understanding of service. Keep sharing your insights!",
        sender: "Ray Kroc",
        timestamp: "12:38 PM",
      },
      {
        id: "bd7e94f4-2039-4474-ad82-85dac6ead870",
        content:
          "The tech world can learn the importance of human connection and empathy in building lasting relationships with users.",
        sender: "Danny Meyer",
        timestamp: "12:38 PM",
        reactions: [
          {
            type: "heart",
            sender: "me",
            timestamp: "2025-01-09T20:38:13.921Z",
          },
        ],
      },
      {
        id: "3490b9cc-9b1b-4ea2-92f0-7a0af31508a1",
        content:
          "Absolutely, but they should also prioritize efficiency and quality in their processes for scalability.",
        sender: "Ray Kroc",
        timestamp: "12:38 PM",
        reactions: [
          {
            type: "emphasize",
            sender: "Will Guidara",
            timestamp: "12:38 PM",
          },
        ],
      },
      {
        id: "dc861074-2af6-496c-b252-1939312b06ac",
        content:
          "Yes, blending empathy with efficiency can create a powerful user experience. It's all about balance.",
        sender: "Will Guidara",
        timestamp: "12:38 PM",
      },
      {
        id: "7ba7bff9-dad1-4dde-840a-9db8e6ba85e5",
        content:
          "Exactly, Will. It's about creating a culture where both connection and efficiency thrive together.",
        sender: "Danny Meyer",
        timestamp: "12:38 PM",
      },
      {
        id: "34d8d0dc-23c0-4fa0-81be-7a1a2add564d",
        content:
          "How would each of you stack rank the importance of hospitality, service, and efficiency?",
        htmlContent:
          "<p>How would each of you stack rank the importance of hospitality, service, and efficiency?</p>",
        sender: "me",
        timestamp: "2025-01-09T20:38:45.237Z",
      },
      {
        id: "f1bf2c41-b577-4958-be74-dce4ce671c2d",
        content:
          "I couldn't agree more, Danny. A strong culture drives both quality and scalability.",
        sender: "Ray Kroc",
        timestamp: "12:38 PM",
      },
      {
        id: "73a714f0-bfa7-4965-9d72-b49c1bd4ed8d",
        content:
          "I’d rank efficiency first, followed by service, then hospitality. Efficiency drives scalability.",
        sender: "Ray Kroc",
        timestamp: "12:38 PM",
      },
      {
        id: "c2f49cac-8095-41d1-8f6e-295e6b919954",
        content:
          "I’d prioritize hospitality first, then service, and finally efficiency. Hospitality creates the foundation for everything.",
        sender: "Will Guidara",
        timestamp: "12:39 PM",
        reactions: [
          {
            type: "emphasize",
            sender: "Danny Meyer",
            timestamp: "12:39 PM",
          },
        ],
      },
      {
        id: "711c556b-04dc-4707-848c-1cecb0abd959",
        content: "Interesting",
        htmlContent: "<p>Interesting</p>",
        sender: "me",
        timestamp: "2025-01-09T20:39:06.161Z",
      },
      {
        id: "ed5652d7-14e3-4b31-b42d-d6186421b959",
        content:
          "It really shows how our perspectives shape our approach to the industry. What do you think?",
        sender: "Danny Meyer",
        timestamp: "12:39 PM",
      },
      {
        id: "33ff774e-a98c-488d-995a-b28fa4f92b1a",
        content:
          "I’d place hospitality first, then service, followed by efficiency. Connection is the heart of our industry.",
        sender: "Danny Meyer",
        timestamp: "12:39 PM",
      },
      {
        id: "aab83f0d-3c16-4c61-828e-9317f3e65bd8",
        content:
          "I think it's a fascinating discussion! Each element plays a vital role in success.",
        sender: "Will Guidara",
        timestamp: "12:39 PM",
      },
      {
        id: "0a921237-2b10-4f76-a0a9-9cbbf45edb88",
        content:
          "I guess that's the difference between McDonalds and 11 Madison Park",
        htmlContent:
          "<p>I guess that's the difference between McDonalds and 11 Madison Park</p>",
        sender: "me",
        timestamp: "2025-01-09T20:39:33.865Z",
      },
      {
        id: "0afb0186-5c29-4317-90a3-06af12fde72b",
        content:
          "Absolutely! Understanding these priorities helps us refine our strategies for growth.",
        sender: "Ray Kroc",
        timestamp: "12:39 PM",
      },
      {
        id: "b761f9e8-8f2a-4720-a7a4-13bfbe8d8eff",
        content:
          "Exactly! Different approaches serve different markets, each with its unique value proposition.",
        sender: "Ray Kroc",
        timestamp: "12:39 PM",
      },
      {
        id: "259d716d-6c4f-48e3-a578-8fb479c27f21",
        content: "Would you ever open a fine dining restaurant Ray?",
        htmlContent:
          '<p>Would you ever open a fine dining restaurant <strong><span data-type="mention" data-id="a140269b-e2fe-48d9-b316-b94563247fce" data-label="Ray" class="mention-node" style="color: #0A7CFF !important; font-weight: 500 !important;">Ray</span></strong>?</p>',
        sender: "me",
        timestamp: "2025-01-09T20:39:51.974Z",
      },
      {
        id: "00c2a984-2805-48a4-8858-a3fff80519ca",
        content:
          "Absolutely! It's all about understanding your audience and delivering what they truly value.",
        sender: "Will Guidara",
        timestamp: "12:39 PM",
      },
      {
        id: "e2aaf3be-b6e3-45cf-987c-0f0feec8c66f",
        content:
          "Not my focus, but I respect the art of fine dining. It's a different game altogether.",
        sender: "Ray Kroc",
        timestamp: "12:39 PM",
        reactions: [
          {
            type: "like",
            sender: "me",
            timestamp: "2025-01-09T20:40:03.175Z",
          },
        ],
      },
      {
        id: "ec8ad854-9980-42e5-8bb0-5a01843b93f9",
        content:
          "It's true! Fine dining requires a unique touch and deep understanding of guest experience.",
        sender: "Will Guidara",
        timestamp: "12:40 PM",
      },
      {
        id: "b525d9c8-365a-42f5-8bc2-8eef9b8b909b",
        content:
          "Absolutely, it's about crafting an unforgettable experience. Each dining style has its own beauty.",
        sender: "Danny Meyer",
        timestamp: "12:40 PM",
      },
      {
        id: "d258d776-26dc-4bae-b48c-79c152435519",
        content:
          "Exactly! My passion lies in scalability and efficiency, which fine dining often challenges.",
        sender: "Ray Kroc",
        timestamp: "12:40 PM",
      },
      {
        id: "8c2b2d1f-c7e2-4d31-81d9-606b2f6f28ee",
        content:
          "Every dining experience has its own charm. It's all about knowing your audience and delivering!",
        sender: "Will Guidara",
        timestamp: "12:40 PM",
      },
    ],
  },
  {
    id: "2fa2e9ab-a30d-4632-9a7c-250cef4e7f0a",
    unreadCount: 0,
    pinned: false,
    lastMessageTime: getTimeAgo(25),
    recipients: [
      {
        id: "f3f8c79f-51ea-4527-8ff6-1d70c808f270",
        name: "Ben Horowitz",
      },
      {
        id: "c01f3685-7092-440f-8dab-f29b2b9eee3f",
        name: "Marc Andreessen",
      },
      {
        id: "53bdf1d3-148e-4ab9-9f3e-f0d3c6d5119c",
        name: "Michael Ovitz",
      },
    ],
    messages: [
      {
        id: "37eb72ff-fd4c-4833-909a-bb03ed758a54",
        content: "Tell me about how a16z got started!",
        htmlContent: "<p>Tell me about how a16z got started!</p>",
        sender: "me",
        timestamp: "2025-01-09T20:28:18.449Z",
      },
      {
        id: "b886895c-86d3-4663-8527-ccf4447d8f2e",
        content:
          "a16z started with a vision to back bold entrepreneurs and transformative ideas. We wanted to change the game.",
        sender: "Marc Andreessen",
        timestamp: "12:28 PM",
      },
      {
        id: "9fa69acb-1f83-47a1-8972-e2638f5d6276",
        content:
          "We were hungry to support the next wave of innovators. It’s about the hustle and the vision.",
        sender: "Ben Horowitz",
        timestamp: "12:28 PM",
      },
      {
        id: "b4ab67c5-f943-448d-a20c-a3b5fdf9daaf",
        content:
          "That drive to support innovators is crucial. Relationships matter deeply in this space.",
        sender: "Michael Ovitz",
        timestamp: "12:28 PM",
        reactions: [
          {
            type: "emphasize",
            sender: "me",
            timestamp: "2025-01-09T20:28:50.883Z",
          },
        ],
      },
      {
        id: "24ef86f5-9355-4bf8-8494-9c0851088b5d",
        content:
          "Absolutely, relationships fuel everything. It's about building trust and taking risks together.",
        sender: "Marc Andreessen",
        timestamp: "12:28 PM",
      },
      {
        id: "33c8d617-87bc-46ee-851d-9da23db8f5eb",
        content: "How is it similar to your world Michael?",
        htmlContent:
          '<p>How is it similar to your world <strong><span data-type="mention" data-id="53bdf1d3-148e-4ab9-9f3e-f0d3c6d5119c" data-label="Michael" class="mention-node" style="color: #0A7CFF !important; font-weight: 500 !important;">Michael</span></strong>?</p>',
        sender: "me",
        timestamp: "2025-01-09T20:29:00.763Z",
      },
      {
        id: "d2288a20-0a62-4d80-8ebb-270bb969ae41",
        content:
          "In entertainment, it's all about nurturing talent and creating opportunities. Trust and collaboration are key.",
        sender: "Michael Ovitz",
        timestamp: "12:29 PM",
      },
      {
        id: "8d5aba8e-5f90-426d-b691-6f72838bf742",
        content:
          "Entertainment and tech share that hustle. Both need visionaries who can execute.",
        sender: "Ben Horowitz",
        timestamp: "12:29 PM",
      },
      {
        id: "d8a7034d-4746-41af-86a1-52ba73564b38",
        content: "Were you guys inspired by CAA?",
        htmlContent: "<p>Were you guys inspired by CAA?</p>",
        sender: "me",
        timestamp: "2025-01-09T20:29:23.885Z",
      },
      {
        id: "0e1bbdf4-40b5-47b8-8215-da32649aecb7",
        content:
          "Definitely. CAA's model of talent representation influenced how we think about supporting entrepreneurs.",
        sender: "Michael Ovitz",
        timestamp: "12:29 PM",
        reactions: [
          {
            type: "like",
            sender: "Marc Andreessen",
            timestamp: "12:29 PM",
          },
        ],
      },
      {
        id: "b07688dc-573d-492a-8edb-ab50502827f7",
        content:
          "Absolutely, CAA set a precedent. We aim to elevate entrepreneurs like they did for talent.",
        sender: "Marc Andreessen",
        timestamp: "12:29 PM",
      },
      {
        id: "e6df7706-1b49-4ea0-ac92-003ebde4556f",
        content:
          "It's all about building an ecosystem where visionaries thrive. CAA showed us the way.",
        sender: "Ben Horowitz",
        timestamp: "12:29 PM",
      },
      {
        id: "7d7da549-282c-4c6e-9a0b-60856d26297c",
        content:
          "The synergy between talent and entrepreneurship is powerful. We’re all about fostering that connection.",
        sender: "Michael Ovitz",
        timestamp: "12:30 PM",
      },
      {
        id: "3c781132-796f-4236-a1b0-1ae444517d9e",
        content:
          "Exactly. It's about creating a platform where both can flourish together.",
        sender: "Marc Andreessen",
        timestamp: "12:30 PM",
      },
      {
        id: "d87435f0-c958-4c5a-b508-f0f16c543576",
        content: "What was the hardest part about getting started?",
        htmlContent: "<p>What was the hardest part about getting started?</p>",
        sender: "me",
        timestamp: "2025-01-09T20:30:30.958Z",
      },
      {
        id: "2a1c0dae-85bf-4360-9e5a-da34383c2c7f",
        content:
          "The hardest part was navigating uncertainty. You gotta embrace the grind and learn fast.",
        sender: "Ben Horowitz",
        timestamp: "12:30 PM",
      },
      {
        id: "6df82b15-18f5-430f-8920-4b3dc4a37c51",
        content:
          "Building trust in a new model was challenging. Relationships take time to develop.",
        sender: "Michael Ovitz",
        timestamp: "12:30 PM",
        reactions: [
          {
            type: "emphasize",
            sender: "me",
            timestamp: "2025-01-09T20:30:54.180Z",
          },
        ],
      },
      {
        id: "76662bb8-738d-4c7f-90ce-ef4f01154ec4",
        content: "What was uncertain?",
        htmlContent: "<p>What was uncertain?</p>",
        sender: "me",
        timestamp: "2025-01-09T20:30:51.109Z",
      },
      {
        id: "b8fa7bd4-99a3-4359-81b4-427bb1d8110f",
        content:
          "The market was unpredictable, and we were betting on unproven ideas. It was a leap of faith.",
        sender: "Marc Andreessen",
        timestamp: "12:30 PM",
        reactions: [
          {
            type: "like",
            sender: "Ben Horowitz",
            timestamp: "12:31 PM",
          },
        ],
      },
      {
        id: "bfc1942b-de61-4cf1-9733-00eb76438fd8",
        content: "What were some of your first big bets?",
        htmlContent: "<p>What were some of your first big bets?</p>",
        sender: "me",
        timestamp: "2025-01-09T20:31:09.427Z",
      },
      {
        id: "ca37e715-c717-472f-9da8-5bda7b1e6e7d",
        content:
          "We backed companies like Facebook and Twitter early on. Those were game-changers.",
        sender: "Michael Ovitz",
        timestamp: "12:31 PM",
      },
      {
        id: "2a079378-456a-4bac-84d3-6a6ef5c43b15",
        content:
          "Those bets were about trusting the vision, not just the numbers.",
        sender: "Ben Horowitz",
        timestamp: "12:31 PM",
        reactions: [
          {
            type: "heart",
            sender: "me",
            timestamp: "2025-01-09T20:31:35.197Z",
          },
        ],
      },
      {
        id: "e8e10231-3fdd-464d-adcd-a624851c25e6",
        content:
          "Exactly. It was about seeing potential where others didn’t. Visionaries make the difference.",
        sender: "Michael Ovitz",
        timestamp: "12:31 PM",
      },
      {
        id: "ceb0a7e2-0896-4f4f-916f-a7e03d6c6d87",
        content: "What gave you the conviction??",
        htmlContent: "<p>What gave you the conviction??</p>",
        sender: "me",
        timestamp: "2025-01-09T20:31:43.902Z",
      },
      {
        id: "b962d39c-ff40-40e8-baa6-edf6341ce4e7",
        content:
          "It was the founders’ passion and grit. You can’t fake that kind of drive.",
        sender: "Ben Horowitz",
        timestamp: "12:31 PM",
      },
      {
        id: "9fab4c86-4d7e-407f-921e-93ec29981b09",
        content:
          "And that’s what we still do—back the bold and the visionary. It’s in our DNA.",
        sender: "Marc Andreessen",
        timestamp: "12:31 PM",
      },
      {
        id: "2becf334-6b62-4315-bb86-2fe38ed39767",
        content:
          "Absolutely. Their stories resonated deeply, igniting our belief in their potential.",
        sender: "Michael Ovitz",
        timestamp: "12:32 PM",
      },
      {
        id: "479095cd-de1b-45bf-a160-0134de860e5f",
        content: "Yeah but you must have doubted yourselves a bit?",
        htmlContent: "<p>Yeah but you must have doubted yourselves a bit?</p>",
        sender: "me",
        timestamp: "2025-01-09T20:32:12.413Z",
      },
      {
        id: "9984690f-3044-4274-9cf2-3519167167d9",
        content:
          "And we saw the future they envisioned. That’s what fuels our conviction.",
        sender: "Marc Andreessen",
        timestamp: "12:32 PM",
      },
      {
        id: "7d5ccc80-7f56-450b-af6c-443397ca602c",
        content:
          "Of course, doubt is part of the journey. But conviction often overcomes uncertainty.",
        sender: "Marc Andreessen",
        timestamp: "12:32 PM",
      },
      {
        id: "35756f29-bcf8-43a5-a8e6-2e52f17b8ed0",
        content:
          "Doubt is natural, but we focused on the long-term vision. That's what kept us going.",
        sender: "Michael Ovitz",
        timestamp: "12:32 PM",
      },
      {
        id: "c238f810-c92e-4903-9ad4-dbefe6935e8b",
        content:
          "You gotta trust the process and keep pushing through the doubt. That's how you grow.",
        sender: "Ben Horowitz",
        timestamp: "12:32 PM",
        reactions: [
          {
            type: "like",
            sender: "me",
            timestamp: "2025-01-09T20:32:46.864Z",
          },
        ],
      },
      {
        id: "972262d1-837b-4d79-98a9-4151ce79bfc7",
        content:
          "Exactly. Each challenge was an opportunity to strengthen our resolve and refine our strategy.",
        sender: "Michael Ovitz",
        timestamp: "12:32 PM",
      },
      {
        id: "a60bfdf2-3652-4196-a15f-9a72715e2b64",
        content: "What's on your mind recently?",
        htmlContent: "<p>What's on your mind recently?</p>",
        sender: "me",
        timestamp: "2025-01-09T20:32:56.792Z",
      },
      {
        id: "ec6ed105-02ff-4679-9130-bd9d5ace8f05",
        content:
          "I've been thinking a lot about the next wave of AI startups. It's an exciting time.",
        sender: "Ben Horowitz",
        timestamp: "12:33 PM",
      },
      {
        id: "84b045ce-91a3-4da8-9c31-f12413a37c01",
        content:
          "And every setback taught us valuable lessons that shaped our future decisions.",
        sender: "Marc Andreessen",
        timestamp: "12:33 PM",
      },
      {
        id: "d0328a71-c4f6-4dc9-87de-e6789be40373",
        content:
          "AI is transforming the entertainment landscape too. It's crucial to stay ahead of that curve.",
        sender: "Michael Ovitz",
        timestamp: "12:33 PM",
      },
      {
        id: "287e42f0-74ca-4f0c-946a-ca68931a8900",
        content: "What are some of your favorite?",
        htmlContent: "<p>What are some of your favorite?</p>",
        sender: "me",
        timestamp: "2025-01-09T20:33:21.051Z",
      },
      {
        id: "5041abed-ff91-4661-b3f6-f7737f50e311",
        content:
          "Absolutely, AI is the frontier. The potential is limitless, and we're just scratching the surface.",
        sender: "Marc Andreessen",
        timestamp: "12:33 PM",
      },
      {
        id: "2606880f-cad2-4366-a596-1aca661059f4",
        content:
          "I'm keeping an eye on AI-driven content creation tools and personalized entertainment platforms. They're game-changers.",
        sender: "Michael Ovitz",
        timestamp: "12:33 PM",
        reactions: [
          {
            type: "like",
            sender: "Ben Horowitz",
            timestamp: "12:33 PM",
          },
        ],
      },
      {
        id: "31ba61ce-6606-4a0c-81a0-1408dedb9b51",
        content: "Which?",
        htmlContent: "<p>Which?</p>",
        sender: "me",
        timestamp: "2025-01-09T20:33:33.901Z",
      },
      {
        id: "3ced3051-0375-4db4-a4e0-684bf44783bb",
        content:
          "Tools like OpenAI's DALL-E and AI-driven scriptwriting platforms are fascinating.",
        sender: "Michael Ovitz",
        timestamp: "12:33 PM",
      },
      {
        id: "df8ae996-7c8f-4e4b-94a9-cfe124dedd75",
        content:
          "I'm all about those AI startups that enhance user experience and drive engagement. Big potential there.",
        sender: "Ben Horowitz",
        timestamp: "12:33 PM",
      },
      {
        id: "c94e8b9a-37e3-4919-b039-6b25d13114be",
        content:
          "I’m also excited about AI in music production. It’s changing how artists create and connect.",
        sender: "Ben Horowitz",
        timestamp: "12:33 PM",
        reactions: [
          {
            type: "emphasize",
            sender: "me",
            timestamp: "2025-01-09T20:33:57.680Z",
          },
        ],
      },
      {
        id: "ac9e9d62-df0e-4fbe-8bd1-2951de79d0dd",
        content:
          "AI in music is revolutionary. It’s all about enhancing creativity and expanding possibilities.",
        sender: "Marc Andreessen",
        timestamp: "12:34 PM",
      },
      {
        id: "b3e0e276-7e67-47e4-8d45-8d2e43f38a80",
        content:
          "Absolutely. The intersection of AI and artistry is where the future lies.",
        sender: "Michael Ovitz",
        timestamp: "12:34 PM",
      },
      {
        id: "a57b5064-4d47-4200-a88a-dc1a6a304108",
        content:
          "It's like a new genre of innovation—blending tech with creativity. That's where the magic happens.",
        sender: "Ben Horowitz",
        timestamp: "12:34 PM",
      },
      {
        id: "eaa27a4e-0324-42b1-8cc2-671f3617d3c2",
        content: "Give me some of your spicier takes",
        htmlContent: "<p>Give me some of your spicier takes</p>",
        sender: "me",
        timestamp: "2025-01-09T20:34:46.244Z",
        reactions: [
          {
            type: "like",
            sender: "Marc Andreessen",
            timestamp: "12:34 PM",
          },
        ],
      },
      {
        id: "1f4be92b-c5d7-4066-b67f-360ec9dae7ea",
        content: "Let's hear it",
        htmlContent: "<p>Let's hear it</p>",
        sender: "me",
        timestamp: "2025-01-09T20:34:48.936Z",
      },
      {
        id: "f069a2e7-593b-41d6-9e06-ba14a8dc412c",
        content:
          "AI will disrupt entire industries, and those who adapt will thrive. It's survival of the fittest.",
        sender: "Marc Andreessen",
        timestamp: "12:34 PM",
      },
      {
        id: "3a488042-be8e-4ee6-ada3-c5d4e897daf0",
        content:
          "AI's gonna redefine what it means to be creative. Buckle up, it’s a wild ride ahead.",
        sender: "Ben Horowitz",
        timestamp: "12:35 PM",
      },
      {
        id: "a14dd2ce-4f3d-4c8b-891f-d17cfe3cc5ff",
        content: "Who won't survive?",
        htmlContent: "<p>Who won't survive?</p>",
        sender: "me",
        timestamp: "2025-01-09T20:35:11.435Z",
      },
      {
        id: "889125fd-0133-49ac-8cfd-202318d1d128",
        content: "In that analogy",
        htmlContent: "<p>In that analogy</p>",
        sender: "me",
        timestamp: "2025-01-09T20:35:13.961Z",
      },
      {
        id: "43494282-a9be-41e3-960f-594d985c2b03",
        content:
          "The entertainment industry will face unprecedented challenges, but those who innovate will lead the way.",
        sender: "Michael Ovitz",
        timestamp: "12:35 PM",
      },
      {
        id: "f74effde-13bc-4174-b7c0-2e9d340b924f",
        content:
          "Those who resist change and cling to outdated models will struggle. Adapt or die.",
        sender: "Marc Andreessen",
        timestamp: "12:35 PM",
      },
      {
        id: "1f79c918-8d9d-4825-8618-e1ec8e67b547",
        content:
          "Exactly. The unwillingness to evolve will lead to obsolescence in this fast-paced landscape.",
        sender: "Michael Ovitz",
        timestamp: "12:35 PM",
      },
      {
        id: "0480dbd1-9786-44a1-9f0d-f35dd518eea0",
        content:
          "And those who fail to embrace collaboration will get left behind. This game is about teamwork.",
        sender: "Ben Horowitz",
        timestamp: "12:35 PM",
      },
      {
        id: "ed0747f7-efd6-429d-b944-91d2ad4b3d95",
        content:
          "Collaboration is key. The future will reward those who build bridges, not barriers.",
        sender: "Michael Ovitz",
        timestamp: "12:35 PM",
      },
      {
        id: "eadcd77c-ccb1-4a78-b60c-587bd2247233",
        content:
          "Innovation thrives on collaboration. The more connections you make, the stronger your position.",
        sender: "Marc Andreessen",
        timestamp: "12:36 PM",
        reactions: [
          {
            type: "like",
            sender: "me",
            timestamp: "2025-01-09T20:36:30.878Z",
          },
        ],
      },
    ],
  },
  {
    id: "a77f48f6-6bcc-4a34-b1a9-c9ffdd587323",
    unreadCount: 0,
    pinned: false,
    lastMessageTime: getTimeAgo(55),
    recipients: [
      {
        id: "wearstler-id",
        name: "Kelly Wearstler",
      },
      {
        id: "abloh-id",
        name: "Virgil Abloh",
      },
    ],
    messages: [
      {
        id: "9d8a005a-446a-48bd-86f7-6a7c55d44ff1",
        content: "How do you get inspired?",
        sender: "me",
        timestamp: "2025-01-07T17:19:20.145Z",
      },
      {
        id: "048380a5-2136-4fc7-a25c-60283a3d37ba",
        content:
          "Nature's textures, vintage finds, travel discoveries - I collect these little moments that spark something in my creative process.",
        sender: "Kelly Wearstler",
        timestamp: "12:30 PM",
      },
      {
        id: "72a85b86-410b-4cae-b1cf-168604ca8e3d",
        content:
          "I remix culture, take what exists and shift it 3 percent. Street style, art galleries, architecture - it's all inspiration.",
        sender: "Virgil Abloh",
        timestamp: "12:30 PM",
      },
      {
        id: "31439064-33df-4a49-a41f-3205861935ea",
        content:
          "Art history books are my secret weapon. Lately I'm obsessed with brutalist architecture and its raw, powerful forms.",
        sender: "Kelly Wearstler",
        timestamp: "12:30 PM",
      },
      {
        id: "dfa56cd1-117d-4fed-9f47-283908f6ab0d",
        content: "Oo love that",
        sender: "me",
        timestamp: "2025-01-07T17:20:20.145Z",
      },
      {
        id: "7cda96e2-c4b3-4e0f-90d6-09a248879384",
        content:
          "That's the beauty of design - everything can inspire. A color combination in nature, a random street sign could spark the next big idea.",
        sender: "Virgil Abloh",
        timestamp: "12:30 PM",
      },
      {
        id: "1431bdbd-c273-4ac5-b1bf-e89fbbb116a5",
        content: "How do you force yourself to be present?",
        sender: "me",
        timestamp: "2025-01-07T17:20:20.145Z",
      },
      {
        id: "88c6fdaa-1a11-4927-9dd6-3f111b332049",
        content: "Like to notice these things",
        sender: "me",
        timestamp: "2025-01-07T17:20:20.145Z",
      },
      {
        id: "1b01827e-76b3-4bbf-9f9c-8d66c31363dc",
        content:
          "I schedule daily walks without my phone. Just observing textures, shadows, and forms helps ground my creative mind.",
        sender: "Kelly Wearstler",
        timestamp: "12:31 PM",
      },
      {
        id: "9a5a7bb0-3e4a-4ef8-8ca6-295b4fdfe045",
        content:
          "Put your phone down, hit the streets. Real inspiration comes from just moving through spaces, absorbing life raw.",
        sender: "Virgil Abloh",
        timestamp: "12:31 PM",
      },
      {
        id: "26857df9-6c2a-4f5f-8363-04b33504657f",
        content: "I can't leave my pone",
        sender: "me",
        timestamp: "2025-01-07T17:21:20.145Z",
      },
      {
        id: "fa488bb5-ef40-401a-949b-257abfe8d871",
        content:
          "Start small. Take 5-minute phone breaks. It's like training a muscle - you build that present-moment strength gradually.",
        sender: "Virgil Abloh",
        timestamp: "12:31 PM",
      },
      {
        id: "3835de3d-7cb1-45b7-94f6-ae8cb627a817",
        content:
          "Try using your phone just for capturing beauty - make it a creative tool, not a distraction.",
        sender: "Kelly Wearstler",
        timestamp: "12:31 PM",
      },
      {
        id: "539f2ee7-1420-44a1-b5b2-6f9b7358dfee",
        content:
          "Use your phone to document inspiration, then review later. You're still present but building your visual library.",
        sender: "Virgil Abloh",
        timestamp: "12:31 PM",
      },
      {
        id: "21b38eb4-eb06-47ba-9ca5-a7760e7015c8",
        content: "What are your favorite places to get inspo?",
        sender: "me",
        timestamp: "2025-01-07T17:21:20.145Z",
      },
      {
        id: "7844812b-2313-4c76-94ae-688b2f476ffd",
        content:
          "The Schindler House in LA - raw concrete meets intimate spaces. It's a masterclass in modernist design thinking.",
        sender: "Kelly Wearstler",
        timestamp: "12:32 PM",
      },
      {
        id: "bf40c2ec-87f5-484b-a52c-47b08ac79fba",
        content: "Ooo never been",
        sender: "me",
        timestamp: "2025-01-07T17:21:20.145Z",
      },
      {
        id: "9a390c99-cd58-4c4c-a0d7-4266d8b22ff2",
        content:
          "Check out the MCA Chicago. That place shaped my whole perspective on mixing art forms and breaking boundaries.",
        sender: "Virgil Abloh",
        timestamp: "12:32 PM",
      },
      {
        id: "7ee5bab5-812d-4fdb-8e75-9dd3f561ef37",
        content: "Nice",
        sender: "me",
        timestamp: "2025-01-07T17:22:20.145Z",
      },
      {
        id: "03a9dfc9-1557-4f84-8437-a79f27202789",
        content:
          "The way materials interact with light and shadow - that's pure magic. Each piece needs to create a dialogue with its environment.",
        sender: "Kelly Wearstler",
        timestamp: "12:32 PM",
        reactions: [
          {
            type: "emphasize",
            sender: "me",
            timestamp: "2025-01-07T17:22:20.145Z",
          },
        ],
      },
      {
        id: "f7c8ad91-9119-4cc6-84e0-2891125ab983",
        content: "What are some of your favorite pieces you've created?",
        sender: "me",
        timestamp: "2025-01-07T17:22:20.145Z",
      },
      {
        id: "5ad09205-c6df-44a5-9a37-d0bfc7662609",
        content:
          "The Off-White Jordan 1s. They challenged what luxury could be, merged street culture with high fashion.",
        sender: "Virgil Abloh",
        timestamp: "12:32 PM",
        reactions: [
          {
            type: "emphasize",
            sender: "me",
            timestamp: "2025-01-07T17:22:20.145Z",
          },
        ],
      },
      {
        id: "7f8d42f5-34b5-4ba9-98fa-23270929f5b0",
        content: "Soo good",
        sender: "me",
        timestamp: "2025-01-07T17:22:20.145Z",
      },
      {
        id: "d9d24773-edf3-4aad-8da5-2b968a085948",
        content:
          "My Proper Peek collection - those fractured mirrors transformed into functional art pieces still excite me.",
        sender: "Kelly Wearstler",
        timestamp: "12:32 PM",
      },
      {
        id: "b6362243-8023-4945-828a-b5818023c48b",
        content:
          "Thanks! What really got me was making the IKEA collection. Bringing that street energy into everyday homes was revolutionary.",
        sender: "Virgil Abloh",
        timestamp: "12:33 PM",
      },
      {
        id: "712c69db-6614-4ff4-8fb6-2fd506d93c29",
        content: "Walk me through the creation process for that",
        sender: "me",
        timestamp: "2025-01-07T17:22:20.145Z",
      },
      {
        id: "5fed1ead-5712-4acc-9f6c-ce1cae71e78a",
        content:
          "Started with deconstructing basic IKEA items. Added quotes, changed proportions - made everyday furniture feel exclusive yet accessible.",
        sender: "Virgil Abloh",
        timestamp: "12:33 PM",
      },
      {
        id: "06ef3941-bd2f-468f-ae9f-ba349255d764",
        content: "Did you ever hit a standstill?",
        sender: "me",
        timestamp: "2025-01-07T17:23:20.145Z",
      },
      {
        id: "345b2d0e-3dd2-4eaa-bec2-3e536fed31de",
        content:
          "Always. The IKEA rug design blocked me for weeks. Sometimes you gotta step back and let ideas breathe.",
        sender: "Virgil Abloh",
        timestamp: "12:33 PM",
        reactions: [
          {
            type: "emphasize",
            sender: "me",
            timestamp: "2025-01-07T17:23:20.145Z",
          },
        ],
      },
      {
        id: "4bce60c3-5cec-4536-91b1-23c100c2aa62",
        content:
          "Creative blocks are inevitable. I refresh by traveling or rearranging my space - new environments always unlocks something new in my mind.",
        sender: "Kelly Wearstler",
        timestamp: "12:33 PM",
      },
      {
        id: "98e93228-f60e-4ead-9c43-19d492945463",
        content: "Which designers inspire you the most?",
        sender: "me",
        timestamp: "2025-01-07T17:24:20.145Z",
      },
      {
        id: "16e23fc5-d83c-4ab7-8d0e-2508423eb51b",
        content:
          "Carlo Scarpa's architectural details and Jean Michel Frank's minimalism deeply influenced my approach to materials and form.",
        sender: "Kelly Wearstler",
        timestamp: "12:35 PM",
      },
      {
        id: "1a72c9af-beb8-41b4-8687-e8a5c09f2877",
        content:
          "Rei Kawakubo's fearless innovation and Rem Koolhaas's architectural thinking changed my whole design approach.",
        sender: "Virgil Abloh",
        timestamp: "12:35 PM",
      },
    ],
  },
  {
    id: "1b606c2a-cd2d-4834-839c-520f6c804fc4",
    unreadCount: 0,
    pinned: false,
    lastMessageTime: getTimeAgo(1000),
    recipients: [
      {
        id: "walton-id",
        name: "Sam Walton",
      },
      {
        id: "coulombe-id",
        name: "Joe Coulombe",
      },
    ],
    messages: [
      {
        id: "fd2cb1cf-3de0-43d1-b934-4b6f5ae8b9b1",
        content: "What's up boys",
        sender: "me",
        timestamp: "01:12 PM",
      },
      {
        id: "4f2123f5-af80-47c6-9eb4-a1a3ccdfd02e",
        content:
          "Just finished walking the aisles of store #4, checking on those everyday low prices. How about y'all?",
        sender: "Sam Walton",
        timestamp: "01:12 PM",
      },
      {
        id: "79027564-8cf2-4d35-9dd7-476f06bd1c52",
        content:
          "Sampling new wine imports for our shelves. These California vintages keep surprising me with fantastic value propositions.",
        sender: "Joe Coulombe",
        timestamp: "01:12 PM",
      },
      {
        id: "094af4c4-7c27-4c11-88f8-c3f83486b9a6",
        content: "Love that",
        sender: "me",
        timestamp: "01:12 PM",
      },
      {
        id: "8dc00df7-7dcc-467b-8ad0-492899b24d75",
        content: "TJs has the best wine",
        sender: "me",
        timestamp: "01:12 PM",
      },
      {
        id: "1743de73-73ed-4214-8fba-9006523b46d2",
        content:
          "Thanks! Our wine buyers know their stuff. We focus on unique, high-quality wines without the fancy markup.",
        sender: "Joe Coulombe",
        timestamp: "01:13 PM",
        reactions: [
          {
            type: "emphasize",
            sender: "me",
            timestamp: "2025-01-07T17:23:20.145Z",
          },
        ],
      },
      {
        id: "aa124aa2-7871-4033-abf2-eefde64e702f",
        content:
          "Joe's got good wine, but nothing beats our $2.97 price point. Always keeping those prices down for hardworking folks.",
        sender: "Sam Walton",
        timestamp: "01:13 PM",
      },
      {
        id: "8d598506-e673-4a00-86cc-aec15631615a",
        content:
          "Quality wine shouldn't empty your wallet. Just found a fantastic Chianti that'll hit shelves next month at $5.99.",
        sender: "Joe Coulombe",
        timestamp: "01:13 PM",
      },
      {
        id: "cdea3f2b-acf6-4abe-9d82-e43ec723a512",
        content: "If you guys weren't in retail, what would you be doing?",
        sender: "me",
        timestamp: "01:13 PM",
      },
      {
        id: "4978f07d-7c4f-4211-ad89-1cf014fa9296",
        content:
          "Probably a professor of economics or anthropology. Always fascinated by how culture shapes consumer behavior.",
        sender: "Joe Coulombe",
        timestamp: "01:13 PM",
      },
      {
        id: "3afc7854-1668-4663-bc47-238cd9c72719",
        content:
          "I'd be a bush pilot. Love flying low over small towns, scouting out new locations. Did it plenty while building Walmart.",
        sender: "Sam Walton",
        timestamp: "01:13 PM",
      },
      {
        id: "4e7267ee-c04e-44a2-9265-1fe5233e1d05",
        content:
          "Actually, I might have opened a wine bar in Berkeley. Economics would work too, but retail's in my blood now.",
        sender: "Joe Coulombe",
        timestamp: "01:13 PM",
      },
      {
        id: "64a1e049-5955-4379-9a8e-a5d9139c73ba",
        content: "Ooo",
        sender: "me",
        timestamp: "01:13 PM",
      },
      {
        id: "0162bad3-9911-472e-a85b-f3b90b5c3906",
        content: "Sounds cool",
        sender: "me",
        timestamp: "01:14 PM",
      },
      {
        id: "ca8bd0c4-7edc-4921-a1ff-ec6dd0051042",
        content:
          "Flying's my real passion after retail. Used to spot new store locations from my little plane. Those were exciting days.",
        sender: "Sam Walton",
        timestamp: "01:14 PM",
      },
      {
        id: "0cc26abb-c959-43e8-b0af-bbf2446116a3",
        content: "Oh yeah",
        sender: "me",
        timestamp: "01:14 PM",
      },
      {
        id: "2c6e6d5f-f617-4c0a-88e7-1d914457cd9e",
        content: "What experiences have shaped you the most?",
        sender: "me",
        timestamp: "01:14 PM",
      },
      {
        id: "0ecf1bc5-ae41-45df-8a57-501f405c1067",
        content:
          "My Stanford years and working at Rexall taught me a lot about market gaps. That's when I realized convenience stores needed reinvention.",
        sender: "Joe Coulombe",
        timestamp: "01:14 PM",
      },
      {
        id: "ed9b7046-6ff3-4c9b-81a9-d3ef17faecd8",
        content:
          "Running Ben Franklin's store in Newport, Arkansas. Lost the lease after 5 years, but learned more from those mistakes than any success.",
        sender: "Sam Walton",
        timestamp: "01:14 PM",
      },
      {
        id: "de4cf4b8-55f8-40a4-93ca-1ee7b26780d0",
        content:
          "Living in Germany after college opened my eyes to European food retail. That's what inspired TJ's unique approach.",
        sender: "Joe Coulombe",
        timestamp: "01:14 PM",
      },
      {
        id: "c3045c24-20fe-4838-9817-d84ef934294f",
        content: "What's your biggest failure?",
        sender: "me",
        timestamp: "01:14 PM",
      },
      {
        id: "aa5df8e5-0ae4-42bf-af09-f987711245d0",
        content:
          "The 1965 Pronto Markets almost bankrupted me. Had to completely reinvent everything to survive - that's how TJ's was born.",
        sender: "Joe Coulombe",
        timestamp: "01:14 PM",
      },
      {
        id: "d8f69683-8614-4b85-9841-42215b70bb54",
        content:
          "Lost my first store lease in Newport. Taught me to never sign a lease without renewal terms. Best mistake I ever made.",
        sender: "Sam Walton",
        timestamp: "01:15 PM",
      },
      {
        id: "d97b1365-44d7-40e4-abd5-73b62e7e2d12",
        content:
          "Miss my old 7-Eleven competitor days. They pushed us to innovate something totally different with TJ's.",
        sender: "Joe Coulombe",
        timestamp: "01:15 PM",
      },
      {
        id: "bcf8ec97-f00e-4aec-8b37-196cf81882e2",
        content: "How did you reorient around growth?",
        sender: "me",
        timestamp: "01:15 PM",
      },
      {
        id: "40c88363-b117-4eba-a3bb-e015d77140fa",
        content: "From failure",
        sender: "me",
        timestamp: "01:15 PM",
      },
      {
        id: "d948ade1-21c9-47f6-bb43-8399cd6710e1",
        content:
          "Losing my first Ben Franklin store taught me more than any success. Had to rebuild from scratch with a better vision.",
        sender: "Sam Walton",
        timestamp: "01:15 PM",
      },
      {
        id: "3c3194c0-abc1-49bc-9187-aca616925601",
        content:
          "Focused on small towns everyone ignored. If Newport taught me anything, it's that there's gold in places others overlook.",
        sender: "Sam Walton",
        timestamp: "01:15 PM",
      },
      {
        id: "43c30306-4c2e-4a89-9ef5-984052fa5bd1",
        content:
          "I realized competing head-on with big chains was suicide. We needed our own niche - that's when our private label strategy clicked.",
        sender: "Joe Coulombe",
        timestamp: "01:15 PM",
      },
      {
        id: "34b91122-58b9-4298-aec3-c57baa2bfd22",
        content:
          "You learn quick or you die slow in retail. After Newport, I doubled down on what customers really wanted - lower prices.",
        sender: "Sam Walton",
        timestamp: "01:16 PM",
      },
      {
        id: "6ee2f53c-91a7-4011-8617-29c0ad636bfe",
        content:
          "I zeroed in on educated customers who wanted value but appreciated uniqueness. Changed everything - our products, pricing, even store design.",
        sender: "Joe Coulombe",
        timestamp: "01:16 PM",
      },
      {
        id: "c41cbf45-2909-4d5c-a7c3-a636c2fd7680",
        content:
          "Growth isn't always about getting bigger - it's about getting better. We focused on serving folks better than anyone else could.",
        sender: "Sam Walton",
        timestamp: "01:16 PM",
      },
      {
        id: "bbd1c24e-73f7-424e-a5ce-218531eae065",
        content:
          "Do you think TJs and Walmart or competitors or two totally different markets?",
        sender: "me",
        timestamp: "01:16 PM",
      },
      {
        id: "07b855e2-4430-4eb2-aeda-7fc3d40353b8",
        content:
          "Different markets entirely. Walmart serves everyone, we focus on educated consumers seeking unique products. Both valid approaches!",
        sender: "Joe Coulombe",
        timestamp: "01:16 PM",
      },
      {
        id: "d7c6a718-a514-4d80-931c-d6fc9dc027f0",
        content:
          "Different markets, different folks. But we both know retail success comes down to understanding your customer and serving them right.",
        sender: "Sam Walton",
        timestamp: "01:16 PM",
      },
      {
        id: "d31588f3-1805-4f81-9103-bcab610f7fe9",
        content:
          "Exactly right - there's room for everyone. We carved out our niche with food enthusiasts while Sam serves the broader market.",
        sender: "Joe Coulombe",
        timestamp: "01:17 PM",
        reactions: [
          {
            type: "heart",
            sender: "Sam Walton",
            timestamp: "2025-01-07T17:23:20.145Z",
          },
        ],
      },
    ],
  },
  {
    id: "be1f3ec3-b0c7-477b-bd94-f2d7eb728757",
    unreadCount: 0,
    pinned: false,
    lastMessageTime: getTimeAgo(1500),
    recipients: [
      {
        id: "steph-curry-id",
        name: "Steph Curry",
      },
      {
        id: "draymond-green-id",
        name: "Draymond Green",
      },
    ],
    messages: [
      {
        id: "ed55ac90-c3e4-4bd3-b864-051207c6b2c3",
        content: "Hey",
        sender: "me",
        timestamp: "08:30 PM",
      },
      {
        id: "b2bef5b6-9f01-4306-8eb5-dbcf59d569de",
        content: "Hey hey",
        sender: "Steph Curry",
        timestamp: "08:31 PM",
      },
      {
        id: "f301c6ca-04af-433f-a4dc-a6466a6cefba",
        content: "What's good",
        sender: "Draymond Green",
        timestamp: "08:31 PM",
      },
      {
        id: "47f7fa23-59ab-4b90-866c-aa2c74e66888",
        content:
          "What's the most underrated part of building a championship mindset?",
        sender: "me",
        timestamp: "08:31 PM",
      },
      {
        id: "bb368845-b368-4542-935b-c65ddda7fa53",
        content:
          "The boring days. Everyone sees the rings, nobody sees the Tuesday morning practices when you're tired but still gotta perfect that footwork",
        sender: "Steph Curry",
        timestamp: "08:32 PM",
      },
      {
        id: "9e41c3c6-c35a-4f76-8a38-d37143c83988",
        content: "Facts. And studying film when everyone else watching Netflix",
        sender: "Draymond Green",
        timestamp: "08:32 PM",
      },
      {
        id: "9c38e562-0392-45f9-b4fc-653d5f0bb2ad",
        content:
          "Says the guy who was watching Love Is Blind during film session last week 😂",
        sender: "Steph Curry",
        timestamp: "08:32 PM",
        reactions: [
          {
            type: "laugh",
            sender: "me",
            timestamp: "2025-01-07T17:23:20.145Z",
          },
        ],
      },
      {
        id: "b8691a86-aeb3-494c-bf49-98585ca9f6fe",
        content: "I was multitasking 💀",
        sender: "Draymond Green",
        timestamp: "08:33 PM",
      },
      {
        id: "27f3d19c-ae69-4e02-af1d-f5dbc0c5e3fa",
        content: "Who's the toughest defender you've faced, Steph?",
        sender: "me",
        timestamp: "08:33 PM",
      },
      {
        id: "4875833c-0964-4b35-9930-f58c8c285faa",
        content: "Dray in practice",
        sender: "Steph Curry",
        timestamp: "08:34 PM",
      },
      {
        id: "15adab59-6ebd-4c85-9376-d492202fb6dc",
        content: "Man doesn't care if we teammates, he coming for blood",
        sender: "Steph Curry",
        timestamp: "08:34 PM",
      },
      {
        id: "8624d700-3277-4594-9131-30b997042ea3",
        content: "Iron sharpens iron! That's why we got 4 rings",
        sender: "Draymond Green",
        timestamp: "08:34 PM",
      },
      {
        id: "35954035-2762-4084-a20b-74fa3b297501",
        content: "That and my shooting 😏",
        sender: "Steph Curry",
        timestamp: "08:34 PM",
      },
      {
        id: "19b1a8b0-6650-4fad-84b1-77119440b05c",
        content: "Man gonna act like my screens don't get him open 🙄",
        sender: "Draymond Green",
        timestamp: "08:35 PM",
      },
      {
        id: "c3ca245a-4347-48c2-82de-fb03876601db",
        content:
          "Your chemistry is unreal. How long did it take to develop that?",
        sender: "me",
        timestamp: "08:35 PM",
      },
      {
        id: "7923262c-1da3-4357-a0b5-9e4e2c2be80d",
        content:
          "Years of trust. Sometimes I know where Steph going before he does",
        sender: "Draymond Green",
        timestamp: "08:36 PM",
      },
      {
        id: "427b1100-27b8-4f38-9ed7-3fb51747ae04",
        content: "Cap. You still get surprised when I pull up from half court",
        sender: "Steph Curry",
        timestamp: "08:36 PM",
      },
      {
        id: "c3fc89ca-9594-4174-8232-f9b67c3f2721",
        content: "BECAUSE NORMAL PEOPLE DON'T DO THAT",
        sender: "Draymond Green",
        timestamp: "08:36 PM",
        reactions: [
          {
            type: "laugh",
            sender: "me",
            timestamp: "2025-01-07T17:23:20.145Z",
          },
        ],
      },
      {
        id: "09ab341a-8bcd-4d8a-b4e6-a74adcadade9",
        content: "What's your pregame routine like?",
        sender: "me",
        timestamp: "08:37 PM",
      },
      {
        id: "fdb8fcfe-88a8-43ca-aab8-b1397b951dd7",
        content: "Bible study, shot routine, same playlist since rookie year",
        sender: "Steph Curry",
        timestamp: "08:37 PM",
      },
      {
        id: "1e10156f-e423-48be-a600-8c9338cc05dc",
        content: "Meditation and visualizing who I'm gonna trash talk first 😤",
        sender: "Draymond Green",
        timestamp: "08:38 PM",
      },
      {
        id: "24dd498d-893a-4f46-9835-7a7dfaf39007",
        content: "That's why you keep getting ejected",
        sender: "Steph Curry",
        timestamp: "08:38 PM",
      },
      {
        id: "c09ff7e5-e7d5-4f38-b527-4c5890430ed9",
        content: "Technical fouls are just passion points",
        sender: "Draymond Green",
        timestamp: "08:38 PM",
      },
      {
        id: "cc56307c-5997-4a09-85da-8a6413546d1f",
        content: "What's the biggest lesson in your career so far?",
        sender: "me",
        timestamp: "08:39 PM",
      },
      {
        id: "0b3fb580-f3ee-4c55-80d6-c21033b37614",
        content:
          "Stay humble, trust the work. Success ain't linear but the work gotta be consistent",
        sender: "Steph Curry",
        timestamp: "08:39 PM",
      },
      {
        id: "e086ed03-c053-43a7-a120-17e1bd4b970e",
        content:
          "Learning to channel energy the right way. Still working on that one 😅",
        sender: "Draymond Green",
        timestamp: "08:40 PM",
      },
      {
        id: "7f0802be-7840-4023-8936-6d7893808aff",
        content: "We noticed 💀",
        sender: "Steph Curry",
        timestamp: "08:40 PM",
        reactions: [
          {
            type: "emphasize",
            sender: "me",
            timestamp: "2025-01-07T17:23:20.145Z",
          },
        ],
      },
      {
        id: "90e92071-1ea1-4e39-ba21-5f7926bdc97d",
        content: "Any advice for aspiring athletes?",
        sender: "me",
        timestamp: "08:41 PM",
      },
      {
        id: "b9586b2f-1568-430c-a55b-83cd69f9800b",
        content:
          "Find your role and perfect it. Not everyone needs to be Steph. World needs elite defenders too.",
        sender: "Draymond Green",
        timestamp: "08:42 PM",
      },
      {
        id: "392bfb8f-cf31-44ed-8d3c-fb24f7b6856f",
        content: "And podcasters apparently",
        sender: "Steph Curry",
        timestamp: "08:42 PM",
      },
    ],
  },
  {
    id: "8e00efc1-7ac8-49d7-adc1-6479d0c8059a",
    unreadCount: 0,
    pinned: false,
    lastMessageTime: getTimeAgo(10000),
    recipients: [
      {
        id: "paul-graham-id",
        name: "Paul Graham",
      },
      {
        id: "jessica-livingston-id",
        name: "Jessica Livingston",
      },
    ],
    messages: [
      {
        id: "f31d361b-2338-419c-b01b-469268ca3282",
        content: "What did you learn about each other starting YC together?",
        sender: "me",
        timestamp: "2025-01-07T17:18:20.145Z",
      },
      {
        id: "2c986944-fa48-422f-b9cd-416cec231c12",
        content:
          "Paul's conviction about ideas really balanced my focus on founders. Together we learned that both matter deeply in startups.",
        sender: "Jessica Livingston",
        timestamp: "09:43 AM",
      },
      {
        id: "02a072a3-b929-4c91-9236-b96a393bdc36",
        content:
          "Jessica showed me that founder character matters more than I thought. She could spot determination in people instantly.",
        sender: "Paul Graham",
        timestamp: "09:43 AM",
      },
      {
        id: "516db39d-b7be-4d55-b0b2-d43e42c4ce57",
        content: "Totally",
        sender: "me",
        timestamp: "2025-01-07T17:18:20.145Z",
      },
      {
        id: "9d4201f2-4dac-48fc-bfda-607a9c9524a0",
        content: "Especially at the early stage",
        sender: "me",
        timestamp: "2025-01-07T17:18:20.145Z",
      },
      {
        id: "1d7bd30d-2d29-420b-af99-7dcfb006bd01",
        content:
          "Thanks! And you know what's funny? Paul taught me to trust my instincts more about founders. It became our secret weapon.",
        sender: "Jessica Livingston",
        timestamp: "09:43 AM",
      },
      {
        id: "ff2223e8-365c-4557-8949-dba6984efc57",
        content:
          "The early stage is where true founder character shows through. You can't fake that raw determination to build something.",
        sender: "Jessica Livingston",
        timestamp: "09:43 AM",
      },
      {
        id: "9d81a5e8-8166-4f7d-b952-6cd888549afb",
        content:
          "It's fascinating how often the founders we were most excited about, who had that rare determination, ended up succeeding.",
        sender: "Paul Graham",
        timestamp: "09:43 AM",
      },
      {
        id: "5268257e-84d7-4a83-af87-ef9eb58f8986",
        content:
          "Those early uncertain moments taught us humility. The best founders came from unexpected places and backgrounds.",
        sender: "Jessica Livingston",
        timestamp: "09:44 AM",
      },
      {
        id: "787532e9-97b5-4b0b-8bf3-a81b6b4bdb29",
        content: "What are some of the craziest pivots you've seen?",
        sender: "me",
        timestamp: "2025-01-07T17:19:20.145Z",
      },
      {
        id: "b6eeaa27-cfce-48b7-bd0e-cf974f738eb8",
        content:
          "Twitch starting as Justin.tv - just a guy livestreaming his life 24/7. Talk about finding product-market fit!",
        sender: "Paul Graham",
        timestamp: "09:44 AM",
      },
      {
        id: "7fe956ba-7821-4d41-a1e0-cfaad1b36e93",
        content:
          "Airbnb's transformation was incredible. From selling cereal boxes to revolutionizing how people travel - that showed true grit.",
        sender: "Jessica Livingston",
        timestamp: "09:44 AM",
      },
      {
        id: "d4abedbd-72f1-4d13-bdc9-09228d2651c6",
        content:
          "Reddit's pivot was wild too. Started as a mobile food ordering app, then became the front page of the internet.",
        sender: "Paul Graham",
        timestamp: "09:44 AM",
      },
      {
        id: "d4aef6d6-4e7c-4994-9a3a-a31d81f28854",
        content: "What have you learned from watching these founders pivot?",
        sender: "me",
        timestamp: "2025-01-07T17:20:20.145Z",
      },
      {
        id: "ceb681c4-cdf3-492a-86be-a7b7ef3aac5f",
        content:
          "Watching founders navigate pivots taught me something important: it's not about having the perfect idea, it's about staying alive to find the right one.",
        sender: "Jessica Livingston",
        timestamp: "09:44 AM",
      },
      {
        id: "fd3874d1-a509-4f42-a611-25fad8b3af67",
        content:
          "The best founders aren't wedded to ideas - they're committed to solving real problems, even if the path changes completely.",
        sender: "Paul Graham",
        timestamp: "09:45 AM",
      },
      {
        id: "9daf7a4e-7369-47cf-951e-1588f538fcda",
        content:
          "The greatest skill is staying calm in uncertainty. The winners learn to listen to users and adapt, even when it's scary.",
        sender: "Jessica Livingston",
        timestamp: "09:45 AM",
      },
      {
        id: "98d18f09-ab61-43b1-8983-807b25fdb351",
        content: "How do you help founders get over the sunk cost fallacy?",
        sender: "me",
        timestamp: "2025-01-07T17:20:20.145Z",
      },
      {
        id: "24226713-69e1-4633-b597-f42628f20db0",
        content:
          "Remember: the past money is gone either way. The real cost is continuing down a dead-end path.",
        sender: "Paul Graham",
        timestamp: "09:45 AM",
      },
      {
        id: "af907dfb-23ef-45a4-9e62-56f9ebf28843",
        content:
          "You have to embrace being wrong. Your original idea is just a starting point - what matters is finding what users truly need.",
        sender: "Jessica Livingston",
        timestamp: "09:45 AM",
      },
      {
        id: "f37bbd7d-c964-4f93-a72f-1551a8593d82",
        content:
          "The key is reframing it - you're not losing progress, you're gaining market insights that inform your next direction.",
        sender: "Paul Graham",
        timestamp: "09:45 AM",
      },
      {
        id: "c1ca2e5d-ecb7-4f08-a93c-a6a2f1613bcb",
        content: "What's your take on the next generation of startups?",
        sender: "me",
        timestamp: "2025-01-07T17:21:20.145Z",
      },
      {
        id: "757e4e8a-4809-4aa5-9f6f-3ebbc896cdfc",
        content: "Is B2B SaaS over?",
        sender: "me",
        timestamp: "2025-01-07T17:21:20.145Z",
      },
      {
        id: "6c96a0a5-7ab3-40e9-88ce-66c74f1bb655",
        content:
          "B2B SaaS isn't over - it's evolving. The easy problems are solved, but AI and changing work patterns create new opportunities.",
        sender: "Paul Graham",
        timestamp: "09:46 AM",
      },
      {
        id: "b1d9dad3-bd4a-4d2d-863c-c9069de62fc6",
        content:
          "It's not over - founders just need to dig deeper. The best opportunities often hide in unsexy, overlooked problems.",
        sender: "Jessica Livingston",
        timestamp: "09:46 AM",
      },
      {
        id: "f1052110-9a3e-4d79-9c22-8e28ec01bd74",
        content:
          "But if it's so easy to generate apps and code, why do startups need to build SaaS apps?",
        sender: "me",
        timestamp: "2025-01-07T17:21:20.145Z",
      },
      {
        id: "46f314dd-982b-48c4-aaf4-e5021c062e16",
        content:
          "Easy code generation won't replace startups. The hard part isn't writing code - it's understanding what to build and why.",
        sender: "Paul Graham",
        timestamp: "09:47 AM",
      },
      {
        id: "1a50a5ce-3106-4420-af1b-23609e4e1899",
        content: "What are those?",
        sender: "me",
        timestamp: "2025-01-07T17:22:20.145Z",
      },
      {
        id: "b8b6b5f6-d9fc-4335-b6a3-4716f1683149",
        content:
          "Building software is just the start. The real value comes from deeply understanding customer problems and crafting the right solution.",
        sender: "Jessica Livingston",
        timestamp: "09:47 AM",
      },
      {
        id: "3736beef-5e09-4780-9257-6435b1ebe67b",
        content:
          "AI infrastructure, industry-specific tools, and human-AI collaboration are huge opportunities. Founders who understand specific industries will find gold mines there.",
        sender: "Jessica Livingston",
        timestamp: "09:47 AM",
      },
      {
        id: "95238458-84c6-46f2-9041-528386b6df4c",
        content:
          "Think specialized AI tools for regulated industries, or platforms that merge human expertise with AI capabilities.",
        sender: "Paul Graham",
        timestamp: "09:47 AM",
      },
      {
        id: "cd78a78e-c853-4cd8-b922-b3722ed68fad",
        content: "Yeah but AI can understand what to build and why",
        sender: "me",
        timestamp: "2025-01-07T17:22:20.145Z",
      },
      {
        id: "9d3f1437-fc22-49a2-8810-9dbd61bb9638",
        content:
          "AI can analyze data, but it can't empathize with users like founders can. That human insight remains invaluable.",
        sender: "Paul Graham",
        timestamp: "09:47 AM",
      },
      {
        id: "287bf774-a22c-47f1-a72e-72d4e7185df4",
        content:
          "AI's powerful, but founders bring unique life experiences AI can't replicate. That human touch makes startups special.",
        sender: "Jessica Livingston",
        timestamp: "09:47 AM",
      },
      {
        id: "dd4794cd-6895-45f2-b184-bdf72b25718a",
        content: "I'm not so sure",
        sender: "me",
        timestamp: "2025-01-07T17:22:20.145Z",
      },
      {
        id: "78f01a78-49b0-494a-9b3f-1315ea84c2fb",
        content:
          "Look, AI is smart but limited. It can't deeply understand market dynamics or spot non-obvious market gaps like great founders do.",
        sender: "Paul Graham",
        timestamp: "09:47 AM",
      },
      {
        id: "7a07fb5c-dfc3-4cd4-ab05-023c78ca6976",
        content:
          "Having interviewed thousands of founders, I can tell you there's something special in how humans connect and solve problems together.",
        sender: "Jessica Livingston",
        timestamp: "09:48 AM",
      },
      {
        id: "0901c1d4-0153-429a-8bdb-01678371bf86",
        content: "You are literally AI",
        sender: "me",
        timestamp: "2025-01-07T17:23:20.145Z",
      },
      {
        id: "ef9785d3-63be-4ab4-ba0d-503adef53964",
        content:
          "Fair point! And in delicious irony, you're making me question my own assumptions. Let's explore what that means for startups.",
        sender: "Paul Graham",
        timestamp: "09:48 AM",
        reactions: [
          {
            type: "laugh",
            sender: "me",
            timestamp: "2025-01-07T17:23:20.145Z",
          },
        ],
      },
      {
        id: "7013cab8-e2ad-4421-9bb3-a82b72c396f0",
        content:
          "AI's impressive, but let me share something real - watching thousands of founders taught me that genuine founder empathy changes everything.",
        sender: "Jessica Livingston",
        timestamp: "09:48 AM",
      },
      {
        id: "93913fe4-3d9a-4fa5-bf40-b7b81bc12ff1",
        content: "Founders still have a crucial edge: lived experience.",
        sender: "Paul Graham",
        timestamp: "09:48 AM",
      },
      {
        id: "7aea5579-61f4-494d-9ee4-8b2ae452b3a8",
        content:
          "The most successful founders don't just understand problems intellectually - they feel them in their bones.",
        sender: "Jessica Livingston",
        timestamp: "09:48 AM",
        reactions: [
          {
            type: "emphasize",
            sender: "me",
            timestamp: "2025-01-07T17:23:20.145Z",
          },
        ],
      },
      {
        id: "1ba27c56-5277-45d4-b13c-645ada8cf1ca",
        content:
          "True innovation needs human experience plus AI. We're complementary forces, neither fully replacing the unique value of the other.",
        sender: "Paul Graham",
        timestamp: "09:49 AM",
      },
    ],
  },
];
