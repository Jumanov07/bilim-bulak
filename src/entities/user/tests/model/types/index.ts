import { TestItem } from "@/shared/types";

export type GetTestsResponse = TestItem[];

export interface TestAnswerItem {
  id: number;
  text: string;
  score: number;
}

export interface TestQuestionItem {
  id: number;
  text: string;
  orderNumber: number;
  answers: TestAnswerItem[];
}

export interface TestStartResponse {
  id: number;
  title: string;
  description: string;
  timerMinutes: number;
  price: number;
  questions: TestQuestionItem[];
  questionCount: number;
  startedAt: string;
}

export interface SubmitTestAnswerItem {
  questionId: number;
  answerId: number;
}

export interface SubmitTestPayload {
  testId: number;
  startedAt: string;
  answers: SubmitTestAnswerItem[];
}

export type SeverityLevel = "critical" | "high" | "moderate" | "low";

export interface TestResultResponse {
  id: number;
  testId: number;
  testTitle: string;
  totalScore: number;
  maxPossibleScore: number;
  scorePercentage: number;
  categoryName: string;
  categoryDescription: string;
  recommendation: string;
  severityLevel: SeverityLevel;
  completedAt: string;
}
