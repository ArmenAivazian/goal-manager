import { GoalType } from "../../../../../../types/goal";

export interface EditPopupProps extends GoalType {
  onClose: () => void;
}

export type Action = "edit" | "add";
