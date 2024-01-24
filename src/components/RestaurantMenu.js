import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { CDN_URL, RESTRO_MENU_URL } from "../utils/constant";
import Shimmer from './Shimmer';
import useRestaurantMenu from '../utils/useRestaurantMenu';

const Restaurantmenu = () => {

    const { resId } = useParams();

    const restaurantMenu = useRestaurantMenu(resId);

    if(!restaurantMenu) return <Shimmer/>;

    const { name, costForTwoMessage, cuisines, avgRating, city, cloudinaryImageId } = restaurantMenu?.cards[0]?.card?.card?.info;
    const { itemCards } = restaurantMenu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    console.log(itemCards)
    return(
        <div>
            <img alt="Restaurant Image" src={ CDN_URL + cloudinaryImageId }></img>
            <h1>{name}</h1>
            <h2>{costForTwoMessage}</h2>
            <h2>{cuisines.join(",")}</h2>
            <h3> { avgRating} </h3>
            <h2>{city}</h2>
            <div>
                <h2>Menu</h2>
                { itemCards.map((res)=> {
                    return <li> {res.card.info?.name} - { (res.card.info?.price ? res.card.info?.price: res.card.info.defaultPrice) /100 } Rs.</li>
                })}
            </div>
        </div>
    )
}

export default Restaurantmenu;