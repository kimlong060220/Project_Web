import { React, Component } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import {BsSearch} from 'react-icons/bs'
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
                        Kiểm tra đơn hàng
                    </a>
                </li>
                <li className = "nav-item">
                    <a href = "#">
                        Kiểm tra bảo hành
                    </a>
                </li>
                
            </ul>

        </nav>
    );
  }
}
