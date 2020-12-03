import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import { signout } from './actions/userActions';
import AdminRoute from './components/AdminRoute';
import PrivateRoute from './components/PrivateRoute';
import CartScreen from './screens/CartScreen';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import RegisterScreen from './screens/RegisterScreen';
import SigninScreen from './screens/SigninScreen';
import BottomHeader from './components/BottomHeader/BottomHeader';
// import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar  from './components/Navbar/Navbar';
import ShippingAddressScreen from './screens/ShippingAddressScreen';
import ProductScreen from './screens/ProductScreen';

function App() {
  // const cart = useSelector((state) => state.cart);
  // const { cartItems } = cart;
  // const userSignin = useSelector((state) => state.userSignin);
  // const { userInfo } = userSignin;
  // const dispatch = useDispatch();
  // const signoutHandler = () => {
  //   dispatch(signout());
  // };
  return (
    <BrowserRouter>
      <div>
        {/* <header className="row"> */}
          <Navbar/>
          {/* <div>
            <Link className="brand" to="/">
              Techzones
            </Link>
          </div>
          <div>
            <Link to="/cart">
              Cart
              { cartItems.length > 0 && (
                <span className="badge">{cartItems.length}</span>
              )}
            </Link>
            {userInfo ? (
              <div className="dropdown">
                <Link to="#">
                  {userInfo.name} <i className="fa fa-caret-down"></i>{' '}
                </Link>
                <ul className="dropdown-content">
                  <li>
                    <Link to="/profile">User Profile</Link>
                  </li>
                  <li>
                    <Link to="/orderhistory">Order History</Link>
                  </li>
                  <li>
                    <Link to="#signout" onClick={signoutHandler}>
                      Sign Out
                    </Link>
                  </li>
                </ul>
              </div>
            ) : (
              <Link to="/signin">Sign In</Link>
            )}
            {userInfo && userInfo.isAdmin && (
              <div className="dropdown">
                <Link to="#admin">
                  Admin <i className="fa fa-caret-down"></i>
                </Link>
                <ul className="dropdown-content">
                  <li>
                    <Link to="/dashboard">Dashboard</Link>
                  </li>
                  <li>
                    <Link to="/productlist">Products</Link>
                  </li>
                  <li>
                    <Link to="/orderlist">Orders</Link>
                  </li>
                  <li>
                    <Link to="/userlist">Users</Link>
                  </li>
                </ul>
              </div>
            )}
          </div> */}
        {/* </header> */}
        <BottomHeader/>


          <div>
          <Route path="/cart/:id?" component={CartScreen}></Route>
          <Route path="/product/:id" component={ProductScreen} exact></Route>
          <Route path="/signin" component={SigninScreen}></Route>
          <Route path="/register" component={RegisterScreen}></Route>
          <Route path="/shipping" component={ShippingAddressScreen}></Route>
          <PrivateRoute
            path="/profile"
            component={ProfileScreen}
          ></PrivateRoute>
          <Route path="/" component={HomeScreen} exact></Route>
        </div>
      </div>
      
    </BrowserRouter>
  );
}

export default App;
