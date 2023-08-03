import type { ItemProps } from "./Item.types";
import classes from "./Item.module.scss";
import { EditPopup } from "./components/EditPopup";
import { useState } from "react";

export function Item({ id, name, progress, onDbClick }: ItemProps) {
  const [isPopupOpened, setIsPopupOpened] = useState(false);

  return (
    <>
      <div
        className={classes.wrapper}
        onDoubleClick={onDbClick}
        onClick={() => setIsPopupOpened(true)}
      >
        {name}
        <span
          className={classes.progress}
          {...(progress && { style: { width: `${progress * 100}%` } })}
        />
      </div>

      {isPopupOpened && (
        <EditPopup
          id={id}
          name={name}
          onClose={() => setIsPopupOpened(false)}
        />
      )}
    </>
  );
}
