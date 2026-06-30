import { useState } from 'react';
import { questions } from './questions';
import { loadRecords, saveRecords, recordAnswer, shuffleArray, clearRecords } from './store';
import type { SessionState, AnswerRecord } from './store';
import StartScreen from './components/StartScreen';
import QuizScreen from './components/QuizScreen';
import ResultScreen from './components/ResultScreen';
import WeaknessPanel from './components/WeaknessPanel';
import './App.css';

type View = 'start' | 'quiz' | 'result';

export default function App() {
  const [view, setView] = useState<View>('start');
  const [records, setRecords] = useState<Record<number, AnswerRecord>>(loadRecords);
  const [session, setSession] = useState<SessionState | null>(null);
  const [showWeakness, setShowWeakness] = useState(false);

  function startQuiz() {
    const shuffled = shuffleArray(questions.map(q => q.id));
    setSession({
      queue: shuffled,
      currentIndex: 0,
      sessionAnswers: [],
      started: true,
      finished: false,
    });
    setView('quiz');
    setShowWeakness(false);
  }

  function handleAnswer(questionId: number, wasCorrect: boolean) {
    const question = questions.find(q => q.id === questionId)!;
    const updated = recordAnswer(records, question, wasCorrect);
    saveRecords(updated);
    setRecords(updated);

    setSession(prev => {
      if (!prev) return prev;
      const newAnswers = [...prev.sessionAnswers, { questionId, wasCorrect }];
      const nextIndex = prev.currentIndex + 1;
      const finished = nextIndex >= prev.queue.length;
      return { ...prev, currentIndex: nextIndex, sessionAnswers: newAnswers, finished };
    });
  }

  function handleQuizEnd() {
    setView('result');
  }

  function resetAll() {
    setView('start');
    setSession(null);
    setShowWeakness(false);
  }

  function resetProgress() {
    clearRecords();
    setRecords({});
  }

  const currentQuestion = session
    ? questions.find(q => q.id === session.queue[session.currentIndex]) ?? null
    : null;

  return (
    <div className="app">
      <header className="app-header">
        <h1 className="app-title">Sitecore Training</h1>
        <div className="header-actions">
          {view !== 'start' && (
            <button className="btn-ghost" onClick={resetAll}>← Home</button>
          )}
          <button
            className={`btn-ghost ${showWeakness ? 'active' : ''}`}
            onClick={() => setShowWeakness(w => !w)}
          >
            {showWeakness ? 'Hide Stats' : 'Weak Areas'}
          </button>
        </div>
      </header>

      <main className="app-main">
        {showWeakness && (
          <WeaknessPanel records={records} questions={questions} />
        )}

        {!showWeakness && view === 'start' && (
          <StartScreen questionCount={questions.length} records={records} onStart={startQuiz} onReset={resetProgress} />
        )}

        {!showWeakness && view === 'quiz' && session && currentQuestion && (
          <QuizScreen
            question={currentQuestion}
            current={session.currentIndex + 1}
            total={session.queue.length}
            onAnswer={handleAnswer}
            onEnd={handleQuizEnd}
            isLast={session.currentIndex === session.queue.length - 1}
          />
        )}

        {!showWeakness && view === 'result' && session && (
          <ResultScreen
            sessionAnswers={session.sessionAnswers}
            questions={questions}
            records={records}
            onRestart={startQuiz}
            onHome={resetAll}
          />
        )}
      </main>
    </div>
  );
}
