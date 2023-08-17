import { GoalType } from "../../../../../../../../../../types/goal";
import { Action, GoalNewValue } from "../../EditPopup.types";
import { addNewSubGoal } from "./utils";

function editGoal(goal: GoalType, field: keyof GoalType, value: GoalNewValue) {
  const isValueString = typeof value === "string";
  const formattedValue = isValueString ? { [field]: value } : value;

  return { ...goal, ...formattedValue };
}

export function getUpdatedGoal(
  action: Action,
  prevGoal: GoalType,
  id: string,
  value: GoalNewValue,
  newImportance?: number
) {
  if (prevGoal.id === id) {
    if (action === "add") return addNewSubGoal(prevGoal, value);

    if (action?.type === "edit") {
      return editGoal(prevGoal, action.field, value);
    }
  }

  if (newImportance) return { ...prevGoal, importance: newImportance };

  if (prevGoal.children) {
    const isParent = prevGoal.children.some((goal) => goal.id === id);
    const isImportanceEdit =
      typeof action !== "string" && action?.field === "importance";

    if (isImportanceEdit && isParent) {
      const totalImportance = prevGoal.children.reduce((acc, goal) => {
        if (goal.id === id) return acc + Number(value);

        return acc + (goal.importance || 0);
      }, 0);

      const balance =
        (100 - totalImportance) / (prevGoal.children.length - 100);

      return {
        ...prevGoal,
        children: prevGoal.children.map(
          (goal): GoalType =>
            getUpdatedGoal(
              action,
              goal,
              id,
              value,
              Number(goal.importance || 0) + balance
            )
        ),
      };
    }

    return {
      ...prevGoal,
      children: prevGoal.children.map(
        (goal): GoalType => getUpdatedGoal(action, goal, id, value)
      ),
    };
  }

  return prevGoal;
}
