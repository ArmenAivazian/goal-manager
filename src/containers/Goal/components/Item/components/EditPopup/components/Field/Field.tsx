import { useState } from "react";
import classes from "./Field.module.scss";
import { FieldProps } from "./Field.types";

export function Field({
  label,
  buttonName,
  initValue,
  clearAfterSubmit,
  type = "text",
  onSubmit,
}: FieldProps) {
  const [inputValue, setInputValue] = useState(initValue || "");

  return (
    <form
      className={classes.line}
      onSubmit={(e) => {
        e.preventDefault();
        const isTypeRange = type === "range";
        const value = isTypeRange ? `${+inputValue / 100}` : inputValue;
        onSubmit(value);
        if (clearAfterSubmit) setInputValue("");
      }}
    >
      <label className={classes.label}>
        {label}
        {type === "range" && (
          <span className={classes.percent}>{`(${inputValue}%)`}</span>
        )}
        :
      </label>
      <input
        type={type}
        className={classes.input}
        value={inputValue}
        onChange={({ target: { value } }) => setInputValue(value)}
      />
      <button>{buttonName}</button>
    </form>
  );
}
