import { useParams } from 'react-router-dom';
import { useState, useEffect  } from 'react';
import { useSelector } from 'react-redux';
import Shimmer from './Shimmer';
import useRestaurantMenu from '../utils/useRestaurantMenu';
import RestaurantCategory from './RestaurantCategory';
import { Link } from 'react-router-dom';

const Restaurantmenu = () => {

    const { resId } = useParams();
    const restaurantMenu = useRestaurantMenu(resId);
   
    const [ showIndex , setShowIndex ] = useState(0);
    const [ showOnlyVeg , setShowOnlyVeg ] = useState(false);
    const cartItems = useSelector((store)=> store.cart.items);

    if(!restaurantMenu) return <Shimmer/>;

    const restro = restaurantMenu?.cards.filter((c) => c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.Restaurant");
    const { name, costForTwoMessage, cuisines, avgRating, city, cloudinaryImageId } = restro[0]?.card?.card?.info;
    //const { itemCards } = restro[0].groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    //console.log(restaurantMenu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
   
    const categories = restaurantMenu?.cards[1]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (c) => 
            c.card?.card?.["@type"] === 
            "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        );

    const handleOnlyVegChange = () => {
        setShowOnlyVeg(!showOnlyVeg);
    }

    const getCartItemsCount = () => {
        let itemsData = [];
        cartItems.forEach(element => {
            if (!itemsData.some(item => item?.card?.info?.id === element?.card?.info?.id)) {
                itemsData.push(element);
            }
        });
        return ((itemsData.length == 1) ? itemsData.length + " Item" : itemsData.length + " Items");
    }

    const totalCartPrice = () => {
        return cartItems.reduce((total, item) => (
            total + (item.card.info.price ? item.card.info.price/100 : (item.card.info.defaultPrice/100))
        ), 0).toFixed();
    }

    return(
        <div className='text-center md:text-base text-[9px]'>
            <h1 className='font-bold my-6 md:text-2xl text-xs'>{name}</h1>
            <p className='md:text-lg text-[9px]'>
                {cuisines.join(", ")} - {costForTwoMessage}
            </p>
            <div className="md:w-6/12 w-10/12 mx-auto my-4 p-4 text-left">
                <label className="inline-block pl-[0.15rem] hover:cursor-pointer mr-2 font-bold" 
                    >Veg Only</label>
                <input
                    className={ (showOnlyVeg ? 'bg-green-700' : 'bg-neutral-300') + " " + "mr-2 mt-[0.3rem] h-3.5 w-8 appearance-none rounded-[0.4375rem] " +
                    "before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-neutral-100 after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)] after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-primary checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ml-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-primary checked:after:shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),_0_2px_2px_0_rgba(0,0,0,0.14),_0_1px_5px_0_rgba(0,0,0,0.12)] checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[3px_-1px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-primary checked:focus:bg-primary checked:focus:before:ml-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:bg-neutral-600 dark:after:bg-neutral-400 dark:checked:bg-primary dark:checked:after:bg-primary dark:focus:before:shadow-[3px_-1px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca]"}
                    type="checkbox"
                    role="switch"
                    onChange={handleOnlyVegChange}/>
                
                { (cartItems.length!=0) && 
                   <Link to="/cart">
                        <button className='bg-[#60b246] float-end text-white py-2 px-2 mx-2 md:w-64 w-40 font-bold rounded-lg'>
                            <span className='float-start'>{ getCartItemsCount() } | ₹{totalCartPrice()}</span>
                            <div className="float-end">
                                <span className="px-2">VIEW CART</span>
                                <img alt="" className="float-end" loading="lazy" width="20" 
                                    src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_28,h_28/ChatbotAssets/Checkout_Cart"/>
                            </div>
                        </button>
                    </Link> }
            </div>
            { categories && categories.map((category, index) => (
                <RestaurantCategory key={ category.card.card.title } data={ category?.card?.card } 
                    showItems={ index == showIndex ? true : false}
                    showOnlyVegs={showOnlyVeg}
                    setShowIndex={()=> (
                        setShowIndex(index == showIndex?null:index) 
                )}/>
            ))}
        </div>
    )
}

export default Restaurantmenu;