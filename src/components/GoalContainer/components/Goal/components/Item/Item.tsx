import type { ItemProps } from "./Item.types";
import classes from "./Item.module.scss";
import { EditPopup } from "./components/EditPopup";
import { IdOpenedPopup } from "../../../../../../contexts/IdOpenedPopup";
import { useContext } from "../../../../../../hooks/useContext";
import { getColorClass } from "./utils";
import { useEffect, useRef, useState } from "react";

export function Item({ id, name, progress, onDbClick, ...params }: ItemProps) {
  const [idOpenedPopup, setIsPopupOpened] = useContext(IdOpenedPopup);
  const [isTextVisible, setIsTextVisible] = useState(true);

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (Number(ref?.current?.offsetWidth) < 50) setIsTextVisible(false);
  }, [params.importance]);

  const isActive = idOpenedPopup === id;

  return (
    <>
      <div
        className={`${classes.wrapper}${isActive ? ` ${classes.active}` : ""}`}
        onDoubleClick={onDbClick}
        onClick={() => setIsPopupOpened(id)}
        ref={ref}
      >
        {isTextVisible && <span className={classes.text}>{name}</span>}
        <span
          className={`${classes.progress} ${classes[getColorClass(progress)]}`}
          {...(progress && { style: { width: `${progress}%` } })}
        />
      </div>

      {isActive && (
        <EditPopup
          id={id}
          name={name}
          progress={progress}
          onClose={() => setIsPopupOpened(null)}
          {...params}
        />
      )}
    </>
  );
}
