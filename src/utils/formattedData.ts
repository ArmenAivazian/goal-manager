import { Goal } from "../containers/Goals/Goals.types";

function calculateProgress(data: Goal): number {
  if ("progress" in data) return data.progress!;

  if ("children" in data && Array.isArray(data.children)) {
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

    data.progress = totalProgress / totalImportance;
  }

  return data.progress || 0;
}

export function formattedData(data: Goal): Goal {
  calculateProgress(data);

  return data;
}
