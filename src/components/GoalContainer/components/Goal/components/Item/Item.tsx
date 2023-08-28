import type { ItemProps } from "./Item.types";
import classes from "./Item.module.scss";
import { EditPopup } from "./components/EditPopup";
import { IdOpenedPopup } from "../../../../../../contexts/IdOpenedPopup";
import { useContext } from "../../../../../../hooks/useContext";
import { getColorClass } from "./utils";

export function Item({ id, name, progress, onDbClick, ...params }: ItemProps) {
  const [idOpenedPopup, setIsPopupOpened] = useContext(IdOpenedPopup);

  return (
    <>
      <div
        className={classes.wrapper}
        onDoubleClick={onDbClick}
        onClick={() => setIsPopupOpened(id)}
      >
        <span className={classes.text}>{name}</span>
        <span
          className={`${classes.progress} ${classes[getColorClass(progress)]}`}
          {...(progress && { style: { width: `${progress}%` } })}
        />
      </div>

      {idOpenedPopup === id && (
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
