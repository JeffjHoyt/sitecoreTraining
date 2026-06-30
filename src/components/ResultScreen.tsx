import type { Question } from '../questions';
import type { AnswerRecord } from '../store';

interface SessionAnswer {
  questionId: number;
  wasCorrect: boolean;
}

interface Props {
  sessionAnswers: SessionAnswer[];
  questions: Question[];
  records: Record<number, AnswerRecord>;
  onRestart: () => void;
  onHome: () => void;
}

export default function ResultScreen({ sessionAnswers, questions, onRestart, onHome }: Props) {
  const correct = sessionAnswers.filter(a => a.wasCorrect).length;
  const total = sessionAnswers.length;
  const pct = Math.round((correct / total) * 100);

  const missed = sessionAnswers
    .filter(a => !a.wasCorrect)
    .map(a => {
      const q = questions.find(q => q.id === a.questionId)!;
      return { q, correctAnswer: q.options[q.correctIndex] };
    });

  return (
    <div className="result-screen">
      <div className="result-score-card">
        <div className="big-score">{pct}%</div>
        <div className="score-sub">{correct} of {total} correct</div>
      </div>

      <div className="result-breakdown">
        <div className="stat-card">
          <span className="stat-num" style={{ color: '#22c55e' }}>{correct}</span>
          <span className="stat-label">Correct</span>
        </div>
        <div className="stat-card">
          <span className="stat-num" style={{ color: '#ef4444' }}>{total - correct}</span>
          <span className="stat-label">Incorrect</span>
        </div>
      </div>

      {missed.length > 0 && (
        <div>
          <h3 style={{ margin: '0 0 12px', fontSize: '16px', color: 'var(--text-h)' }}>
            Missed Questions ({missed.length})
          </h3>
          <div className="missed-list">
            {missed.map(({ q, correctAnswer }) => (
              <div key={q.id} className="missed-item">
                <div className="missed-q">{q.question}</div>
                <div className="missed-correct">✓ {correctAnswer}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="result-actions">
        <button className="btn-primary" onClick={onRestart}>Try Again</button>
        <button className="btn-secondary" onClick={onHome}>Home</button>
      </div>
    </div>
  );
}
