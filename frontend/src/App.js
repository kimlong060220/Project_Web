import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import AdminRoute from './components/AdminRoute';
import PrivateRoute from './components/PrivateRoute';
import CartScreen from './screens/CartScreen';
import HomeScreen from './screens/HomePage';
import ProfileScreen from './screens/ProfileScreen';
import RegisterScreen from './screens/RegisterScreen';
import SigninScreen from './screens/SigninScreen';
import BottomHeader from './components/BottomHeader/BottomHeader';
// import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar  from './components/Navbar/Navbar';
import ProductScreen from './screens/ProductScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import Footer from './components/Footer';
import OrderListScreen from './screens/OrderListScreen';

function App() {
  return (
    <BrowserRouter>
      <div>
          <Navbar/>
          <BottomHeader/>
          <Route path="/cart/:id?" component={CartScreen}></Route>
          <Route path="/product/:id" component={ProductScreen} exact></Route>
          <Route path="/signin" component={SigninScreen}></Route>
          <Route path="/register" component={RegisterScreen}></Route>
          <Route path="/placeorder" component={PlaceOrderScreen}></Route>

          <AdminRoute
            path="/orderlist"
            component={OrderListScreen}
            exact
          ></AdminRoute>
          <PrivateRoute
            path="/profile"
            component={ProfileScreen}
          ></PrivateRoute>
          <Route path="/" component={HomeScreen} exact></Route>
          <Footer/>
      </div>
      
    </BrowserRouter>
  );
}

export default App;
