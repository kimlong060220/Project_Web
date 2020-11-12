import { React, Component } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import {BsSearch} from 'react-icons/bs'
import {IoIosListBox} from 'react-icons/io'
import {GiAutoRepair} from 'react-icons/gi'
import {BsFillPersonFill} from 'react-icons/bs';
import {FaShoppingCart} from "react-icons/fa";
export default class Navbar extends Component {
  render() {
    return (
        <nav className = "topnav">
            <ul className = "nav-list">
                <li className = "nav-item">
                    <a href = "#">
                        Home
                    </a>
                </li>
                <li className = "nav-item">
                    <a href = "#">
                        Tin tức
                    </a>
                </li>
                <li className = "nav-item">
                    <a href = "#">
                        Thương hiệu
                    </a>
                </li>
                <form action="/action_page.php">
                    <input type="text" placeholder="Search.." name="search"/>
                    <button type="submit"><BsSearch/></button>
                </form>
                <li className = "nav-item">
                    <a href = "#">
                        <IoIosListBox/>
                        Kiểm tra đơn hàng
                    </a>
                </li>
                <li className = "nav-item">
                    <a href = "#">
                        <GiAutoRepair/>
                        Kiểm tra bảo hành
                    </a>
                </li>
                <li className ="nav-item" id = "login">
                    <a href ="#">
                        <BsFillPersonFill/> 
                    </a>
                </li>
                <li className ="nav-item" id= "cart">
                    <a href ="#">
                        <FaShoppingCart/> 
                    </a>
                </li>
                
            </ul>

        </nav>
    );
  }
}
