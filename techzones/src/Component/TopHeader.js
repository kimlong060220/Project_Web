import {React,Component} from "react";
import { Link } from "react-router-dom";
// import 'bootstrap/dist/css/bootstrap.min.css'
import './TopHeader.css'
class TopHeader extends Component {
  render() {
  return (
    <div className = "TopHeader ">
      <nav className="navbar fixed-top navbar-expand-md navbar-dark bg-primary " >
        <a className="navbar-brand" href="#">
          Navbar
        </a>
        <input type="text" className='search' /> 
      </nav>
    </div>
    
  );
}
}
export default TopHeader ;
