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
  newImportanceForNeighbor?: number
) {
  if (newImportanceForNeighbor) {
    const importance = Number(prevGoal.importance) || 0;
    const newValue = importance + newImportanceForNeighbor;

    return editGoal(prevGoal, "importance", newValue.toString());
  }

  if (prevGoal.id === id) {
    if (action === "add") return addNewSubGoal(prevGoal, value);

    return editGoal(prevGoal, action.field, value);
  }

  if (prevGoal.children) {
    const isActionString = typeof action === "string";
    const isImportanceEdit = !isActionString && action.field === "importance";
    let children: GoalType[] = [];

    if (isImportanceEdit) {
      const isParent = prevGoal.children.some((child) => child.id === id);
      if (isParent) {
        const totalImportance = prevGoal.children.reduce(
          (acc, { id: childId, importance }) => {
            if (childId === id) return acc + Number(value);
            return acc + (Number(importance) || 0);
          },
          0
        );
        const different = 100 - totalImportance;
        const forChild = different / (prevGoal.children.length - 1);

        children = prevGoal.children.map((goal) => {
          const isTargetGoal = goal.id === id;

          if (isTargetGoal) return getUpdatedGoal(action, goal, id, value);

          return getUpdatedGoal(action, goal, id, value, forChild);
        });
      }
    } else {
      children = prevGoal.children.map((goal) =>
        getUpdatedGoal(action, goal, id, value)
      );
    }

    return { ...prevGoal, children };
  }

  return prevGoal;
}
