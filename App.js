import './App.css';
import React, { createContext, useState } from 'react'
import Header from './Componenet/Header/Header';
import Shop from './Componenet/Shop/Shop';
import Login from './Componenet/Login/Login';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Review from './Componenet/Review/Review';
import Inventory from './Componenet/Inventory/Inventory';
import NotFound from './Componenet/NotFound/NotFound';
import ProductDetail from './Componenet/ProductDetail/ProductDetail';
import Shipment from './Componenet/Shipment/Shipment';
import PrivateRoute from './Componenet/PrivateRoute/PrivateRoute';

export const UserContext = createContext();
function App(props) {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <h3>email : {loggedInUser.email}</h3>
      <Router>
        <Header></Header>
        <Switch>
          <Route path="/shop">
            <Shop />
          </Route>
          <Route path="/review">
            <Review />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <PrivateRoute path="/shipment">
            <Shipment />
          </PrivateRoute>
          <PrivateRoute path="/inventory">
            <Inventory />
          </PrivateRoute>
          <Route exact path="/">
            <Shop />
          </Route>

          <Route path="/product/:productKey">
            <ProductDetail />
          </Route>

          <Route path="*">
            <NotFound />
          </Route>

        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
