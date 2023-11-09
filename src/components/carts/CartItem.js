import { useContext } from "react";
import { ShopContext } from "../../context/ShopState";
import Nav from "../Nav";


const CartItem = ({product}) =>{
    
const {addToCart, removeItemFromCart, cartProducts} = useContext(ShopContext)   
   
    return(
        <div className="cartItem"> 
          
          <img src= {product.image} />
           <div>
            <b>{product.name}</b>
           </div>
           <b> N{product.price} </b>
            <div>
                <button onClick={() => addToCart(product.id)}>+</button> 
           
                <input  className="inputData" value={cartProducts[product.id]}  />
            
                <input  type="button" onClick={() => removeItemFromCart(product.id)}   value = "-"/>
            </div>
        </div>

    );
}

export default CartItem