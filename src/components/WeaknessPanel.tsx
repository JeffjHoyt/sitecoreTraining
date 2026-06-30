import type { Question } from '../questions';
import type { AnswerRecord } from '../store';

interface Props {
  records: Record<number, AnswerRecord>;
  questions: Question[];
}

export default function WeaknessPanel({ records, questions }: Props) {
  const ranked = Object.values(records)
    .filter(r => r.incorrect > 0)
    .sort((a, b) => b.incorrect - a.incorrect)
    .slice(0, 10);

  const maxIncorrect = ranked[0]?.incorrect ?? 1;

  if (ranked.length === 0) {
    return (
      <div className="weakness-panel">
        <h2>Weak Areas</h2>
        <p className="weakness-empty">No incorrect answers yet. Start the quiz to track your weak areas.</p>
      </div>
    );
  }

  return (
    <div className="weakness-panel">
      <h2>Weak Areas</h2>
      <p style={{ margin: 0, fontSize: '14px', color: 'var(--text)' }}>
        Questions you've missed most often
      </p>
      {ranked.map(record => {
        const question = questions.find(q => q.id === record.questionId);
        if (!question) return null;
        const total = record.correct + record.incorrect;
        const errorRate = Math.round((record.incorrect / total) * 100);
        const barWidth = Math.round((record.incorrect / maxIncorrect) * 100);

        return (
          <div key={record.questionId} className="weakness-item">
            <div className="weakness-item-top">
              <span className="weakness-item-q">{question.question}</span>
              <span className="weakness-badge">{record.incorrect}✗</span>
            </div>
            <div className="weakness-bar-wrap">
              <div className="weakness-bar-fill" style={{ width: `${barWidth}%` }} />
            </div>
            <div style={{ fontSize: '12px', color: 'var(--text)', marginTop: '4px' }}>
              {errorRate}% error rate · {total} attempt{total !== 1 ? 's' : ''}
            </div>
          </div>
        );
      })}
    </div>
  );
}
