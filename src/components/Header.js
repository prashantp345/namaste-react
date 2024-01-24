import { useState } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from 'react-router-dom'
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {

    //let updateLoginStatus = "Login";
    const [ updateLoginStatus, setUpdateLoginStatus ] = useState("Login");

    const onlineStatus = useOnlineStatus();
    const greenTextColor = { color:"green" };
    const redTextColor = { color:"red" };

    return(
        <div className='header'>
            <div>
                <Link to="/"><img className="header-logo" alt="Logo Image" src={ LOGO_URL }></img></Link>
            </div>
            <div className='nav-items'>
                <ul>
                    <li>Online Status: <span style={ onlineStatus? greenTextColor: redTextColor }>{ onlineStatus ? "ON" : "OFF" }</span></li>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="about">About Us</Link></li>
                    <li><Link to="contact"> Contact Us </Link></li>
                    <li><Link to="/grocery"> Grocery</Link></li>
                    <li>Cart </li>
                    
                    <button className="login" onClick={()=>{
                        setUpdateLoginStatus(updateLoginStatus == "Login" ? "Logout" : "Login");
                    }}>{ updateLoginStatus }</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;