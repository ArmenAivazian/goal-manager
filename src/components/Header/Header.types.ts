import { GoalType } from "../../types/goal";

export interface HeaderProps {
    goal: GoalType | null;
    isListGoalsPage: boolean;
    shownButtonBack: boolean;
    setIsListGoalsPage: (value: boolean) => void;
    onBackButtonClick: () => void;
    setGoal: (value: GoalType | null) => void;
}