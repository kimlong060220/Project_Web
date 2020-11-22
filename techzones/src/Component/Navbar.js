import { React, Component } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import {BsSearch} from 'react-icons/bs'
import {IoIosListBox} from 'react-icons/io'
import {GiAutoRepair} from 'react-icons/gi'
import {BsFillPersonFill} from 'react-icons/bs';
import {FaShoppingCart} from "react-icons/fa";
import { useSelector } from "react-redux";
function Navbar(){
    const userSignin = useSelector((state)=>state.userSignin)
    const {userInfo} = userSignin;
    return (
        <nav className = "topnav">
            <ul className = "nav-list">
                <li className = "Nav-item">
                    <Link to="/">
                    Home
                    </Link>  
                </li>
                <li className = "Nav-item">
                    <Link to="/Login">
                    Tin Tức
                    </Link> 
                </li>
                <li className = "Nav-item">
                    <Link>
                    Thương hiệu
                    </Link>
                </li>
                <form action="/action_page.php">
                    <input type="text" placeholder="Search.." name="search"/>
                    <button type="submit"><BsSearch/></button>
                </form>
                <li className = "Nav-item">
                    <Link>
                    <IoIosListBox/>
                        Kiểm tra đơn hàng
                    </Link>                        
                </li>
                <li className = "Nav-item">
                    <Link>
                        <GiAutoRepair/>
                        Kiểm tra bảo hành
                    </Link>
                        
                </li>
                <li className ="Nav-item" id = "login">
                    {console.log(userInfo)}
                    {
                        userInfo ? (
                            <Link to="#" >Hello: {userInfo.name}</Link>
                        ) : (
                            <Link to="/Login">
                                <BsFillPersonFill/>
                            </Link>     
                        )
                    }
                                        
                </li>
                <li className ="Nav-item" id= "cart">
                    <Link to="/Cart">
                    <FaShoppingCart/> 
                    </Link>
                </li>
                
            </ul>

        </nav>
    );
}
export default Navbar;
