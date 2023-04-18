import { Route, Router, Switch } from "react-router-dom";
import history from "./History";
import NavBar from "./navbar/NavBar";
import HomePage from "./home/HomePage";
import FareStructure from "./farestructure/FareStructure";
import VirtualInterlining from "./virtual-interlining/VirtualInterlining";


export default function App() {
  return (
    <body>
      <div>
        <NavBar />
        <Router history={history}>
          <Switch>
            <Route 
              exact path="/" 
              component={() => <HomePage /> } 
            />
            <Route 
              exact path="/farestructure/:view" 
              component={() => <FareStructure /> } 
            />
            <Route 
            exact path="/virtual-interlining/:view" 
            component={() => <VirtualInterlining /> } 
          />
        </Switch>
        </Router>
      </div>
    </body>
  );
}
