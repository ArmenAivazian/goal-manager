export function getColorClass(progress?: number) {
  if (!progress) return "";

  if (progress <= 33) return "first";

  if (progress >= 66) return "third";

  return "second";
}
