import {React,Component} from "react";
import { Link } from "react-router-dom";
// import 'bootstrap/dist/css/bootstrap.min.css'
import './TopHeader.css'
import Navbar from './Navbar'
class TopHeader extends Component {
  render() {
  return (
     <Navbar/>
  );
}
}
export default TopHeader ;
