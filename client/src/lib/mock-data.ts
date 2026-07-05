import { User, Question, Community, Activity, QuizProgress } from "../types/dashboard";

// Mock users
export const mockUsers: Record<string, User> = {
  sara_dev: {
    id: "1",
    name: "Sara Dev",
    username: "@sara_dev",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=sara_dev",
  },
  john_smith: {
    id: "2",
    name: "John Smith",
    username: "@john_smith",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=john_smith",
  },
  alex_tech: {
    id: "3",
    name: "Alex Tech",
    username: "@alex_tech",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=alex_tech",
  },
  mia_code: {
    id: "4",
    name: "Mia Code",
    username: "@mia_code",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=mia_code",
  },
};

// Mock questions
export const mockQuestions: Question[] = [
  {
    id: "1",
    title: "Implement Debouncing in React Hooks",
    description:
      "How would you implement a debouncing mechanism using React hooks? The requirement is to create a custom hook that delays the execution of a function until after a certain amount of time has passed since it was last called. For example, if you're implementing a search feature, you don't want to make an API call on every keystroke. Instead, you want to wait until the user has stopped typing for a certain period.",
    askedBy: mockUsers.sara_dev,
    companyType: "Startup",
    difficulty: "Hard",
    techStack: ["React"],
    tags: ["STARTUP", "Hard", "React", "Hooks"],
    views: 183,
    saves: 18,
    savedBy: [mockUsers.john_smith, mockUsers.alex_tech],
    createdAt: "5 hours ago",
    bookmarked: false,
  },
  {
    id: "2",
    title: "Implement Debouncing in React Hooks",
    description:
      "How would you implement a debouncing mechanism using React hooks? The requirement is to create a custom hook that delays the execution of a function until after a certain amount of time has passed since it was last called.",
    askedBy: mockUsers.sara_dev,
    companyType: "Big Tech/FAANG",
    difficulty: "Hard",
    techStack: ["React"],
    tags: ["STARTUP", "Hard", "React", "Hooks"],
    views: 183,
    saves: 18,
    savedBy: [mockUsers.john_smith],
    createdAt: "5 hours ago",
    bookmarked: true,
  },
  {
    id: "3",
    title: "Optimizing React Context renders in a large-scale dashboard",
    description:
      "What are the best practices for optimizing React Context performance in large-scale applications? How do you prevent unnecessary re-renders?",
    askedBy: mockUsers.sara_dev,
    companyType: "Big Tech/FAANG",
    difficulty: "Hard",
    techStack: ["React"],
    tags: ["BIG TECH", "Hard", "Frontend", "React"],
    views: 183,
    saves: 18,
    savedBy: [],
    createdAt: "March 20, 2024",
    bookmarked: false,
  },
  {
    id: "4",
    title: "Explain the inner workings of Node.js Event Loop with Libuv",
    description:
      "Can you explain how the Node.js event loop works internally and what role Libuv plays in it?",
    askedBy: mockUsers.john_smith,
    companyType: "Mid-Level",
    difficulty: "Hard",
    techStack: ["Node.js"],
    tags: ["MID-LEVEL", "Hard", "Backend", "Node.js"],
    views: 3100,
    saves: 18,
    savedBy: [],
    createdAt: "5 hours ago",
    bookmarked: false,
  },
  {
    id: "5",
    title: "State Management Patterns in Redux",
    description:
      "What are the best patterns for managing complex state in Redux?",
    askedBy: mockUsers.alex_tech,
    companyType: "Startup",
    difficulty: "Medium",
    techStack: ["React"],
    tags: ["STARTUP", "Medium", "React", "Redux"],
    views: 256,
    saves: 12,
    savedBy: [],
    createdAt: "2 hours ago",
    bookmarked: false,
  },
  {
    id: "6",
    title: "Building Scalable APIs with Node.js",
    description:
      "How do you structure a Node.js API to handle high traffic and scale efficiently?",
    askedBy: mockUsers.mia_code,
    companyType: "Big Tech/FAANG",
    difficulty: "Hard",
    techStack: ["Node.js", "AWS"],
    tags: ["BIG TECH", "Hard", "Node.js", "AWS"],
    views: 456,
    saves: 25,
    savedBy: [mockUsers.sara_dev],
    createdAt: "1 day ago",
    bookmarked: false,
  },
  {
    id: "7",
    title: "React Performance Optimization Techniques",
    description:
      "What are the key techniques for optimizing React app performance?",
    askedBy: mockUsers.john_smith,
    companyType: "Startup",
    difficulty: "Medium",
    techStack: ["React"],
    tags: ["STARTUP", "Medium", "React"],
    views: 234,
    saves: 15,
    savedBy: [],
    createdAt: "3 days ago",
    bookmarked: false,
  },
  {
    id: "8",
    title: "Database Query Optimization",
    description:
      "What strategies do you use to optimize complex SQL queries in production?",
    askedBy: mockUsers.alex_tech,
    companyType: "Big Tech/FAANG",
    difficulty: "Hard",
    techStack: ["AWS"],
    tags: ["BIG TECH", "Hard", "AWS", "Backend"],
    views: 567,
    saves: 32,
    savedBy: [],
    createdAt: "5 days ago",
    bookmarked: false,
  },
  {
    id: "9",
    title: "Testing Async Code in JavaScript",
    description: "Best practices for testing asynchronous functions?",
    askedBy: mockUsers.sara_dev,
    companyType: "Startup",
    difficulty: "Easy",
    techStack: ["React"],
    tags: ["STARTUP", "Easy", "React", "Testing"],
    views: 145,
    saves: 8,
    savedBy: [],
    createdAt: "1 week ago",
    bookmarked: false,
  },
  {
    id: "10",
    title: "Microservices Architecture Design",
    description: "How to design a scalable microservices architecture?",
    askedBy: mockUsers.mia_code,
    companyType: "Big Tech/FAANG",
    difficulty: "Hard",
    techStack: ["AWS"],
    tags: ["BIG TECH", "Hard", "AWS", "Backend"],
    views: 789,
    saves: 45,
    savedBy: [],
    createdAt: "2 weeks ago",
    bookmarked: false,
  },
];

// Mock communities
export const mockCommunities: Community[] = [
  {
    id: "1",
    name: "React.js",
    description:
      "Deep dives into React architecture, hooks, and large-scale state management for senior roles.",
    createdDate: "March 15, 2024",
    members: [mockUsers.sara_dev, mockUsers.john_smith, mockUsers.alex_tech],
    memberCount: 2400,
    messageCount: 15900,
    questionCount: 2100,
    icon: "⚛️",
    joined: false,
  },
  {
    id: "2",
    name: "Flutter",
    description:
      "Deep dives into React architecture, hooks, and large-scale state management for senior roles.",
    createdDate: "March 20, 2024",
    members: [mockUsers.john_smith, mockUsers.mia_code],
    memberCount: 2400,
    messageCount: 15900,
    questionCount: 2100,
    icon: "🦋",
    joined: false,
  },
  {
    id: "3",
    name: "System Design",
    description:
      "Deep dives into system architecture and large-scale design patterns.",
    createdDate: "March 10, 2024",
    members: [mockUsers.alex_tech, mockUsers.sara_dev, mockUsers.mia_code],
    memberCount: 1800,
    messageCount: 12300,
    questionCount: 1500,
    icon: "🏗️",
    joined: false,
  },
  {
    id: "4",
    name: "Python",
    description: "Python development best practices and advanced techniques.",
    createdDate: "March 20, 2024",
    members: [mockUsers.mia_code, mockUsers.john_smith],
    memberCount: 2400,
    messageCount: 15900,
    questionCount: 2100,
    icon: "🐍",
    joined: false,
  },
];

// Mock quiz progress
export const mockQuizProgress: QuizProgress[] = [
  { topic: "DDA", percentage: 19, color: "#BFDBFE" },
  { topic: "React", percentage: 29, color: "#3B82F6" },
  { topic: "Operating System", percentage: 16, color: "#60A5FA" },
  { topic: "DevOps", percentage: 6, color: "#93C5FD" },
  { topic: "System Design", percentage: 30, color: "#1E40AF" },
];

// Mock trending questions
export const mockTrendingQuestions: Question[] = mockQuestions.slice(0, 4);

// Mock activities
export const mockActivities: Activity[] = [
  {
    id: "1",
    type: "quiz_completed",
    description: "Quiz Completed: System Design Patterns",
    score: 92,
    earnedXP: 50,
    timestamp: "10 minutes ago",
  },
  {
    id: "2",
    type: "question_added",
    user: mockUsers.sara_dev,
    description: "New Question Added: Modern Backend Architecture...",
    timestamp: "40 minutes ago",
  },
  {
    id: "3",
    type: "community_joined",
    user: mockUsers.john_smith,
    description: 'From "Scale Masters" community',
    timestamp: "45 minutes ago",
  },
];
