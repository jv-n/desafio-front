import { useNavigate } from "react-router-dom";
import { useCart } from "../context/cartContext";

export function Cabecalho()
{
    const { totalQuantity } = useCart()
    const navigate = useNavigate();
    const handleClick = () => navigate('/');
    const handleClicktoCart = () => navigate('/cart');

    return(
        <div>
            <header className='head'>
                <button title='Go to Home' className='imgicon' style={{alignSelf:'start', border:0}} onClick={handleClick}>
                   <img className='imgicon' src='./baratheon-stag.png' alt='Sigil of the royal House Baratheon'></img>
                </button>
                <div style={{flexDirection: 'column'}}>
                    <h1 style = {{fontSize: 24}}> The Inn at the Crossroads </h1>
                    <h2 style = {{fontSize: 16}}>Serving the Kingsroad since 62 AC</h2>
                </div>
    
                <button className="botao" onClick={handleClicktoCart}>
                    {totalQuantity} in Cart
                </button>
            
            </header>
        </div>
       )
}