import type { FC } from "react";
import { CounterApp, FirstApp } from "./components";

const App: FC = () => {
  return (
    <div>
      {/* <FirstApp title="Hello, I'm Toom" /> */}
      <CounterApp value={20} />
    </div>
  );
};

export default App;
