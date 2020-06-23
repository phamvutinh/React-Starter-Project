import React from "react";
import QuestionList from "components/QuestionList";
import "App.scss";
import data from "api/data.json";
import Counter from "components/Counter";
import Modal from "components/Modal";

function App() {
  const [totalPoint, setTotalPoint] = React.useState(0);
  const [page, setPage] = React.useState(0);
  const [activeModal, setActiveModal] = React.useState(false);

  function clickHandle(value) {
    if (page === data.questions.length - 1) {
      if (checkAnswer(value)) {
      } else {
        setActiveModal(true);
      }
    }
    if (checkAnswer(value)) {
      setTotalPoint(totalPoint + 1);
    }
    setPage(page + 1);
  }

  function checkAnswer(answer) {
    if (answer === data.questions[page].correct) return true;
    return false;
  }

  return (
    <div className="App">
      {!activeModal && <Counter limit={1500} />}
      {data.questions.length && page < data.questions.length && (
        <QuestionList
          dataQuestion={data.questions[page]}
          indexQuestion={page}
          clickHandle={clickHandle}
        />
      )}
      <Modal
        show={activeModal}
        content={<h2>Finally your point is: {totalPoint}</h2>}
      />
    </div>
  );
}

export default App;
