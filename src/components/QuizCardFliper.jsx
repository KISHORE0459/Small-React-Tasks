import { useState } from "react";
import "../styles/quizcardfliper.css";
import Backtohome from "./Backtohome";

const quiz = [
  {
    id: 1,
    question: "What is React?",
    answer:
      "React is a JavaScript library for building user interfaces, developed by Facebook.",
  },
  {
    id: 2,
    question: "What is a component in React?",
    answer:
      "A component is a self-contained module that renders some output. It can be a function or a class.",
  },
  {
    id: 3,
    question: "What are props in React?",
    answer:
      "Props (short for properties) are read-only attributes used to pass data from parent to child components.",
  },
  {
    id: 4,
    question: "What is state in React?",
    answer:
      "State is a built-in object used to manage and store dynamic data and control component behavior.",
  },
  {
    id: 5,
    question: "What is JSX?",
    answer:
      "JSX stands for JavaScript XML, a syntax extension that allows writing HTML-like code in JavaScript.",
  },
  {
    id: 6,
    question: "What is the virtual DOM?",
    answer:
      "The virtual DOM is a lightweight copy of the actual DOM that React uses to optimize updates and rendering.",
  },
  {
    id: 7,
    question: "How do you create a functional component in React?",
    answer:
      "A functional component is created using a JavaScript function that returns a React element.",
  },
  {
    id: 8,
    question: "What is useState?",
    answer:
      "useState is a React hook that lets you add state to functional components.",
  },
  {
    id: 9,
    question: "What is useEffect?",
    answer:
      "useEffect is a React hook that lets you perform side effects in functional components.",
  },
  {
    id: 10,
    question: "What is React Router?",
    answer:
      "React Router is a library for routing in React applications, enabling navigation among different views.",
  },
];

const QuizCartFillper = () => {
  const [id, setId] = useState(null);
  return (
    <div id="container">
      <h2>Quiz Card Flipper</h2>
      <div id="cards">
        {quiz.map((q) => (
          <div
            className={id == q.id ? "active" : ""}
            onClick={() => {
              setId(id != q.id ? q.id : null);
            }}
            key={q.id}
          >
            {id == q.id ? q.answer : q.question}
          </div>
        ))}
      </div>
      <Backtohome />
    </div>
  );
};

export default QuizCartFillper;
