import { GoalNewValue } from "../../EditPopup.types";

export interface TextEditorProps {
  initialValue?: string;
  onChange: (newValue: GoalNewValue) => void;
}
