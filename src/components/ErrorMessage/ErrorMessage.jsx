import React from "react";
import css from "./ErrorMessage.module.css";

function ErrorMessage() {
  return (
    <div>
      <p>Please try reloading this page!</p>
      <ErrorMessage className={css.errorMessage} />
    </div>
  );
}

export default ErrorMessage;
