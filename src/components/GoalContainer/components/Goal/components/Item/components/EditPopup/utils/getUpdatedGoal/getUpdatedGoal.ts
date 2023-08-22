import { GoalType } from "../../../../../../../../../../types/goal";
import { Action, GoalNewValue } from "../../EditPopup.types";
import { addNewSubGoal, getChildren } from "./utils";

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
    const children = getChildren(
      isImportanceEdit,
      prevGoal.children,
      action,
      id,
      value
    );

    return { ...prevGoal, children };
  }

  return prevGoal;
}
