import { GoalType } from "../types/goal";

function calculateProgress(data: GoalType): number {
  if (Array.isArray(data.children)) {
    const initValue = { totalProgress: 0, totalImportance: 0 };

    const { totalProgress, totalImportance } = data.children.reduce(
      ({ totalProgress, totalImportance }, child) => {
        const importance = child.importance || 1;
        const progress = calculateProgress(child) * importance;

        return {
          totalProgress: totalProgress + progress,
          totalImportance: totalImportance + importance,
        };
      },
      initValue
    );

    if (totalImportance !== 1) {
      const different = 1 - totalImportance;
      const forChild = different / data.children.length;

      data.children = data.children.map((child) => ({
        ...child,
        importance: (child.importance || 0) + forChild,
      }));
    }

    data.progress = +(totalProgress / totalImportance).toFixed(3);
  }

  return data.progress || 0;
}

export function formattedGoal(data?: GoalType | null): GoalType | null {
  if (!data) return null;

  calculateProgress(data);

  return data;
}
