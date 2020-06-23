import React from "react";

export default function QuestionItem({
  value,
  stateValue,
  question,
  onChange,
}) {
  return (
    <label className="question__list__item">
      <input
        type="radio"
        name={question}
        value={value}
        checked={stateValue === value}
        onChange={onChange}
      />
      <p>{value}</p>
    </label>
  );
}
