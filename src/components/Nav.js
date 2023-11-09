import {Link} from 'react-router-dom'
import { ShoppingCart } from "phosphor-react";
import './Nav.css'
import { useContext } from 'react';
import { ShopContext } from '../context/ShopState';



const Nav = () =>{

const {cartProducts, negativeValue, counter, totalPrice } = useContext(ShopContext)




console.log(cartProducts)

    return(         
            

        <nav className='navbar'>
            <Link className='text' to ="/">Store</Link>
            <Link to="/cart"><ShoppingCart size={40} style={{color: 'red'}}  />  
            <span className='shoppingCart'> {counter()+ negativeValue()} items </span>  
            <span className='shoppingCart' >Total Value: N{totalPrice().toFixed(0)}</span>
             </Link>
        </nav>
      
    );
}

export default Nav;