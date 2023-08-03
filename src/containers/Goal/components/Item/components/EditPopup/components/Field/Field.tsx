import { useState } from "react";
import classes from "./Field.module.scss";
import { FieldProps } from "./Field.types";
import { getUniqueKey } from "../../../../../../../../utils";

export function Field({
  label,
  buttonName,
  initValue,
  clearAfterSubmit,
  onSubmit,
}: FieldProps) {
  const [inputValue, setInputValue] = useState(initValue || "");

  const uniqueId = getUniqueKey();

  return (
    <form
      className={classes.line}
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(inputValue);
        if (clearAfterSubmit) setInputValue("");
      }}
    >
      <label className={classes.label} htmlFor={uniqueId}>
        {label}:
      </label>
      <input
        id={uniqueId}
        type="text"
        className={classes.input}
        value={inputValue}
        onChange={({ target: { value } }) => setInputValue(value)}
      />
      <button>{buttonName}</button>
    </form>
  );
}
