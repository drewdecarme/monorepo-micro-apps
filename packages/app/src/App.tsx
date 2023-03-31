import "./index.scss";
import { LayoutHeader, LayoutNav, LayoutMain } from "@my-company/components";
import { useLog } from "@my-company/utils";

function App() {
  const log = useLog({ label: "app", level: "DEBUG" });

  log("this be the logger", "Arrgg");

  return (
    <div className="app">
      <LayoutHeader />
      <LayoutNav />
      <LayoutMain>this be the regular app</LayoutMain>
    </div>
  );
}

export default App;
