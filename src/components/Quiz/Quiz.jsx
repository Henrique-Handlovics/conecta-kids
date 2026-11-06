import { useState } from "react";
import "./quiz.css";
import { quizQuestions } from "./quizData";
import QuestionCard from "./QuestionCard";
import ResultCard from "./ResultCard";

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  function handleNext() {
    if (selectedOption === quizQuestions[currentQuestion].answer) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < quizQuestions.length) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(null);
    } else {
      setFinished(true);
    }
  }

  function restartQuiz() {
    setCurrentQuestion(0);
    setSelectedOption(null);
    setScore(0);
    setFinished(false);
  }

  return (
    <section className="quiz-section" id="quiz">

      <div className="quiz-header">
        <span className="quiz-badge">🎯 Quiz Game</span>
        <h2>Será que você é expert em segurança?</h2>
        <p>
          Responda às perguntas, faça seus pontos e descubra se você
          já é um mestre da internet segura!
        </p>
      </div>

      {finished ? (
        <ResultCard
          score={score}
          total={quizQuestions.length}
          onRestart={restartQuiz}
        />
      ) : (
        <QuestionCard
          question={quizQuestions[currentQuestion]}
          current={currentQuestion}
          total={quizQuestions.length}
          selected={selectedOption}
          onSelect={setSelectedOption}
          onNext={handleNext}
        />
      )}

    </section>
  );
}
