import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../src/pages/home/home";
import CompletedTask from "../src/pages/completedTask/completedTask";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/completedtask" component={CompletedTask} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
