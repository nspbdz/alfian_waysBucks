import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Container } from "react-bootstrap";

import PrivateRoute from "./components/route/PrivateRoute";
import Home from "./pages/Home";
import AddToping from "./pages/AddToping";
import AddProduct from "./pages/AddProduct";
import Header from "./components/Header";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import DetailProduct from "./pages/DetailProduct";
import {CartContextProvider} from "./contexts/cartContext"
import {UserContextProvider} from "./contexts/userContext";
import dataFake from "./data/toping.json"; 

/**
 * Our main app
 * For routing, make sure to use BrowserRouter, Switch, and Route
 * Route important attribute: path and component
 * @returns
 */
const App = () => {

  const fakeData=dataFake.user.products
  let JsonString=JSON.stringify(fakeData);
  localStorage.setItem("data", JsonString)
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
                <PrivateRoute exact path="/addproduct" component={AddProduct} />
                <PrivateRoute exact path="/addtoping" component={AddToping} />
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
