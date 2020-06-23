import React from "react";

export default function Modal({ content, show }) {
  const [visible, setVisible] = React.useState(false);
  React.useEffect(() => {
    if (show) {
      setVisible(true);
    }
  }, [show]);
  return (
    visible && (
      <div className="modal">
        <div className="modal__content">{content}</div>
      </div>
    )
  );
}
