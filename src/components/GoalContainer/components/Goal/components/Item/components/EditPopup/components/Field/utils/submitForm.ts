import { GoalNewValue } from "../../../EditPopup.types";

export function submitForm(
  inputValue: string,
  rangeInputValue: string,
  onSubmit: (value: GoalNewValue) => void,
  setInputValue: (value: string) => void,
  withImportance?: boolean,
  clearAfterSubmit?: boolean
) {
  return (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (clearAfterSubmit) setInputValue("");

    const value: GoalNewValue = withImportance
      ? { importance: +rangeInputValue, name: inputValue }
      : inputValue;

    onSubmit(value);
  };
}
