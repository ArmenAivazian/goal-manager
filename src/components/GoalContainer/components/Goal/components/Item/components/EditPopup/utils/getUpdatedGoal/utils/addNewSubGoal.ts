import { getChildren } from ".";
import { GoalType } from "../../../../../../../../../../../types/goal";
import { getUniqueKey } from "../../../../../../../../../../../utils";
import { Action, GoalNewValue } from "../../../EditPopup.types";

export function addNewSubGoal(prevGoal: GoalType, newValue: GoalNewValue) {
  const isNewValueString = typeof newValue === "string";
  const id = getUniqueKey();
  const value = isNewValueString
    ? { name: newValue, importance: 100 }
    : newValue;

  const children = [...(prevGoal.children || []), { id, ...value }];
  const actionForChildren: Action = { type: "edit", field: "importance" };
  const formattedChildren = getChildren(
    true,
    children,
    actionForChildren,
    id,
    String(value.importance)
  );

  return { ...prevGoal, children: formattedChildren };
}
