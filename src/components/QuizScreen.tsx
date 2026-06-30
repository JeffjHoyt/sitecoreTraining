import { useState } from 'react';
import type { Question } from '../questions';

interface Props {
  question: Question;
  current: number;
  total: number;
  isLast: boolean;
  onAnswer: (questionId: number, wasCorrect: boolean) => void;
  onEnd: () => void;
}

const LETTERS = ['A', 'B', 'C', 'D'];

export default function QuizScreen({ question, current, total, isLast, onAnswer, onEnd }: Props) {
  const [selected, setSelected] = useState<number | null>(null);
  const answered = selected !== null;
  const wasCorrect = selected === question.correctIndex;

  function handleSelect(idx: number) {
    if (answered) return;
    setSelected(idx);
    onAnswer(question.id, idx === question.correctIndex);
  }

  function handleNext() {
    setSelected(null);
    if (isLast) {
      onEnd();
    }
  }

  const progress = ((current - 1) / total) * 100;

  return (
    <div>
      <div className="progress-bar-wrap">
        <div className="progress-bar-fill" style={{ width: `${progress}%` }} />
      </div>
      <div className="progress-label">{current} / {total}</div>

      <div className="question-card">
        <div className="question-category">{question.category}</div>
        <p className="question-text">{question.question}</p>
      </div>

      <div className="options-list">
        {question.options.map((opt, idx) => {
          let cls = 'option-btn';
          if (answered) {
            if (idx === question.correctIndex) cls += ' reveal-correct';
            if (idx === selected && wasCorrect) cls += ' selected-correct';
            if (idx === selected && !wasCorrect) cls += ' selected-wrong';
          }
          return (
            <button
              key={idx}
              className={cls}
              onClick={() => handleSelect(idx)}
              disabled={answered}
            >
              <span className="option-letter">{LETTERS[idx]}</span>
              {opt}
            </button>
          );
        })}
      </div>

      {answered && (
        <>
          <div className={`feedback-row ${wasCorrect ? 'feedback-correct' : 'feedback-wrong'}`}>
            {wasCorrect ? '✓ Correct!' : `✗ Incorrect — correct answer: ${LETTERS[question.correctIndex]}`}
          </div>
          <button className="btn-primary" onClick={handleNext}>
            {isLast ? 'See Results' : 'Next Question →'}
          </button>
        </>
      )}
    </div>
  );
}
