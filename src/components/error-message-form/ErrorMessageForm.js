import React from "react";
import { SpanErrorMessage } from "./Style";

const ErrorMessageForm = ({ form, name }) => {
  return form && form.touched[name] && form.errors[name] ? (
    <SpanErrorMessage>{form.errors[name]}</SpanErrorMessage>
  ) : (
    ""
  );
};

export default ErrorMessageForm;
