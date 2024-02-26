//import { useState, useContext } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from 'react-router-dom'
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {

    //let updateLoginStatus = "Login";
    //const [ updateLoginStatus, setUpdateLoginStatus ] = useState("Login");

    const onlineStatus = useOnlineStatus();

    //const loggedInUserData = useContext(UserContext);

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
        <div className='flex justify-between bg-pink-100 sm:bg-yellow-100 lg:bg-green-100 shadow-lg md:w-auto w-fit md:m-2 m-0 md:text-base text-[10px]'>
            <div className="md:m-2 m-0">
                <Link to="/"><img className="md:w-20 w-[4rem]" alt="Logo Image" src={ LOGO_URL }></img></Link>
            </div>
            <div className='flex items-center'>
                <ul className="flex md:p-4 p-1 md:m-4 m-0">
                    <li className="md:px-4 px-2 md:block hidden">Online Status: <span style={ onlineStatus? greenTextColor: redTextColor }
                        className="font-bold">{ onlineStatus ? "ON" : "OFF" }</span></li>
                    <li className="md:px-4 px-2"><Link to="/">Home</Link></li>
                    <li className="md:px-4 px-2"><Link to="about">About Us</Link></li>
                    <li className="md:px-4 px-2"><Link to="contact"> Contact Us </Link></li>
                    <li className="md:px-4 px-2"><Link to="/grocery"> Grocery</Link></li>
                    <li className="md:px-4 px-2 font-bold"><Link to="/cart"> Cart - ({getCartItemsCount()} item)</Link></li>
                    
                    {/* <button className="login" name="Login" onClick={()=>{
                        setUpdateLoginStatus(updateLoginStatus == "Login" ? "Logout" : "Login");
                    }}>{ updateLoginStatus }</button>
                    <li className="px-4 font-bold">{loggedInUserData.loggedInUser} </li> */}
                </ul>
            </div>
        </div>
    )
}

export default Header;