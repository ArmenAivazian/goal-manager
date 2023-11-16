import classes from "../Item.module.scss";

export function getClasses(isActive: boolean) {
  const defaultClass = classes.wrapper;
  const activeClass = isActive ? ` ${classes.active}` : "";

  return `${defaultClass}${activeClass}`;
}
