import { GoalType } from "../../../../../../../../../../../types/goal";
import { getUniqueKey } from "../../../../../../../../../../../utils";
import { GoalNewValue } from "../../../EditPopup.types";

export function addNewSubGoal(prevGoal: GoalType, newValue: GoalNewValue) {
  const isNewValueString = typeof newValue === "string";
  const id = getUniqueKey();
  const value = isNewValueString
    ? { name: newValue, importance: 100 }
    : newValue;

  const children = (prevGoal.children || []).map((child) => {
    if (isNewValueString || !prevGoal.children) return child;

    const importance = newValue.importance;
    const childImportance = child.importance || 100;
    const count = prevGoal.children.length;

    return {
      ...child,
      importance: childImportance - importance / count,
    };
  });

  return {
    ...prevGoal,
    children: [...children, { id, ...value }],
  };
}
