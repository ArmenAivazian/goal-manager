export function getValueForChildInitImportance(childrenAmount?: number) {
  if (!childrenAmount) return;

  return String(Math.round(100 / (childrenAmount + 1)));
}
