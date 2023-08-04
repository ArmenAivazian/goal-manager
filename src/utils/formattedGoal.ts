import { GoalType } from "../types/goal";

function calculateProgress(data: GoalType): number {
  if (Array.isArray(data.children)) {
    const initValue = { totalProgress: 0, totalImportance: 0 };

    const { totalProgress, totalImportance } = data.children.reduce(
      ({ totalProgress, totalImportance }, child) => {
        const importance = child.importance || 1;
        const childProgress = calculateProgress(child) * importance;

        return {
          totalProgress: totalProgress + childProgress,
          totalImportance: totalImportance + importance,
        };
      },
      initValue
    );

    data.progress = +(totalProgress / totalImportance).toFixed(3);
  }

  return data.progress || 0;
}

export function formattedGoal(data?: GoalType): GoalType | null {
  if (!data) return null;

  calculateProgress(data);

  return data;
}
