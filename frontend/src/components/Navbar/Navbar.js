import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { BsSearch } from "react-icons/bs";
import { IoIosListBox } from "react-icons/io";
import { GiAutoRepair } from "react-icons/gi";
import { BsFillPersonFill } from "react-icons/bs";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector,useDispatch } from "react-redux";
import { signout } from '../../actions/userActions';
import { searchProduct } from'../../actions/productActions';

export default function Navbar(props) {
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const dispatch = useDispatch();
  const signoutHandler = () => {
    dispatch(signout());
  };
  const searchHandler = (category) => {
    dispatch(searchProduct(category))
    // props.history.push('/search')
    console.log('okeeee')
  }
  return (
    <>
    <nav className="topnav">
      <ul className="nav-list">
        <li className="Nav-item">
          <Link to="/"><img className="logo" src="/images/logo.png"></img></Link>
        </li>
        <li className="Nav-item">
          <Link to="/Login">Tin Tức</Link>
        </li>
        <li className="Nav-item">
          <Link>Thương hiệu</Link>
        </li>
        {/* onKeyPress={(e) => {searchHandler(e.target.value)}} */}
        <form action="/search">
          <input type="text" placeholder="Search.." name="category" onChange={(e) => {searchHandler(e.target.value)}} />
          <button type="submit">
            <BsSearch />
          </button>
        </form>
        <li className="Nav-item">
          <Link to="/orderhistory">
            <IoIosListBox />
            Kiểm tra đơn hàng
          </Link>
        </li>
        <li className="Nav-item">
          <Link>
            <GiAutoRepair />
            Kiểm tra bảo hành
          </Link>
        </li>
        <li className="Nav-item" id="login">
          {console.log(userInfo)}
          {userInfo ? (
            <div>
                <Link to="/profile">Hello: {userInfo.name}</Link>
                <Link to="#signout" onClick={signoutHandler}>
                    Sign Out
                </Link>
            </div>          
          ) : (
                <Link to="/signin">
                    <BsFillPersonFill />
                </Link>
          )}
        </li>
        <li className="Nav-item" id="cart">
          <Link to="/Cart">
            <FaShoppingCart />
            { cartItems.length > 0 && (
                <span className="badge">{cartItems.length}</span>
              )}
          </Link>
        </li>
      </ul>
    </nav>
    {userInfo && userInfo.isAdmin && (
    <div className="AdminHeader">
    <nav className="navbar">
      <ul className="nav-list">
          <li className="Nav-item">
            <Link to="/productlist">Products</Link>
          </li>
          <li className="Nav-item">
            <Link to="/orderlist">Orders</Link>
          </li>
          <li className="Nav-item">
            <Link to="/userlist">Users</Link>
          </li>
        </ul>
      </nav>
      </div>
    )}
    </>
  );
}
// export default Navbar;
