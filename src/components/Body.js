import RestrocardCard from "./RestaurantCard";
import restaurants from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
    const [ lisOfRestro, setListOfRestro ] = useState([]);
    const [ FilteredRestro, setFilteredRestro ] = useState([]);
    const [ searchText, setSearchText ] = useState("");

    useEffect(() => {
        fetchData();
    },[]);

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.8761653&lng=75.3433139&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        console.log(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)
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
            <div className="filter">
                <div className="search">
                    <input type="text" className="search-box" value={ searchText } onChange={(e)=> {
                        setSearchText(e.target.value);
                    }}></input>
                    <button onClick={()=>{
                        setFilteredRestro(lisOfRestro.filter((data)=> {
                            return data.info.name.toLowerCase().includes(searchText.toLowerCase());
                        }))
                    }}>Serach</button>
                </div>
                <button onClick={()=> {
                        // Filter logic here
                        const FilteredListOfRestro = lisOfRestro.filter(
                            (restro)=> restro.info.avgRating > 4.3
                        )
                        setFilteredRestro(FilteredListOfRestro);
                    }}>Top Rated Restaurant</button>
            </div>
            <div className='resto-container'>
                { 
                    FilteredRestro.map(restro => (
                        <Link to={"/restaurant/"+ restro.info.id } key={restro.info.id}>
                            <RestrocardCard  resData={restro} />
                        </Link>
                    ))
                }
            </div>
        </div>
    );
};

export default Body;