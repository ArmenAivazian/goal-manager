import { GoalType } from "../../../../../../../../types/goal";

export interface EditPopupProps extends GoalType {
  canChangeProgress?: boolean;
  addSubGoalWithImportance?: boolean;
  onClose: () => void;
}

export type Action = { type: "edit"; field: keyof GoalType } | "add";

export type GoalNewValue = string | { name: string; importance: number };
