import { faRemove } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './CartProduct.css';

const CartProduct = ({ product, removeItem }) => {
    const { picture, name, id } = product;
    return (
        <div className='cart-product'>
            <div>
                <img src={picture} alt="product-img" />
                <h2> {name} </h2>
            </div>
            <div>
                <button onClick={() => removeItem(id)} className='remove-btn' type='button'>
                    <FontAwesomeIcon icon={faRemove}></FontAwesomeIcon>
                </button>
            </div>
        </div>
    );
};

export default CartProduct;