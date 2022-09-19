import React, {useEffect, useContext} from "react";
import {API_KEY, API_URL} from "../config";
import Preloader from "./Preloader";
import GoodsList from "./GoodsList";
import Cart from "./Cart";
import BasketList from "./BasketList";
import Alert from "./Alert";
import {ShopContext} from "../context";


const Shop = () => {
    const {setGoods, loading, order, isBasketShow, alertName} = useContext(ShopContext)


    useEffect(function getGoods() {
        fetch(API_URL, {
            headers: {
                'Authorization': API_KEY,
            }
        }).then(response => response.json()).then(data => {
            setGoods(data.featured)
        }).catch((err)=> {
            console.log(err)
        })
            // eslint-disable-next-line
    }, []);

    return (
        <main className='container content'>
            <Cart count={order.length}/>
            {loading ? <Preloader/> : <GoodsList />}
            {isBasketShow && <BasketList/>
            }
            {alertName && <Alert/>}
        </main>
    )
}

export default Shop;