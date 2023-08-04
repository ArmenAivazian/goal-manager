import { GoalNewValue } from "../../../EditPopup.types";

export function submitForm(
  inputValue: string,
  isTypeRange: boolean,
  importance: string,
  onSubmit: (value: GoalNewValue) => void,
  setInputValue: (value: string) => void,
  withImportance?: boolean,
  clearAfterSubmit?: boolean
) {
  return (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (clearAfterSubmit) setInputValue("");

    const formattedValue = isTypeRange ? `${+inputValue / 100}` : inputValue;
    const value: GoalNewValue = withImportance
      ? { importance: +importance / 100, name: formattedValue }
      : formattedValue;

    onSubmit(value);
  };
}
