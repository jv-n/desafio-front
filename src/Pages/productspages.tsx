import { useCart } from "../context/cartContext";
import { useNavigate } from "react-router-dom";

type idtd = {
    id: number 
}

export function PageProdVen({ id }: idtd)
{
    const { getQuantity, increaseQuantity, removeItem } = useCart();
    const quantity = getQuantity(id);
    const navigate = useNavigate();
    const handleClick = () => navigate('/');
    return(
        <div className="about">
            <div className='aboutdivimg'>
                <img src="./assets/baratheon-venison.jpeg" alt="venison-picture"></img>
            </div>
            <div className="abouttitle">
                <h1 style={{fontFamily: 'Reddit Sans', fontWeight: 'bold', fontSize: '48px', marginRight: '10px'}}>Baratheon Venison</h1>
            </div>

            <div className="aboutdesc">
              
              <div style={{gridColumnStart: 2, fontFamily: 'Reddit Sans', fontSize:'20px', marginTop: '40px'}}>
                A MEAL FIT FOR A KING.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In egestas sem nec nisl mattis, eu consequat justo semper. 
                Vestibulum arcu turpis, lobortis sed felis faucibus, sagittis sollicitudin metus. 
                Nam a lacus bibendum, iaculis ante vel, pretium nisl. 
                Phasellus convallis quam quis dui scelerisque, et venenatis urna eleifend. Etiam at sagittis elit.
              </div>

                <h2 style={{margin: '20px', fontFamily: 'Reddit Sans'}}>Order yours now</h2>

              <div style={{marginTop: '30px'}}>
              {quantity === 0 ? (
                <button className="productbutton" onClick={() => increaseQuantity(id)}>Add to cart</button>
                 ) :
                <button style={{width:'125px'}} className="removebutton" onClick={() => removeItem(id)}>Remove from Cart</button>            
                }
                <button style={{fontStyle: 'bold', marginLeft: '25px', height:'25px'}} className="productbutton" onClick={handleClick}> Return Home </button>
              </div>
            
            </div>    
                
                

                

        </div>
    )
}

export function PageProdWin({ id }:idtd){

    const { getQuantity, increaseQuantity, removeItem } = useCart();
    const quantity = getQuantity(id);
    const navigate = useNavigate();
    const handleClick = () => navigate('/');
    return(
        <div className="about">
            <div className='aboutdivimg'>
                <img src="./assets/winterfell2.jpg" alt="ice cream picture"></img>
            </div>
            <div className="abouttitle">
                <h1 style={{fontFamily: 'Reddit Sans', fontWeight: 'bold', fontSize: '48px', marginRight: '10px'}}>Winterfell style Icicle</h1>
            </div>

            <div className="aboutdesc">
              
              <div style={{gridColumnStart: 2, fontFamily: 'Reddit Sans', fontSize:'20px', marginTop: '40px'}}>
                FEEL THE COLD OF THE COMING WINTER.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In egestas sem nec nisl mattis, eu consequat justo semper. 
                Vestibulum arcu turpis, lobortis sed felis faucibus, sagittis sollicitudin metus. 
                Nam a lacus bibendum, iaculis ante vel, pretium nisl. 
                Phasellus convallis quam quis dui scelerisque, et venenatis urna eleifend. Etiam at sagittis elit.
              </div>

                <h2 style={{margin: '20px', fontFamily: 'Reddit Sans'}}>Order yours now</h2>

              <div style={{marginTop: '30px'}}>
              {quantity === 0 ? (
                <button className="productbutton" onClick={() => increaseQuantity(id)}>Add to cart</button>
                 ) :
                <button style={{width:'125px'}} className="removebutton" onClick={() => removeItem(id)}>Remove from Cart</button>            
                }
                <button style={{fontStyle: 'bold', marginLeft: '25px', height:'25px'}} className="productbutton" onClick={handleClick}> Return Home </button>
              </div>
            
            </div>    
                
                

                

        </div>
    )
}

export function PageProdFlan({ id }:idtd){

    const { getQuantity, increaseQuantity, removeItem } = useCart();
    const quantity = getQuantity(id);
    const navigate = useNavigate();
    const handleClick = () => navigate('/');
    return(
        <div className="about">
            <div className='aboutdivimg'>
                <img src="./assets/golden-flan.jpeg" alt="flan picture"></img>
            </div>
            <div className="abouttitle">
                <h1 style={{fontFamily: 'Reddit Sans', fontWeight: 'bold', fontSize: '48px', marginRight: '10px'}}>Lord Tywin's Flan</h1>
            </div>

            <div className="aboutdesc">
              
              <div style={{gridColumnStart: 2, fontFamily: 'Reddit Sans', fontSize:'20px', marginTop: '40px'}}>
                TASTE LANNISTER GOLD.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In egestas sem nec nisl mattis, eu consequat justo semper. 
                Vestibulum arcu turpis, lobortis sed felis faucibus, sagittis sollicitudin metus. 
                Nam a lacus bibendum, iaculis ante vel, pretium nisl. 
                Phasellus convallis quam quis dui scelerisque, et venenatis urna eleifend. Etiam at sagittis elit.
              </div>

                <h2 style={{margin: '20px', fontFamily: 'Reddit Sans'}}>Order yours now</h2>

              <div style={{marginTop: '30px'}}>
              {quantity === 0 ? (
                <button className="productbutton" onClick={() => increaseQuantity(id)}>Add to cart</button>
                 ) :
                <button style={{width:'125px'}} className="removebutton" onClick={() => removeItem(id)}>Remove from Cart</button>            
                }
                <button style={{fontStyle: 'bold', marginLeft: '25px', height:'25px'}} className="productbutton" onClick={handleClick}> Return Home </button>
              </div>
            
            </div>    
                
                

                

        </div>
    )

}

export function PageProdTully({id}:idtd){

    const { getQuantity, increaseQuantity, removeItem } = useCart();
    const quantity = getQuantity(id);
    const navigate = useNavigate();
    const handleClick = () => navigate('/');
    return(
        <div className="about">
            <div className='aboutdivimg'>
                <img src="./assets/tully-fish.jpg" alt="fish and chips"></img>
            </div>
            <div className="abouttitle">
                <h1 style={{fontFamily: 'Reddit Sans', fontWeight: 'bold', fontSize: '48px', marginRight: '10px'}}>Tully Trout</h1>
            </div>

            <div className="aboutdesc">
              
              <div style={{gridColumnStart: 2, fontFamily: 'Reddit Sans', fontSize:'20px', marginTop: '40px'}}>
                THE TRADITIONAL RIVERLANDER WAY
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In egestas sem nec nisl mattis, eu consequat justo semper. 
                Vestibulum arcu turpis, lobortis sed felis faucibus, sagittis sollicitudin metus. 
                Nam a lacus bibendum, iaculis ante vel, pretium nisl. 
                Phasellus convallis quam quis dui scelerisque, et venenatis urna eleifend. Etiam at sagittis elit.
              </div>

                <h2 style={{margin: '20px', fontFamily: 'Reddit Sans'}}>Order yours now</h2>

              <div style={{marginTop: '30px'}}>
              {quantity === 0 ? (
                <button className="productbutton" onClick={() => increaseQuantity(id)}>Add to cart</button>
                 ) :
                <button style={{width:'125px'}} className="removebutton" onClick={() => removeItem(id)}>Remove from Cart</button>            
                }
                <button style={{fontStyle: 'bold', marginLeft: '25px', height:'25px'}} className="productbutton" onClick={handleClick}> Return Home </button>
              </div>
            
            </div>    
                
                

                

        </div>
    )
}

export function PageProdQueen({id}:idtd)
{
    const { getQuantity, increaseQuantity, removeItem } = useCart();
    const quantity = getQuantity(id);
    const navigate = useNavigate();
    const handleClick = () => navigate('/');
    return(
        <div className="about">
            <div className='aboutdivimg'>
                <img src="./assets/pot-pie.jpg" alt="pot pie"></img>
            </div>
            <div className="abouttitle">
                <h1 style={{fontFamily: 'Reddit Sans', fontWeight: 'bold', fontSize: '48px', marginRight: '10px'}}>The Queen Pie</h1>
            </div>

            <div className="aboutdesc">
              
              <div style={{gridColumnStart: 2, fontFamily: 'Reddit Sans', fontSize:'20px', marginTop: '40px'}}>
                QUEEN CERSEI'S FAVORITE.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In egestas sem nec nisl mattis, eu consequat justo semper. 
                Vestibulum arcu turpis, lobortis sed felis faucibus, sagittis sollicitudin metus. 
                Nam a lacus bibendum, iaculis ante vel, pretium nisl. 
                Phasellus convallis quam quis dui scelerisque, et venenatis urna eleifend. Etiam at sagittis elit.
              </div>

                <h2 style={{margin: '20px', fontFamily: 'Reddit Sans'}}>Order yours now</h2>

              <div style={{marginTop: '30px'}}>
              {quantity === 0 ? (
                <button className="productbutton" onClick={() => increaseQuantity(id)}>Add to cart</button>
                 ) :
                <button style={{width:'125px'}} className="removebutton" onClick={() => removeItem(id)}>Remove from Cart</button>            
                }
                <button style={{fontStyle: 'bold', marginLeft: '25px', height:'25px'}} className="productbutton" onClick={handleClick}> Return Home </button>
              </div>
            
            </div>    
                
                

                

        </div>
    )
}

export function PageProdArbor({id}:idtd)
{
    const { getQuantity, increaseQuantity, removeItem } = useCart();
    const quantity = getQuantity(id);
    const navigate = useNavigate();
    const handleClick = () => navigate('/');
    return(
        <div className="about">
            <div className='aboutdivimg'>
                <img src="./assets/arbor-gold.jpg" alt="venison-picture"></img>
            </div>
            <div className="abouttitle">
                <h1 style={{fontFamily: 'Reddit Sans', fontWeight: 'bold', fontSize: '48px', marginRight: '10px'}}>Arbor Gold</h1>
            </div>

            <div className="aboutdesc">
              
              <div style={{gridColumnStart: 2, fontFamily: 'Reddit Sans', fontSize:'20px', marginTop: '40px'}}>
                FROM THE ARBOR'S SPECIAL RESERVE 
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In egestas sem nec nisl mattis, eu consequat justo semper. 
                Vestibulum arcu turpis, lobortis sed felis faucibus, sagittis sollicitudin metus. 
                Nam a lacus bibendum, iaculis ante vel, pretium nisl. 
                Phasellus convallis quam quis dui scelerisque, et venenatis urna eleifend. Etiam at sagittis elit.
              </div>

                <h2 style={{margin: '20px', fontFamily: 'Reddit Sans'}}>Order yours now</h2>

              <div style={{marginTop: '30px'}}>
              {quantity === 0 ? (
                <button className="productbutton" onClick={() => increaseQuantity(id)}>Add to cart</button>
                 ) :
                <button style={{width:'125px'}} className="removebutton" onClick={() => removeItem(id)}>Remove from Cart</button>            
                }
                <button style={{fontStyle: 'bold', marginLeft: '25px', height:'25px'}} className="productbutton" onClick={handleClick}> Return Home </button>
              </div>
            
            </div>    
                
                

                

        </div>
    )
}