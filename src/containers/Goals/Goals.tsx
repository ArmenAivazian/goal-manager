import classes from "./Goals.module.scss";
import { GoalsProps } from "./Goals.types";
import { Item } from "./components/Item";

export function Goals({ data }: GoalsProps) {
  if (!Array.isArray(data)) {
    if (!data.children) return <Item {...data} />;

    return (
      <>
        <Item {...data} />
        <Goals data={data.children} />
      </>
    );
  }

  return (
    <div className={classes.line}>
      {data.map(({ name, children, progress, importance }) => {
        return (
          <div
            key={name}
            style={{ width: importance ? `${importance * 100}%` : "100%" }}
          >
            <Item name={name} progress={progress} />

            {!!children?.length && <Goals data={children} />}
          </div>
        );
      })}
    </div>
  );
}
