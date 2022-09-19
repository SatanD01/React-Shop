import {ShopContext} from "../context";
import {useContext} from "react";

const GoodsItem = (props) => {
    const {
        id,
        name,
        description,
        price,
        full_background,
    } = props;

    const {addToBasket} = useContext(ShopContext)

    return (
        <div className="card">
            <div className="card-image">
                <img src={full_background} alt={name} onError={({ currentTarget }) => {
                    currentTarget.src=`https://via.placeholder.com/584x584?text=${name}`;
                }}/>
            </div>
            <div className="card-content">
                <span className="card-title">{name}</span>
                <p>
                    {description}
                </p>
            </div>
            <div className="card-action">
                <button className='btn blue darken-1 white-text' onClick={() => addToBasket({
                    id, name, price
                })}>Купить</button>
                <span className='right' style={{fontSize: '1.4rem'}}>{price} руб. </span>
            </div>
        </div>
    )
}

export default GoodsItem;