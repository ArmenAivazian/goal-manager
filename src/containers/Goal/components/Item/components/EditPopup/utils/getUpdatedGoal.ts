import { GoalType } from "../../../../../../../types/goal";
import { getUniqueKey } from "../../../../../../../utils";
import { Action } from "../EditPopup.types";

function editName(prevGoal: GoalType, newName: string) {
  return { ...prevGoal, name: newName };
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
    switch (action) {
      case "edit":
        return editName(prevGoal, newValue);
      case "add":
        return addNewSubGoal(prevGoal, newValue);
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
