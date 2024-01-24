import { CDN_URL } from "../utils/constant";

const RestrocardCard = (props) => {
    const { name, avgRatingString, cuisines, avgRating, waitingtime, cloudinaryImageId, sla } = props.resData.info;
    return(
        <div className='resto-card' style={{ backgroundColor : '#f0f0f0' }}>
            <img alt="resto-logo" 
                className='resto-logo'
                src={ CDN_URL + cloudinaryImageId }></img>
            <h3>{name}</h3>
            <h4>{cuisines.join(",")}</h4>
            <h4>{avgRating} Star</h4>
            <h4>{sla.slaString}</h4>
        </div>
    );
}

export default RestrocardCard;