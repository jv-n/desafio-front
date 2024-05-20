import { useNavigate} from "react-router-dom"
import { useCart } from "../context/cartContext"
import prods from "../data/items.json"
import { ItemInCart } from "../components/ProductCart";

export function Cart()
{
    const { totalQuantity, cartItems} = useCart();
    const navigate = useNavigate();
    const handleFinish = () => navigate('/finish');
    const handleHome = () => navigate('/')

    return(
        <div className="overall">
            <div className="productsincart">
                <div className="title">
                    {totalQuantity === 0 ? (
                    <><h1 className="textHeader" style={{fontFamily: 'Reddit Sans'}}>Your cart is empty</h1>
                    <button className="productbutton" onClick={handleHome}> Return Home </button></>
                    ) :
                    <h1 className="textHeader">Your current buy:</h1>              
                    }
                </div>
                {totalQuantity === 0? (null): 

                    <>
                        <div className="cartlist">
                        {cartItems.map(item =>
                            <ItemInCart key={item.id} {...item}/>
                        )}
                        </div>

                        <div className="productscard2">
                            <h1 style={{fontFamily: 'Reddit Sans', marginLeft: '350px'}}>Total: ${cartItems.reduce((totalQuantity, cartItem) => {
                                const item = prods.find(i => i.id === cartItem.id)
                                return totalQuantity + (item?.price || 0) * cartItem.quantity
                            },0)}</h1>
                            <button className="productbutton" style={{width:200}} onClick={handleFinish}>Finalizar Compra</button>
                        </div>
                    </>
                }
                
            </div>
        </div>
    )
}