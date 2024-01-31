import { useDispatch, useSelector } from "react-redux";
import ItemList from "./itemList";
import { clearCart } from "../utils/cartSlice";

const cart = () => {

    const dispatch = useDispatch();
    const cartItems = useSelector((store)=> store.cart.items);

    const filterCartData = () => {
        let itemsData = [];
        cartItems.forEach(element => {
            if (!itemsData.some(item => item?.card?.info?.id === element?.card?.info?.id)) {
                itemsData.push(element);
            }
        });
        return itemsData;
    }

    const getCartItemsCount = () => {
        let itemsData = [];
        cartItems.forEach(element => {
            if (!itemsData.some(item => item?.card?.info?.id === element?.card?.info?.id)) {
                itemsData.push(element);
            }
        });
        return itemsData.length;
    }

    const totalCartPrice = () => {
        return cartItems.reduce((total, item) => (
            total + (item.card.info.price ? item.card.info.price/100 : (item.card.info.defaultPrice/100))
        ), 0).toFixed();
    }
   
    return (
        <div className="text-center m-10 p-10">
            <h1 className="text-2xl font-bold">Cart</h1>
            <div className="w-6/12 m-auto">
                { cartItems.length === 0 ? <h1 className="p-2 m-2 text-xl">Your cart is empty. Add items to the cart!</h1>
                    : <button className="p-2 m-2 bg-black text-white rounded-lg" 
                        onClick={() => dispatch(clearCart()) }>Clear Cart</button>}    
                <ItemList items={filterCartData()} />
            </div>
            { cartItems.length !== 0 &&
                <div className="font-bold p-2 m-4 text-xl">
                    <hr className="w-6/12 m-auto"></hr>
                    <h2 className="m-3">Bill Details - {getCartItemsCount()} Items | Total ₹ {totalCartPrice()} </h2>
                </div>
            }
        </div>
    )
}

export default cart;