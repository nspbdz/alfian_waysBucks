import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Container } from "react-bootstrap";

import PrivateRoute from "./components/route/PrivateRoute";
import Home from "./pages/Home";
import Header from "./components/Header";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import DetailProduct from "./pages/DetailProduct";
import {CartContextProvider} from "./contexts/cartContext"
import {UserContextProvider} from "./contexts/userContext";
/**
 * Our main app
 * For routing, make sure to use BrowserRouter, Switch, and Route
 * Route important attribute: path and component
 * @returns
 */
const App = () => {

  return (
    <div className="App">
      <Router>
        <UserContextProvider>
          <CartContextProvider>
            <Header />
            <Container fluid>
              <Switch>
                <Route exact path="/" component={Home} />
                <PrivateRoute exact path="/product/:id" component={DetailProduct} />
                <Route exact path="/signup" component={Signup} />
              </Switch>
            </Container>
          </CartContextProvider>
        </UserContextProvider>
      </Router>
    </div>
  );
};

export default App;
