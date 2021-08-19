import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Container } from "react-bootstrap";

import PrivateRoute from "./components/route/PrivateRoute";
import Home from "./pages/Home";
import Header from "./components/Header";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import DetailProduct from "./pages/DetailProduct";
import LifeCycle from "./components/preferencesConcept/LifeCycle";

import {UserContextProvider} from "./contexts/userContext";
/**
 * Our main app
 * For routing, make sure to use BrowserRouter, Switch, and Route
 * Route important attribute: path and component
 * @returns
 */
const App = () => {

  const headerTitle = "Dumbways Batch 24";
  return (
    <div className="App">
      <Router>
        <UserContextProvider>
          <CartContextProvider>
            <Header title={headerTitle} />
            <Container fluid>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/profile" component={Profile} />
                <PrivateRoute exact path="/product/:id" component={DetailProduct} />
                <Route exact path="/signup" component={Signup} />
                <Route path="/lifecycle" component={LifeCycle} />
              </Switch>
            </Container>
          </CartContextProvider>
        </UserContextProvider>
      </Router>
    </div>
  );
};

export default App;
