import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('product.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    const [cart, setCart] = useState([]);
    const cartBtnHandler = (product) => {
        let newCart = [];
        const exists = cart.find(products => products.id === product.id)
        if (!exists) {
            newCart = [...cart, product];
            if (newCart.length <= 4) {
                setCart(newCart);
            } else {
                alert("Sorry!! You couldn't add more product!!");
            }
        } else {
            alert("Sorry You can't add same product!!")
        }
    }

    const [random, setRandom] = useState([]);
    const randomChoice = (cart) => {
        var foodItems = [...cart];
        var theFood = foodItems[Math.floor(Math.random() * foodItems.length)];
        setRandom(theFood);
    }

    const removeSingleItem = (id) => {
        const removeItem = cart.filter(item => item.id !== id);
        setCart(removeItem);
    }

    const removeCart = () => {
        setCart([]);
        setRandom([]);
    }

    return (
        <div className='shop-container'>
            <div className='products-container'>
                {
                    products.map(product => <Product
                        product={product}
                        key={product.id}
                        handler={cartBtnHandler}
                    ></Product>)
                }
            </div>
            <div className='cart-container'>
                <Cart
                    cart={cart}
                    removeItem={removeSingleItem}
                    removeCart={removeCart}
                    randomProduct={randomChoice}
                    random={random}
                ></Cart>
            </div>
        </div>
    );
};

export default Shop;