import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Customer from "./pages/Customer";
import Home from "./pages/Home";
import Store from "./store/store";
import "./App.scss";

function App() {
  return (
    <Store>
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/customer/:customerId" component={Customer} />
          </Switch>
        </div>
      </Router>
    </Store>
  );
}

export default App;
