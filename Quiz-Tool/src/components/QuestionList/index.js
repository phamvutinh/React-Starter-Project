import React from "react";
import QuestionItem from "components/QuestionItem";

export default function QuestionList({
  dataQuestion,
  indexQuestion,
  clickHandle,
}) {
  const [valueSubmit, setValueSubmit] = React.useState(null);
  function handleChange(e) {
    setValueSubmit(e.target.value);
  }

  return (
    <div className="question">
      <h2>
        Question {indexQuestion + 1}: {dataQuestion.question}
      </h2>
      <div className="question__list">
        {dataQuestion.answers.map((item, index) => (
          <QuestionItem
            question={dataQuestion.question}
            onChange={handleChange}
            key={index}
            stateValue={valueSubmit}
            value={item.content}
          />
        ))}
      </div>
      <div
        className="button question__list__button"
        onClick={() => clickHandle(valueSubmit)}
      >
        Next Question
      </div>
    </div>
  );
}
