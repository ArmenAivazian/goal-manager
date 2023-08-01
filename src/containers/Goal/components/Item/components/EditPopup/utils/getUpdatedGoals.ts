import { GoalType } from "../../../../../../../types/goal";

export function getUpdatedGoals(prevGoals: GoalType[], id: string, newName: string) {
    return prevGoals.map((goal) => {
        if (goal.id === id) return { ...goal, name: newName };

        if (goal.children) getUpdatedGoals(goal.children, id, newName)

        return goal;
    })

}