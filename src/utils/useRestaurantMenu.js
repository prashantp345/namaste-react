import { useState, useEffect } from "react";
import { RESTRO_MENU_URL } from "../utils/constant";

const useRestaurantMenu = (resId) => {

    const [ restaurantMenu, setRestaurantMenu ] = useState(null);
  
    useEffect(()=> {
        fetchRestaurantMenu();
    }, [])

    const fetchRestaurantMenu = async () => {
        const restroMenuData = await fetch(RESTRO_MENU_URL+resId);
        const json = await restroMenuData.json();
        setRestaurantMenu(json?.data); //Optional Chaning
    }

    return restaurantMenu;
}

export default useRestaurantMenu;