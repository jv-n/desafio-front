import { useNavigate } from "react-router-dom"
import prods from "../data/items.json"
import { useCart } from "../context/cartContext"; 

export function Finished()
{
    const navigate = useNavigate();
    const handleClick = () => navigate('/');
    const handleNo = () => navigate('/cart');
    const { removeAll, totalQuantity, cartItems} = useCart();

   return(

    <div className="intro" style={{paddingBottom: 0}}>
        
            <div className="title">
                
               {totalQuantity !== 0 ?(
                    <div style={{gap: '5px'}}><h1 className="textHeader" style = {{fontFamily: 'Reddit Sans'}}> Do you wish to proceed with your ${cartItems.reduce((totalQuantity, cartItem) => {
                        const item = prods.find(i => i.id === cartItem.id)
                        return totalQuantity + (item?.price || 0) * cartItem.quantity
                    },0)} buy? </h1>
                    <button className="productbutton" style={{marginRight: '10px'}} onClick={()=> removeAll()}> Yes </button>
                    <button className="removebutton" style={{marginLeft: '10px'}} onClick={handleNo}> No </button></div>
                ):
                <><h1 className="textHeader"> Thank you for the purchase. Enjoy! </h1>
                <h2 style={{fontFamily: 'Reddit Sans', margin: '20px'}}> Blessed be King Robert, First of His Name</h2>
                <button className="productbutton" onClick={handleClick}> Return Home </button>
                </>} 
                
            </div>   
    </div>
   )
}