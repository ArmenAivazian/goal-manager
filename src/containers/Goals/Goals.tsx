import classes from "./Goals.module.scss";
import { Goal, GoalsProps } from "./Goals.types";
import { Item } from "./components/Item";

export function Goals({ goals, setGoals, setFocusMode }: GoalsProps) {
  const goalParams = { setGoals, setFocusMode };

  function onDbClick(goal: Goal) {
    return () => {
      setFocusMode(true);
      setGoals(goal);
    };
  }

  if (!Array.isArray(goals)) {
    if (!goals.children) return <Item {...goals} />;

    return (
      <>
        <Item {...goals} />
        <Goals goals={goals.children} {...goalParams} />
      </>
    );
  }

  return (
    <div className={classes.line}>
      {goals.map((goal) => {
        const { name, children, progress, importance } = goal;
        const hasChildren = !!children?.length;

        return (
          <div
            key={name}
            style={{ width: importance ? `${importance * 100}%` : "100%" }}
          >
            <Item
              name={name}
              progress={progress}
              {...(hasChildren && { onDbClick: onDbClick(goal) })}
            />

            {!!hasChildren && <Goals goals={children} {...goalParams} />}
          </div>
        );
      })}
    </div>
  );
}
