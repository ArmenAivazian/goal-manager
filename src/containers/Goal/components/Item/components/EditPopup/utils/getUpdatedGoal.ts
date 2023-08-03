import { GoalType } from "../../../../../../../types/goal";
import { getUniqueKey } from "../../../../../../../utils";
import { Action } from "../EditPopup.types";

function editGoal(prevGoal: GoalType, field: keyof GoalType, newValue: string) {
  return { ...prevGoal, [field]: newValue };
}

function addNewSubGoal(prevGoal: GoalType, name: string) {
  return {
    ...prevGoal,
    children: [...(prevGoal.children || []), { id: getUniqueKey(), name }],
  };
}

export function getUpdatedGoal(
  action: Action,
  prevGoal: GoalType,
  id: string,
  newValue: string
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
