import { CDN_URL } from "../utils/constant";

const RestrocardCard = (props) => {
    const { name, cuisines, avgRating, cloudinaryImageId, sla } = props.resData.info;
    return(
        <div className='m-4 md:p-4 p-1 md:w-[230px] w-[90px] rounded-lg bg-gray-100 hover:bg-gray-300 text-sx md:text-base' >
            <div>
                <img alt="resto-logo" className="rounded-lg md:h-40 h-20 w-[-webkit-fill-available]"
                src={ CDN_URL + cloudinaryImageId }></img>
            </div>
            <h3 className="font-bold py-4 md:text-lg text-[10px] text-ellipsis whitespace-nowrap overflow-hidden">{name}</h3>
            <h4 className="break-words text-ellipsis whitespace-nowrap overflow-hidden md:text-base text-[9px]"
                >{ cuisines.join(", ") }</h4>
            <div className="flex justify-between md:text-base text-[9px]">
                <h4 className="py-2">⭐ {avgRating} </h4>
                <h4 className="py-2"> • {sla.slaString}</h4>
            </div>
        </div>
    );
}

// Higher Order Component
// Its take input -> restaurantCar => RestaurantCardPromoted

export const withPromotedLabel = (RestrocardCard) => {
    return (props) => {
        return(
            <div>
                <label className="absolute m-1 p-1 rounded-lg bg-black text-white md:text-base text-[9px]">Promoted</label>
                <RestrocardCard {...props }></RestrocardCard>
            </div>
        )
    }
}

export default RestrocardCard;