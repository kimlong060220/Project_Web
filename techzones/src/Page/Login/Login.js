import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import TopHeader from "../../Component/TopHeader";
import {useDispatch} from 'react-redux'
import BottomHeader from "../../Component/BottomHeader";
import {signin} from '../../actions/userActions'
// import Footer from "../../Component/Footer";
import './Login.css'
import { Link } from "react-router-dom";
export default function Login() {
    const [email,setEmail] = useState('');
    const [password,setPassword] =useState('');
    const dispatch = useDispatch(); 
    const submitHandler = (e) => {
      e.preventDefault();
      dispatch(signin(email,password))
    }
    return (
      <div className="Home">
        <TopHeader />
        <BottomHeader />
        <form className="loginForm" onSubmit={submitHandler}>
              <div className="Sign-In">
              <h3>Sign In</h3>
              <div className="form-group">
                    <label>Email</label>
                    <input type="email" id="email" className="form-control" placeholder="Enter email" required onChange={(e) => setEmail(e.target.value)} />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" required onChange={(e) => setPassword(e.target.value)} />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary btn-block">ĐĂNG NHẬP</button>
                <p className="forgot-password text-right">
                    <span className="Sign-Up"><Link to="/register">Sign Up</Link></span>
                    Forgot <a href="#">password?</a>
                </p>
                <hr className="my-4" />
                </div>
                
            </form>
      </div>
    );
}

// export default Login;
