import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Customer from "./pages/Customer";
import Home from "./pages/Home";
import "./App.scss";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/customer/:customerId" component={Customer} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
