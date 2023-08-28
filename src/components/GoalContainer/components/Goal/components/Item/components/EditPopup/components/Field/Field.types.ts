import { GoalNewValue } from "../../EditPopup.types";

export interface FieldProps {
  label: string;
  buttonName?: string;
  type?: "text" | "range";
  initValue?: string;
  clearAfterSubmit?: boolean;
  withImportance?: boolean;
  changeOnlyAfterSubmit?: boolean;
  onSubmit: (value: GoalNewValue) => void;
}
