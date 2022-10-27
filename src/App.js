import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import First from "./FirstPage";
import About from "./About";
import { Switch } from "react-router-dom";
import Service from "./Service";
import Sec from "./Second";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <First />
        </Route>
        <Route path="/Second">
          <Sec />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/service">
          <Service />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;