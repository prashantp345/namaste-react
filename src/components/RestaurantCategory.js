import { useState } from "react";
import ItemList from "./ItemList";
const RestaurantCategory = ({ data, showItems, setShowIndex, showOnlyVegs }) => {
    
    const handleClick = () => {
        setShowIndex();
    }

    filterVegItems = () => {
        return data?.itemCards?.filter((item)=> item.card.info.isVeg ===1);
    }

    console.log("Data Items",data?.itemCards[0].card?.info?.isVeg);

    return(
        <div>
            {/* Header */}
            <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
                <div className=" flex justify-between" onClick={handleClick}>
                    <span className="font-bold text-lg">
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