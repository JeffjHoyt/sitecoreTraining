import type { AnswerRecord } from '../store';

interface Props {
  questionCount: number;
  records: Record<number, AnswerRecord>;
  onStart: () => void;
}

export default function StartScreen({ questionCount, records, onStart }: Props) {
  const attempted = Object.keys(records).length;
  const totalCorrect = Object.values(records).reduce((sum, r) => sum + r.correct, 0);
  const totalAttempts = Object.values(records).reduce((sum, r) => sum + r.correct + r.incorrect, 0);
  const accuracy = totalAttempts > 0 ? Math.round((totalCorrect / totalAttempts) * 100) : null;

  return (
    <div className="start-screen">
      <div>
        <h2>Practice Exam</h2>
        <p>All {questionCount} questions, randomized every round</p>
      </div>

      {attempted > 0 && (
        <div className="start-stats">
          <div className="stat-card">
            <span className="stat-num">{attempted}</span>
            <span className="stat-label">Questions seen</span>
          </div>
          <div className="stat-card">
            <span className="stat-num">{accuracy !== null ? `${accuracy}%` : '—'}</span>
            <span className="stat-label">Accuracy</span>
          </div>
          <div className="stat-card">
            <span className="stat-num">{totalAttempts}</span>
            <span className="stat-label">Total answers</span>
          </div>
        </div>
      )}

      <button className="btn-primary" onClick={onStart}>
        Start Quiz
      </button>
    </div>
  );
}
