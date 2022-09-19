import BasketItem from "./BasketItem";
import {useContext} from "react";
import {ShopContext} from "../context";

const BasketList = () => {
    const {
        order = [],
        handleBasketShow = Function.prototype,
    } = useContext(ShopContext);

    const totalPrice = order.reduce((sum, el) => {
        return sum + el.price * el.count
    }, 0)

    return (
        <ul className="collection basket-list">
            <li className="collection-item blue darken-1 white-text active">Корзина</li>
            {
                order.length ? order.map(item => (
                    <BasketItem key={item.id} {...item}/>
                )) : <li className="collection-item">Пусто</li>
            }
            <li className="collection-item blue darken-1 white-text active">Итог: {totalPrice} руб.</li>
            <li className="collection-item white-text">
                <button className="btn btn-small blue darken-1">
                    Оформить
                </button>
            </li>
            <i className="material-icons basket-close" onClick={handleBasketShow}>close</i>
        </ul>
    )
}

export default BasketList;