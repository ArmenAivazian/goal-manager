import { GoalType } from "../../../../../../types/goal";

export interface EditPopupProps extends GoalType {
    setGoalName: (name: string) => void;
    onClose: () => void;
}