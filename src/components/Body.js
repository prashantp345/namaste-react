import RestrocardCard, { withPromotedLabel } from "./RestaurantCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { restaurantListObj } from "../utils/data/restaurantList";

const Body = () => {
    const [ lisOfRestro, setListOfRestro ] = useState([]);
    const [ FilteredRestro, setFilteredRestro ] = useState([]);
    const [ searchText, setSearchText ] = useState("");

    const RestaurantCardPromoted = withPromotedLabel(RestrocardCard);

    const { loggedInUser, setUserName } = useContext(UserContext);
    //console.log(lisOfRestro);

    useEffect(() => {
        fetchData();
    },[]);

    const fetchData = async () => {
        const json = restaurantListObj;
        //console.log(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)
        //Optional Chaining data?.card.?...
        setListOfRestro(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestro(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    const onlineStatus = useOnlineStatus();
    if(onlineStatus === false) { 
        return <h1>Check you internet status</h1> 
    }
    
    return (lisOfRestro.length === 0) ? <Shimmer/> : (
        <div className='body'>
            <div className="flex justify-between md:text-base text-[9px]">
                <div className="md:mx-4 my-4 mx-2 md:p-4 p-2">
                    <input type="text" className="border border-solid border-black" value={ searchText } 
                        placeholder="Search restaurants and food" onChange={(e)=> {
                        setSearchText(e.target.value);
                    }}></input>
                    <button className="px-4 py-2 bg-green-100 md:my-4 my-2 rounded-lg font-bold" onClick={()=>{
                        setFilteredRestro(lisOfRestro.filter((data)=> {
                            return data.info.name.toLowerCase().includes(searchText.toLowerCase());
                        }))
                    }}>Serach</button>
                </div>
                <div>
                    <div className="md:m-4 m-2 md:p-4 p-2 flex items-center">
                        <button className="md:px-4 px-2 py-2 bg-gray-100 rounded-lg font-bold" onClick={()=> {
                            // Filter logic here
                            const FilteredListOfRestro = lisOfRestro.filter(
                                (restro)=> restro.info.avgRating > 4.3
                            )
                            setFilteredRestro(FilteredListOfRestro);
                        }}>Top Rated Restaurant</button>

                        <button className="md:px-4 px-2 py-2 bg-gray-100 rounded-lg font-bold md:m-4 m-1" onClick={()=> {
                            setFilteredRestro(lisOfRestro);
                        }}>Clear Filter</button>
                    </div>
                </div>
                
                {/* <div className="m-4 p-4 flex items-center">
                    <label className="pl-2">User Name:</label>
                    <input className="border border-black p-2" 
                        value={loggedInUser} onChange={(e) => setUserName(e.target.value)} />
                </div> */}
            </div>
            <div className='flex flex-wrap w-fit'>
                { 
                    FilteredRestro.map(restro => (
                        <Link to={"/restaurant/"+ restro.info.id } key={restro.info.id}>
                            { (restro.info.avgRating>4.2) ? (<RestaurantCardPromoted resData={restro} />) : (<RestrocardCard resData={restro} /> )}
                        </Link>
                    ))
                }
            </div>
        </div>
    );
};

export default Body;