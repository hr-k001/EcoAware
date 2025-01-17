export interface BlogPost {
  id: number;
  title: string;
  content: string;
  image: string;
  date: string;
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
}

export interface FootprintFormData {
  electricity: number;
  gas: number;
  car: number;
  flights: number;
}