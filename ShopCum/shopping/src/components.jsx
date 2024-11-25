//item display>> image carousel, item name, price , info, [icon, add to list button]
//nav bar>> cart >> checkout button
import Protypes from 'prop-types';

const EachItem = ({item_name,price,info}) =>{
    return (
        <div>
            <h3>{item_name}</h3>
            <p>{price}</p>
            <p>{info}</p>
            <button type="button" onClick={onClick}>
                Add to list
            </button>
        </div>
    );
};

const Checkout = ({onClick}) =>{
    return(
        <button type="button" onClick={onClick}>Cart</button>
    );
};

export default {EachItem,Checkout}

EachItem.propTypes =
{
    item_name: Protypes.string.isRequired,
    price: Protypes.string.isRequired,
    info: Protypes.string,
    onClick : Protypes.func
};

Checkout.propTypes = {
    onClick: Protypes.func
}