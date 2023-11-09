import data from './data'
import ShopItem from './ShopItem';
import './ShopItems.css'
import Nav from '../Nav';



const Shop = () =>{
    return (
        <div className="shopitems">
            
            {data.map((product) =>(
                
                <ShopItem  key = {product.id} product={product} />
                
           ))}
            
        </div>
        
    );
}

export default Shop;