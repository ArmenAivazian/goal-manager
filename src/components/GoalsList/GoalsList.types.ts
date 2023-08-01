import { GoalType } from "../../types/goal";

export interface GoalsListProps {
    goals: GoalType[];
    setGoal: (value: GoalType | null) => void;
    setSelectedGoal: (value: GoalType | null) => void;
    setIsListGoalsPage: (value: boolean) => void;
}