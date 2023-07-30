import { API_RESPONSE_GOALS } from "./api/goals";
import { Logo } from "./components/Logo";
import { Goals } from "./containers/Goals";
import { formattedData } from "./utils";

function App() {
  return (
    <>
      <Logo />
      <Goals data={formattedData(API_RESPONSE_GOALS[0].data)} />
    </>
  );
}

export default App;
