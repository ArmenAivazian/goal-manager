import { GoalNewValue } from "../../EditPopup.types";

export interface TextEditorProps {
  initialValue?: string;
  onBlur: (newValue: GoalNewValue) => void;
}
