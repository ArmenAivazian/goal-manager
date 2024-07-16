import { useEffect, useState } from "react";
import classes from "./Field.module.scss";
import { FieldProps } from "./Field.types";
import { submitForm } from "./utils";

export function Field({
  label,
  buttonName,
  initValue,
  clearAfterSubmit,
  importance,
  changeOnlyAfterSubmit,
  type = "text",
  onSubmit,
}: FieldProps) {
  const [inputValue, setInputValue] = useState(initValue || "");
  const [rangeInputValue, setRangeInputValue] = useState(importance || "50");

  const withImportance = Boolean(importance);
  const isTypeRange = type === "range";
  const shownPercent = isTypeRange || withImportance;
  const percent = withImportance ? rangeInputValue : inputValue;
  const submitHandler = submitForm(
    onSubmit,
    setInputValue,
    withImportance,
    clearAfterSubmit
  );

  useEffect(() => {
    importance && setRangeInputValue(importance);
  }, [importance]);

  return (
    <>
      <label className={`${classes.label} ${withImportance && classes.start}`}>
        {label}
        {shownPercent && (
          <span className={classes.percent}>{`(${percent}%)`}</span>
        )}
        :
      </label>

      <div
        className={`${classes.line} ${
          !!changeOnlyAfterSubmit && classes["with-button"]
        } ${withImportance && classes.levels}`}
      >
        <input
          type={type}
          value={inputValue}
          className={classes.input}
          onChange={({ target: { value } }) => {
            setInputValue(value);
            if (!changeOnlyAfterSubmit) submitHandler(value, rangeInputValue);
          }}
        />
        {withImportance && (
          <input
            type="range"
            value={rangeInputValue}
            onChange={({ target: { value } }) => setRangeInputValue(value)}
          />
        )}
        {changeOnlyAfterSubmit && (
          <button onClick={() => submitHandler(inputValue, rangeInputValue)}>
            {buttonName}
          </button>
        )}
      </div>
    </>
  );
}
