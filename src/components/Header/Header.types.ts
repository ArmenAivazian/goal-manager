import { GoalType } from "../../types/goal";

export interface HeaderProps {
    goal: GoalType | null;
    isListGoalsPage: boolean;
    shownButtonBack: boolean;
    goals: GoalType[];
    setIsListGoalsPage: (value: boolean) => void;
    onBackButtonClick: () => void;
    setGoals: (value: GoalType[]) => void;
    setGoal: (value: GoalType | null) => void;
}