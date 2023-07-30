import type { ItemProps } from "./Item.types";

import classes from "./Item.module.scss";

export function Item({ name, progress }: ItemProps) {
  return (
    <div className={classes.wrapper}>
      {name}
      <span
        className={classes.progress}
        {...(progress && { style: { width: `${progress * 100}%` } })}
      ></span>
    </div>
  );
}
