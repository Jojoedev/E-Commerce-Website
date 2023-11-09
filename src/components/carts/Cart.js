import data from '../shop/data';
import CartItem from "./CartItem";
import './CartItem.css'
import { useContext } from 'react';
import { ShopContext } from '../../context/ShopState';


const Cart = () =>{
   
    const {cartProducts, totalPrice} = useContext(ShopContext)
    const totalShoppingValue = totalPrice(); 
    return (
        <div className="cart">
            
            {data.map((product) =>{
               if(cartProducts[product.id] > 0){   
                return  <CartItem product = {product}  />
               }    
                                          
        })}

        <p className='subTotal'> Total Amount: N{totalShoppingValue.toFixed(0)}</p>
        
        </div>
    );
}

export default Cart;