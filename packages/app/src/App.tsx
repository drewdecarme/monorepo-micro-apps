import "./index.scss";
import { LayoutHeader, LayoutNav, LayoutMain } from "@my-company/components";
import { useLog } from "@my-company/utils";
import { Layer1, Layer2, Layer3 } from "@my-company/app-mfe";

function App() {
  const log = useLog({ label: "app", level: "DEBUG" });

  log("this be the logger", "Arrgg");

  return (
    <div className="app">
      <LayoutHeader />
      <LayoutNav />
      <LayoutMain>
        this be the regular app
        <div className="dashboard">
          <div
            style={{
              gridArea: "main",
            }}
          >
            <Layer1>
              <Layer2>
                <Layer3>All levels</Layer3>
              </Layer2>
            </Layer1>
            main content area
          </div>
          <div
            style={{
              gridArea: "sidebar",
            }}
          >
            <Layer2>
              <Layer3>Just level 2, and 3</Layer3>
            </Layer2>
          </div>
          <div
            style={{
              gridArea: "bottom",
            }}
          >
            <Layer3>Just level 3</Layer3>
          </div>
        </div>
      </LayoutMain>
    </div>
  );
}

export default App;
