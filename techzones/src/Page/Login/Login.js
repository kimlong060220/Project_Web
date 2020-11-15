import { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import TopHeader from "../../Component/TopHeader";
import BottomHeader from "../../Component/BottomHeader";
import Footer from "../../Component/Footer";
import './Login.css'
import { Link } from "react-router-dom";
class Login extends Component {
  render() {
    return (
      <div className="Home">
        <TopHeader />
        <BottomHeader />
        <form className="loginForm">
              <div className="Sign-In">
              <h3>Sign In</h3>
              <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary btn-block">ĐĂNG NHẬP</button>
                <p className="forgot-password text-right">
                    <span className="Sign-Up"><Link>Sign Up</Link></span>
                    Forgot <a href="#">password?</a>
                </p>
                <hr class="my-4" />
                </div>
                
            </form>
      </div>
    );
  }
}

export default Login;
