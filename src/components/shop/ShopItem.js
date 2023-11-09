
import { ShopContext } from "../../context/ShopState";
import { useContext } from "react";


const ShopItem = ({ product }) =>{
   
const {addToCart, cartProducts, removeItemFromCart} = useContext(ShopContext)
const productCounter = cartProducts[product.id]


    return(
        <div className="itemList">
        
          <img src={product.image} alt="image" className="items" />
                <div className="description">
                    {product.name}
                    <span>
                    </span>
                    <div> N
                    {product.price}
                    </div>
                </div>
                <button className="addBtn" onClick={() => addToCart(product.id)}>Add to cart {productCounter > 0 && <>({productCounter})</>} </button>
                <span></span>
                <button className="removeBtn" onClick={() => removeItemFromCart(product.id)}>Remove from cart</button>
                
        </div>
    );
}

export default ShopItem;