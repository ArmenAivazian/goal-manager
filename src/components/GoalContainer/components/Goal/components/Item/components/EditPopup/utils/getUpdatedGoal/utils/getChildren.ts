import { GoalType } from "../../../../../../../../../../../types/goal";
import { Action, GoalNewValue } from "../../../EditPopup.types";
import { getUpdatedGoal } from "../getUpdatedGoal";

export function getChildren(
  isImportanceEdit: boolean,
  children: GoalType[],
  action: Action,
  id: string,
  value: GoalNewValue
): GoalType[] {
  if (isImportanceEdit) {
    const isParent = children.some((child) => child.id === id);
    if (isParent) {
      const totalImportance = children.reduce(
        (acc, { id: childId, importance }) => {
          if (childId === id) return acc + Number(value);

          return acc + (Number(importance) || 0);
        },
        0
      );
      const different = 100 - totalImportance;
      const forChild = different / (children.length - 1);

      const { minimalGoalIds, rejectedValue } = children.reduce<{
        minimalGoalIds: string[];
        rejectedValue: number;
      }>(
        (acc, goal) => {
          if (goal.id === id) return acc;

          const importance = Number(goal.importance) || 100;
          const realImportance = importance + forChild;

          if (realImportance <= 0) {
            const surplus = acc.rejectedValue + realImportance;
            const newIds = [...acc.minimalGoalIds, goal.id];

            return { minimalGoalIds: newIds, rejectedValue: surplus - 1 };
          }

          return acc;
        },
        { minimalGoalIds: [], rejectedValue: 0 }
      );

      return children.map((goal) => {
        const isTargetGoal = goal.id === id;

        if (isTargetGoal) {
          const newValue = String(Number(value) + rejectedValue);

          return getUpdatedGoal(action, goal, id, newValue);
        }

        if (minimalGoalIds.includes(goal.id)) {
          const minimalImportance = -(goal.importance || 100) + 1;

          return getUpdatedGoal(action, goal, id, value, minimalImportance);
        }

        return getUpdatedGoal(action, goal, id, value, forChild);
      });
    }
  }

  return children.map((goal) => getUpdatedGoal(action, goal, id, value));
}
