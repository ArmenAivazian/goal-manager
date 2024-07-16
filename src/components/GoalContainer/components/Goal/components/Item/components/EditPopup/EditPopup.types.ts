import { GoalType } from "../../../../../../../../types/goal";

export interface EditPopupProps extends GoalType {
  canChangeProgress?: boolean;
  canChangeImportance?: boolean;
  childInitImportance?: string;
  onClose: () => void;
}

export type Action = { type: "edit"; field: keyof GoalType } | "add";

export type GoalNewValue = string | { name: string; importance: number };
