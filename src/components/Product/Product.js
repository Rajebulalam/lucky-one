import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css';

const Product = ({ product, handler}) => {
    const { picture, name, price } = product;
    return (
        <div className='product-container'>
            <img src={picture} alt="product-img" />
            <div className='product-details'>
                <h2> {name} </h2>
                <h6> Price : ${price} </h6>
            </div>
            <button onClick={() => handler(product)} className='btn-cart' type='button'>
                <p>Add to cart</p>
                <FontAwesomeIcon icon = {faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;