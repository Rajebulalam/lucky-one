import CartProduct from '../CartProduct/CartProduct';
import './Cart.css';

const Cart = ({ cart, removeItem, removeCart, randomProduct, random }) => {
    return (
        <div className='cart-details'>
            <h2>Get Your Product</h2>
            <div className='cart-products'>
                {
                    cart.map(product => <CartProduct
                        product={product}
                        key={product.id}
                        removeItem={removeItem}
                    ></CartProduct>)
                }

                <button onClick={() => randomProduct(cart)} className='choose-btn' type='button'>CHOOSE 1 FOR ME</button>
                <p> {random.name} </p>
                <button onClick={removeCart} className='again-btn' type='button'>CHOOSE AGAIN</button>
            </div>
        </div>
    );
};

export default Cart;