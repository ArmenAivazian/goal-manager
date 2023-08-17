import { useState } from "react";
import classes from "./Field.module.scss";
import { FieldProps } from "./Field.types";
import { submitForm } from "./utils";

export function Field({
  label,
  buttonName,
  initValue,
  clearAfterSubmit,
  withImportance,
  type = "text",
  onSubmit,
}: FieldProps) {
  const [inputValue, setInputValue] = useState(initValue || "");
  const [rangeInputValue, setRangeInputValue] = useState("50");

  const isTypeRange = type === "range";
  const shownPercent = isTypeRange || withImportance;
  const percent = withImportance ? rangeInputValue : inputValue;

  return (
    <form
      className={classes.line}
      onSubmit={submitForm(
        inputValue,
        rangeInputValue,
        onSubmit,
        setInputValue,
        withImportance,
        clearAfterSubmit
      )}
    >
      <label className={classes.label}>
        {label}
        {shownPercent && (
          <span className={classes.percent}>{`(${percent}%)`}</span>
        )}
        :
      </label>
      <input
        type={type}
        className={classes.input}
        value={inputValue}
        onChange={({ target: { value } }) => setInputValue(value)}
      />
      {withImportance && (
        <input
          type="range"
          className={classes.input}
          value={rangeInputValue}
          onChange={({ target: { value } }) => setRangeInputValue(value)}
        />
      )}
      <button>{buttonName}</button>
    </form>
  );
}
