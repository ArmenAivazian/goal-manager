import { GoalNewValue } from "../../EditPopup.types";

export interface FieldProps {
  label: string;
  buttonName: string;
  type?: "text" | "range";
  initValue?: string;
  clearAfterSubmit?: boolean;
  withImportance?: boolean;
  onSubmit: (value: GoalNewValue) => void;
}
