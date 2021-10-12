import "./App.css";
import NavigationBar from "./components/NavigationBar";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavigationBar />

      <Switch>
        <Route path="/">{/* Home component */}</Route>
        <Route path="/about">{/* about component */}</Route>
        <Route path="/projects">{/* projects component */}</Route>
        <Route path="/contact">{/* contact component */}</Route>
      </Switch>
    </div>
  );
}

export default App;
