import { useState, useContext } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from 'react-router-dom'
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {

    //let updateLoginStatus = "Login";
    const [ updateLoginStatus, setUpdateLoginStatus ] = useState("Login");

    const onlineStatus = useOnlineStatus();

    const loggedInUserData = useContext(UserContext);

    //Subscribing to the store using a selector
    const cartItems = useSelector((store)=> store.cart.items);
    //console.log("cart items", cartItems);

    const greenTextColor = { color:"green" };
    const redTextColor = { color:"red" };

    const getCartItemsCount = () => {
        let itemsData = [];
        cartItems.forEach(element => {
            if (!itemsData.some(item => item?.card?.info?.id === element?.card?.info?.id)) {
                itemsData.push(element);
            }
        });
        return itemsData.length;
    }

    return(
        <div className='flex justify-between bg-pink-100 sm:bg-yellow-100 lg:bg-green-100 shadow-lg m-2'>
            <div className="m-2">
                <Link to="/"><img className="w-20" alt="Logo Image" src={ LOGO_URL }></img></Link>
            </div>
            <div className='flex items-center'>
                <ul className="flex p-4 m-4">
                    <li className="px-4">Online Status: <span style={ onlineStatus? greenTextColor: redTextColor }
                        className="font-bold">{ onlineStatus ? "ON" : "OFF" }</span></li>
                    <li className="px-4"><Link to="/">Home</Link></li>
                    <li className="px-4"><Link to="about">About Us</Link></li>
                    <li className="px-4"><Link to="contact"> Contact Us </Link></li>
                    <li className="px-4"><Link to="/grocery"> Grocery</Link></li>
                    <li className="px-4 font-bold text-xl"><Link to="/cart"> Cart - ({getCartItemsCount()} items)</Link></li>
                    
                    <button className="login" name="Login" onClick={()=>{
                        setUpdateLoginStatus(updateLoginStatus == "Login" ? "Logout" : "Login");
                    }}>{ updateLoginStatus }</button>
                    <li className="px-4 font-bold">{loggedInUserData.loggedInUser} </li>
                </ul>
            </div>
        </div>
    )
}

export default Header;