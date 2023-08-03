import { GoalType } from "../../../../../../types/goal";

export interface EditPopupProps extends GoalType {
  canChangeProgress?: boolean;
  onClose: () => void;
}

export type Action = { type: "edit"; field: keyof GoalType } | "add";
