import classes from "./Goal.module.scss";
import { GoalProps } from "./Goal.types";
import { Item } from "./components/Item";

export function Goal({ goal, selectedGoal, setSelectedGoal }: GoalProps) {
  const currentGoal = selectedGoal || goal;
  const goalParams = { setSelectedGoal };

  if (!Array.isArray(currentGoal)) {
    if (!currentGoal.children) return <Item {...currentGoal} />;

    return (
      <>
        <Item {...currentGoal} />
        <Goal goal={currentGoal.children} {...goalParams} />
      </>
    );
  }

  return (
    <div className={classes.line}>
      {currentGoal.map((item) => {
        const { name, children, progress, importance } = item;
        const hasChildren = !!children?.length;

        return (
          <div
            key={name}
            style={{ width: importance ? `${importance * 100}%` : "100%" }}
          >
            <Item
              name={name}
              progress={progress}
              {...(hasChildren && { onDbClick: () => setSelectedGoal(item) })}
            />

            {!!hasChildren && <Goal goal={children} {...goalParams} />}
          </div>
        );
      })}
    </div>
  );
}
