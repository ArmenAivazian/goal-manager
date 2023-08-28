import { GoalNewValue } from "../../../EditPopup.types";

export function submitForm(
  onSubmit: (value: GoalNewValue) => void,
  setInputValue: (value: string) => void,
  withImportance?: boolean,
  clearAfterSubmit?: boolean
) {
  return (inputValue: string, rangeInputValue: string) => {
    if (clearAfterSubmit) setInputValue("");

    const value: GoalNewValue = withImportance
      ? { importance: Number(rangeInputValue), name: inputValue }
      : inputValue;

    const isStrValueEmpty = typeof value === "string" && !value.trim();
    const isObjValueEmpty = typeof value !== "string" && !value.name.trim();
    if (isStrValueEmpty || isObjValueEmpty) return onSubmit("Goal");

    onSubmit(value || "Unnamed Goal");
  };
}
