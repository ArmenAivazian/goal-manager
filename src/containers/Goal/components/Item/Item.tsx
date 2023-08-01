import type { ItemProps } from "./Item.types";

import classes from "./Item.module.scss";

export function Item({ name, progress, onDbClick }: ItemProps) {
  return (
    <div className={classes.wrapper} onDoubleClick={onDbClick}>
      {name}
      <span
        className={classes.progress}
        {...(progress && { style: { width: `${progress * 100}%` } })}
      ></span>
    </div>
  );
}
