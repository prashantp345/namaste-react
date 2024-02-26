import { useState } from "react";
import ItemList from "./ItemList";
const RestaurantCategory = ({ data, showItems, setShowIndex, showOnlyVegs }) => {
    
    const handleClick = () => {
        setShowIndex();
    }

    const filterVegItems = () => {
        return data?.itemCards?.filter((item)=> item.card.info.isVeg ===1);
    }

    console.log("Data Items",data?.itemCards[0].card?.info?.isVeg);

    return(
        <div>
            {/* Header */}
            <div className="md:w-6/12 w-10/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 md:text-base text-[9px]">
                <div className=" flex justify-between cursor-pointer" onClick={handleClick}>
                    <span className="font-bold md:text-lg text-[10px] ">
                        {data.title} ({data?.itemCards?.length})
                    </span>
                    { showItems ? <span className="text-xl">&#11162; </span> : <span className="text-xl">&#11163; </span> }
                </div>
                 {/* Accodion Body */}
                { showItems && <ItemList items={ showOnlyVegs ? filterVegItems() : data?.itemCards } 
                    showOnlyVeg={showOnlyVegs} /> }
            </div>
        </div>
    )
}

export default RestaurantCategory;