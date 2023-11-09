import { useState } from "react";
import data from "../components/shop/data";
import { createContext } from "react";

export const ShopContext = createContext(null);


const ShopState = ({children}) =>{

const initialValue = () =>{
    let cart = {};
    for (let i = 1; i < data.length + 1; i++){
        cart[i] = 0;
    }
    return cart;   
}


const [cartProducts, setCartProducts] = useState(initialValue());


const addToCart = (itemId) =>{    
  setCartProducts((prev) => ({...prev, [itemId]: prev[itemId]+ 1 }))
}

const removeItemFromCart = (itemId) =>{
    setCartProducts((prev) => ({...prev, [itemId]: prev[itemId]- 1 }))
}

const totalPrice = () =>{
let totalAmount = 0;
 for (const item in cartProducts){
    if(cartProducts[item] > 0){
        let productInfo = data.find((product) => product.id === Number(item));
        totalAmount +=cartProducts[item] * productInfo.price; 
    }
 
 }
 return totalAmount;
}

const counter = () =>{   
    let postiveCount = 0;
    for(let i = 1; i < 7; i++){
        let positiveNum = cartProducts[i];
        postiveCount +=positiveNum;
        i++;
    }
    return postiveCount;
        
}

const negativeValue = () =>{   
    let negativeCount = 0;
    for(let i = 2; i < 7; i++){
        
        let negativeNum = cartProducts[i];
        negativeCount +=negativeNum;
        i++;        
    }
    return negativeCount;
}


return(
    <div>
        <ShopContext.Provider value={{
           cartProducts,
           addToCart,
           removeItemFromCart,
           totalPrice,
           negativeValue,
           counter,
           
        }}> 
        {children}
        </ShopContext.Provider>

    </div>
)
}


export default ShopState;

