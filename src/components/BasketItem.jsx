import {useContext} from "react";
import {ShopContext} from "../context";

const BasketItem = (props) => {
    const {
        id,
        name,
        price,
        count,
    } = props;

    const {removeFromBasket, addCount, removeCount} = useContext(ShopContext);

    return (
        <li className="collection-item">
            {name}
            <i className="basket-count material-icons blue darken-1 white-text btn-add" onClick={() => removeCount(id)}>remove</i>
            x{count}
            <i className="basket-count material-icons blue darken-1 white-text btn-add" onClick={() => addCount(id)}>add</i>
            = {price * count} руб.
            <span className="secondary-content" onClick={() => removeFromBasket(id)}>
              <i className="material-icons blue darken-1 white-text basket-delete">close</i>
            </span>
        </li>

    )
}

export default BasketItem;