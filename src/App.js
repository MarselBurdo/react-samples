import { TreeComponent } from "./Components/Tree/Tree";
import StateComponent from "./Components/State/State";
import { Routes, Route, Link } from "react-router-dom";
import "antd/dist/antd.css";
import "./index.css";
import LifeClass from "./Components/LifeCycle/LifeClass";
import LifeFunc from "./Components/LifeCycle/LifeFunc";

function App() {
  return (
    <div>
      <nav>
        <Link to="/state">State</Link>
        <Link to="/">Tree</Link>
        <Link to="/class">Class</Link>
        <Link to="/func">Func</Link>
      </nav>
      <section>
        <Routes>
          <Route path="/" element={<TreeComponent />} />
          <Route path="state" element={<StateComponent />} />
          <Route path="class" element={<LifeClass />} />
          <Route path="func" element={<LifeFunc />} />
        </Routes>
      </section>
    </div>
  );
}

export default App;
