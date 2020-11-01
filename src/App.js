import React, { createContext } from 'react';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Review from './components/Review/Review';
import NotFound from './components/NotFound/NotFound';
import Inventory from './components/Inventory/Inventory';
import ProductDetail from './components/ProductDetail/ProductDetail';
import Shipment from './components/Shipment/Shipment';
import Login from './components/Login/Login';
import { useState } from 'react';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

export const userContext = createContext();

function App() {
const [loggedInUser,setLoggedInUser] = useState({})

  return (


    <userContext.Provider value={[loggedInUser,setLoggedInUser]} >
      <p>email: {loggedInUser.email}</p>
      
      <Router>
      <Header />
        <Switch>
          <Route exact path="/">
            <Shop />
          </Route>
          <Route path="/shop">
            <Shop />
          </Route>
          <Route path="/review">
            <Review />
          </Route>
          <PrivateRoute path="/inventory">
            <Inventory/>
          </PrivateRoute>
          <PrivateRoute path="/shipment">
            <Shipment/>
          </PrivateRoute>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/product/:productKey">
            <ProductDetail/>
          </Route>
          <Route path="*">
            <NotFound/>
          </Route>
        </Switch>
      </Router>



    </userContext.Provider>


  )
}

export default App;
