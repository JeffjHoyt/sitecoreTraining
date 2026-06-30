import type { Question } from './questions';

export interface AnswerRecord {
  questionId: number;
  correct: number;
  incorrect: number;
  lastSeen: number;
}

export interface SessionState {
  queue: number[];       // question ids in shuffled order
  currentIndex: number;
  sessionAnswers: { questionId: number; wasCorrect: boolean }[];
  started: boolean;
  finished: boolean;
}

const STORAGE_KEY = 'sitecore_training_records';

export function loadRecords(): Record<number, AnswerRecord> {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

export function saveRecords(records: Record<number, AnswerRecord>): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(records));
}

export function recordAnswer(
  records: Record<number, AnswerRecord>,
  question: Question,
  wasCorrect: boolean
): Record<number, AnswerRecord> {
  const existing = records[question.id] ?? { questionId: question.id, correct: 0, incorrect: 0, lastSeen: 0 };
  const updated: AnswerRecord = {
    ...existing,
    correct: existing.correct + (wasCorrect ? 1 : 0),
    incorrect: existing.incorrect + (wasCorrect ? 0 : 1),
    lastSeen: Date.now(),
  };
  return { ...records, [question.id]: updated };
}

export function shuffleArray<T>(arr: T[]): T[] {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

export function clearRecords(): void {
  localStorage.removeItem(STORAGE_KEY);
}
