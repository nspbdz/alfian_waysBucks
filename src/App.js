import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Container } from "react-bootstrap";
import { useState, useContext, useEffect } from "react";

import PrivateRoute from "./components/route/PrivateRoute";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Profile from "./pages/Profile";
import AddToping from "./pages/AddToping";
import AddProduct from "./pages/AddProduct";
import Header from "./components/Header";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import DetailProduct from "./pages/DetailProduct";
import {CartContextProvider} from "./contexts/cartContext"
import {UserContextProvider,UserContext} from "./contexts/userContext";
import dataFake from "./data/product.json"; 
import dataToping from "./data/toping.json"; 
import dataTransactions from "./data/transactions.json"

const App = () => {

  const fakeData=dataFake.user
  let product=JSON.stringify(fakeData);
  localStorage.setItem("data", product)

  const dataTopings=dataToping.user
  let toping=JSON.stringify(dataTopings);
  localStorage.setItem("dataToping", toping)

  console.log(dataTransactions)
  const fakeDataTransaction=dataTransactions.data.transaction
let JsonStrings=JSON.stringify(fakeDataTransaction);
localStorage.setItem("dataTransaction", JsonStrings)
console.log(fakeDataTransaction)
  console.log()
  return (
    <div className="App">
      <Router>
        <UserContextProvider  >
          <CartContextProvider >
            <Header />
            <Container fluid>
              <Switch>
                <Route exact path="/" component={Home} />
                <PrivateRoute  exact path="/product/:id" component={DetailProduct} />
                <PrivateRoute exact path="/addproduct" component={AddProduct} />
                <PrivateRoute exact path="/profile" component={Profile} />
                <PrivateRoute exact path="/cart" component={Cart} />
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
