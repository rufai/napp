import "./style.css";

import { useState } from "react";

const QuizInput = ({startQuiz}) => {
  let [isQuizStarted, setIsQuizStarted] = useState(false);
  
  const startQuizButtonClicked = () => {
    setIsQuizStarted(!isQuizStarted)
    startQuiz(true)
  }


  return (
    <section>
      {!isQuizStarted ? (
        <button
          className="start_quiz"
          onClick={() => startQuizButtonClicked() }
        >
          Start Quiz
        </button>
      ) : (
        <section>
          <input placeholder="Enter your answer" />
          <button
            className="start_quiz"
            onClick={() => console.log("sdfsdfsd")}
          >
            Submit
          </button>
        </section>
      )}
    </section>
  );
};

export default QuizInput;
