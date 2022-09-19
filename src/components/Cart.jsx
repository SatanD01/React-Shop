import {useContext} from "react";
import {ShopContext} from "../context";

const Cart = () => {
    const {order, handleBasketShow = Function.prototype} = useContext(ShopContext);
    const count = order.length;

    return (
        <div className="cart blue darken-1 white-text" onClick={handleBasketShow}>
            <i className="material-icons">shopping_cart</i>
            {count ? <span className="card-count">{count}</span> : null}
        </div>
    )
}

export default Cart;