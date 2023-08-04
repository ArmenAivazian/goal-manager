import { GoalType } from "../../../../../../../../../../types/goal";
import { Action, GoalNewValue } from "../../EditPopup.types";
import { addNewSubGoal } from "./utils";

function editGoal(
  prevGoal: GoalType,
  field: keyof GoalType,
  newValue: GoalNewValue
) {
  const value = typeof newValue === "string" ? { [field]: newValue } : newValue;

  return { ...prevGoal, ...value };
}

export function getUpdatedGoal(
  action: Action,
  prevGoal: GoalType,
  id: string,
  newValue: GoalNewValue
) {
  if (prevGoal.id === id) {
    if (action === "add") return addNewSubGoal(prevGoal, newValue);

    if (action?.type === "edit") {
      return editGoal(prevGoal, action.field, newValue);
    }
  }

  if (prevGoal.children) {
    return {
      ...prevGoal,
      children: prevGoal.children.map(
        (goal): GoalType => getUpdatedGoal(action, goal, id, newValue) || goal
      ),
    };
  }

  return prevGoal;
}
