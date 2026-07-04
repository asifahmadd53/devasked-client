// User types
export interface User {
  id: string;
  name: string;
  username: string;
  avatar: string;
}

// Question types
export type CompanyType = "All" | "Startup" | "Mid-Level" | "Big Tech/FAANG";
export type DifficultyLevel = "All" | "Easy" | "Medium" | "Hard";
export type TechStackType = "All" | "React" | "Node.js" | "AWS" | "Python";

export interface Question {
  id: string;
  title: string;
  description: string;
  askedBy: User;
  companyType: CompanyType;
  difficulty: DifficultyLevel;
  techStack: TechStackType[];
  tags: string[];
  views: number;
  saves: number;
  savedBy: User[];
  createdAt: string;
  answer?: string;
  bookmarked: boolean;
}

// Community types
export interface Community {
  id: string;
  name: string;
  description: string;
  createdDate: string;
  members: User[];
  memberCount: number;
  messageCount: number;
  questionCount: number;
  icon: string;
  joined?: boolean;
}

// Activity types
export interface Activity {
  id: string;
  type: "quiz_completed" | "question_added" | "community_joined";
  user?: User;
  description: string;
  score?: number;
  earnedXP?: number;
  timestamp: string;
}

// Dashboard types
export interface QuizProgress {
  topic: string;
  percentage: number;
  color: string;
}
