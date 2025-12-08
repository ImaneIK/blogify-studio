import blogHero1 from "@/assets/blog-hero-1.jpg";
import blogThumb1 from "@/assets/blog-thumb-1.jpg";
import blogThumb2 from "@/assets/blog-thumb-2.jpg";
import blogThumb3 from "@/assets/blog-thumb-3.jpg";
import blogThumb4 from "@/assets/blog-thumb-4.jpg";

export interface Article {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  thumbnail: string;
  author: {
    name: string;
    avatar: string;
  };
  tags: string[];
  readingTime: number;
  publishedAt: string;
  views: number;
  comments: number;
}

export const mockArticles: Article[] = [
  {
    id: "1",
    title: "The Future of AI: How Machine Learning is Reshaping Our World",
    excerpt: "Discover how artificial intelligence and machine learning are transforming industries, from healthcare to finance, and what this means for the future of work.",
    content: `
# The Future of AI: How Machine Learning is Reshaping Our World

Artificial intelligence has moved from science fiction to everyday reality. From the recommendations you see on streaming platforms to the autonomous vehicles being tested on our roads, AI is everywhere.

## Understanding Machine Learning

Machine learning is a subset of AI that enables systems to learn and improve from experience without being explicitly programmed. Here's what makes it revolutionary:

- **Pattern Recognition**: ML algorithms can identify complex patterns in vast datasets
- **Predictive Analytics**: Businesses use ML to forecast trends and customer behavior
- **Automation**: Routine tasks are being automated at unprecedented scales

> "The development of full artificial intelligence could spell the end of the human race... It would take off on its own, and re-design itself at an ever increasing rate." — Stephen Hawking

## Real-World Applications

### Healthcare Revolution
AI is diagnosing diseases with remarkable accuracy. Machine learning models can now detect certain cancers earlier than human doctors, potentially saving millions of lives.

### Financial Services
From fraud detection to algorithmic trading, the finance industry has been an early adopter of AI technologies. Banks use ML to assess credit risk and personalize customer experiences.

### Transportation
Self-driving cars represent one of the most visible applications of AI. Companies like Tesla, Waymo, and traditional automakers are racing to perfect autonomous driving technology.

## The Road Ahead

As we look to the future, several trends are emerging:

1. **Democratization of AI**: Tools are becoming more accessible to non-experts
2. **Edge AI**: Processing moving from cloud to local devices
3. **Ethical AI**: Growing focus on fairness, transparency, and accountability

The future of AI is not just about technology—it's about how we choose to use it to solve humanity's greatest challenges.
    `,
    thumbnail: blogHero1,
    author: {
      name: "Sarah Chen",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=sarah",
    },
    tags: ["AI", "Technology", "Future"],
    readingTime: 8,
    publishedAt: "2024-01-15",
    views: 12450,
    comments: 89,
  },
  {
    id: "2",
    title: "Modern Web Development: A Complete Guide for 2024",
    excerpt: "From React to Next.js, TypeScript to Tailwind CSS—explore the essential tools and frameworks every web developer should master this year.",
    content: `
# Modern Web Development: A Complete Guide for 2024

The web development landscape continues to evolve at a rapid pace. Let's explore what you need to know to stay ahead in 2024.

## The Essential Stack

Today's modern web development stack typically includes:

- **React or Vue.js** for UI development
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Next.js or Nuxt** for full-stack capabilities

## Why TypeScript Matters

TypeScript has become the standard for professional web development. It catches errors early, improves code quality, and makes refactoring safer.

\`\`\`typescript
interface User {
  id: string;
  name: string;
  email: string;
}

function greetUser(user: User): string {
  return \`Hello, \${user.name}!\`;
}
\`\`\`

## Conclusion

Stay curious, keep learning, and embrace the changes. The best developers are those who adapt.
    `,
    thumbnail: blogThumb1,
    author: {
      name: "Alex Rivera",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=alex",
    },
    tags: ["Web Dev", "JavaScript", "React"],
    readingTime: 12,
    publishedAt: "2024-01-10",
    views: 8320,
    comments: 56,
  },
  {
    id: "3",
    title: "Mastering Productivity: 10 Habits of Highly Effective People",
    excerpt: "Learn the daily habits and mental frameworks that separate high performers from the rest. Transform your productivity with these proven strategies.",
    content: `
# Mastering Productivity: 10 Habits of Highly Effective People

Productivity isn't about doing more—it's about doing what matters. Here are ten habits that can transform how you work.

## 1. Start with Your Most Important Task

Tackle your biggest challenge first thing in the morning when your energy is highest.

## 2. Time Blocking

Dedicate specific blocks of time to specific tasks. This eliminates context switching and improves focus.

## 3. The Two-Minute Rule

If something takes less than two minutes, do it now. Don't add it to your to-do list.

> "The key is not to prioritize what's on your schedule, but to schedule your priorities." — Stephen Covey

## Key Takeaways

- Focus on outcomes, not activities
- Protect your peak energy hours
- Learn to say no to low-priority requests
- Review and reflect weekly
    `,
    thumbnail: blogThumb2,
    author: {
      name: "Jordan Lee",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=jordan",
    },
    tags: ["Productivity", "Lifestyle", "Growth"],
    readingTime: 6,
    publishedAt: "2024-01-08",
    views: 15230,
    comments: 124,
  },
  {
    id: "4",
    title: "Design Systems: Building Consistent User Experiences",
    excerpt: "A comprehensive guide to creating and maintaining design systems that scale. Learn from companies like Airbnb, Spotify, and Google.",
    content: `
# Design Systems: Building Consistent User Experiences

A design system is more than a component library—it's a shared language between design and development teams.

## Why Design Systems Matter

- **Consistency**: Users experience a unified interface
- **Efficiency**: Teams move faster with reusable components
- **Scalability**: Products grow without design debt

## Core Components

Every design system needs:

1. **Design Tokens**: Colors, typography, spacing
2. **Component Library**: Buttons, forms, cards
3. **Documentation**: Usage guidelines and examples
4. **Governance**: Processes for updates and contributions

## Getting Started

Start small. Pick your most commonly used components and document them thoroughly. Expand gradually based on team needs.
    `,
    thumbnail: blogThumb3,
    author: {
      name: "Maya Patel",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=maya",
    },
    tags: ["Design", "UI/UX", "Systems"],
    readingTime: 10,
    publishedAt: "2024-01-05",
    views: 6780,
    comments: 43,
  },
  {
    id: "5",
    title: "The Rise of Edge Computing: Bringing Processing Closer to Users",
    excerpt: "Explore how edge computing is revolutionizing application performance and enabling new use cases from IoT to real-time analytics.",
    content: `
# The Rise of Edge Computing

Edge computing brings computation and data storage closer to the sources of data. This paradigm shift is enabling faster, more responsive applications.

## What is Edge Computing?

Instead of sending all data to centralized cloud servers, edge computing processes data locally—at the "edge" of the network.

## Benefits

- **Lower Latency**: Faster response times for users
- **Bandwidth Efficiency**: Less data sent to the cloud
- **Privacy**: Sensitive data stays local
- **Reliability**: Works even with intermittent connectivity

## Use Cases

### IoT Applications
Smart factories process sensor data locally for real-time decision making.

### Content Delivery
CDNs cache content at edge locations for faster delivery.

### Autonomous Vehicles
Self-driving cars must process data instantly—they can't wait for cloud responses.
    `,
    thumbnail: blogThumb4,
    author: {
      name: "Chris Wong",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=chris",
    },
    tags: ["Cloud", "IoT", "Infrastructure"],
    readingTime: 7,
    publishedAt: "2024-01-03",
    views: 4560,
    comments: 28,
  },
];

export const getArticleById = (id: string): Article | undefined => {
  return mockArticles.find((article) => article.id === id);
};

export const getRelatedArticles = (currentId: string, limit: number = 3): Article[] => {
  return mockArticles.filter((article) => article.id !== currentId).slice(0, limit);
};
