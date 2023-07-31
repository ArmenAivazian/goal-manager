import { API_RESPONSE_GOALS } from "./api/goals";
import { Logo } from "./components/Logo";
import { Goals } from "./containers/Goals";
import { formattedData } from "./utils";
import classes from "./App.module.scss";
import { useState } from "react";

function App() {
  const data = formattedData(API_RESPONSE_GOALS[0].data);

  const [goals, setGoals] = useState(data);
  const [focusMode, setFocusMode] = useState(false);

  function handleBackButtonClick() {
    setFocusMode(false);
    setGoals(formattedData(data));
  }

  return (
    <>
      <nav className={classes.header}>
        <Logo />
        {focusMode && <button onClick={handleBackButtonClick}>Back</button>}
      </nav>
      <div className={classes.wrapper}>
        <Goals goals={goals} setGoals={setGoals} setFocusMode={setFocusMode} />
      </div>
    </>
  );
}

export default App;
