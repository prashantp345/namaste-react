import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../utils/cartSlice";
import { CDN_URL } from "../utils/constant";
import IconVeg from "../assets/image/icon-veg.png"
import IconNonVeg from "../assets/image/icon-non-veg.png"

const ItemList = ({ items }) => {

    const dispatch = useDispatch();

    const cartItems = useSelector((store)=> store.cart.items);
    console.log("cartItems", cartItems);

    const handleAddClick = (item)=> {
        dispatch(addItem(item));
    }

    const handleDeleteClick = (item)=> {
        dispatch(removeItem(item));
    }

    const addItemToCart = (item) => {
        //Dispatch the action --- object { payload: "Pizza"  }
        dispatch(addItem(item))
    }

    const itemList = (id) => {
        const items = cartItems.filter((element)=> (element.card.info.id === id));
        return items ? items.length : 0;
    }

    console.log("items", cartItems);  
    return(
        <div>
            {items.map((item) => (
                <div 
                    key={item.card.info.id} 
                    className="p-2 m-2 border border-gray-200 border-b-2 text-left flex justify-between">
                        {/* <div aria-hidden="true"><i class="styles_icon__m6Ujp styles_itemIcon__1LXTw icon-Veg styles_iconVeg__shLxJ" role="presentation" aria-hidden="true" style="line-height: 1.2;"></i></div> */}
                    <div className="px-2">
                        <div className="py-2 font-bold">
                            <img src={(item?.card.info.isVeg===1) ? IconVeg : IconNonVeg} className="w-6"></img>
                            <span>{item.card.info.name}</span>
                            <span className="font-bold"><nobr>- ₹ { item.card.info.price ? item.card.info.price/100 : (item.card.info.defaultPrice/100) }</nobr></span>
                        </div>
                        <p className="text-xs">{ item.card.info.description }</p>
                    </div>
                    <div className="w-3/12 p-2 justify-between">
                        <div className="absolute bg-white md:mt-[4.5rem] mt-[3rem] md:ml-[2rem] ml-[0rem]">
                            { cartItems.find((element) => element.card.info.id === item.card.info.id) ? 
                                (<div className="pl-['2px'] pr-['2px'] md:p-2 p-[0.2rem] border border-gray-400 bg-gray-200 shadow-xl m-auto font-bold rounded-sm hover:shadow-2xl"
                                    > 
                                    <span className="font-bold p-1 m-1 cursor-pointer" onClick={() => handleDeleteClick(item)}> - </span> 
                                    <span>{itemList(item.card.info.id)}</span>
                                    <span className="font-bold p-1 m-1 cursor-pointer" onClick={() => handleAddClick(item)}> + </span></div>) : 
                                (<button className="md:px-[23px] px-[10px] py-2 border border-gray-400 bg-gray-200 shadow-xl m-auto font-bold rounded-sm hover:shadow-2xl"
                                    onClick={()=> addItemToCart(item)}>ADD
                                </button>)
                             }
                        </div>
                        <div className="md:w-36 w-12">
                            <img src={item?.card?.info?.imageId && CDN_URL+item?.card?.info?.imageId} alt="No Picture" 
                                width="144" className={item?.card?.info?.imageId?"md:h-24 h-16":"md:h-24 h-16 mt-8"}></img>
                        </div>
                    </div>
                </div> 
            ))}
        </div>
    )
}

export default ItemList;