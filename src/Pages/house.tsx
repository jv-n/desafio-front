
import { ProdCard } from "../components/Product";
import prods from "../data/items.json"


export function Home()
{

   return(
    <>

        <div className='overall'>
            
            <div className="intro">
                <div className="title">
                    <h1 className="textHeader">Welcome to the best Inn the Seven Kingdoms</h1>
                </div>
                    
                    <div className='subintro'>
                        <div className = 'paragraph'>
                            
                            Since the times of the Old King Jaehaerys, this Inn at the crossroads has served the weary travelers of the realm.
                            Located at the cross of the Kingsroad with the River Road, that flows to Riverrun from Casterly Rock, and the High Road, that leads to the mountains of the Vale of Arryn, 
                            we have the pleasure to serve the mightiest of heroes and the poorest of simpletons with our delicious meals and mead. Sit by the fire, enjoy a cup of wine
                            and good company with a delicious delicacie by the side that only the best Inn south of the Wall and west of the Narrow Sea can offer.
                            
                        </div>
                        <div className='imgintrocont'>
                            <img className="imginn" src="./Inn_at_the_Crossroads.jpg" alt="Inn-Picture"></img>
                        </div>

                </div>
            </div>

            <div className = 'products'>
                <div className='title'>
                    <h1 className='textHeader'> Our delicious meals</h1>
                    <p style={{fontFamily: 'Playfair Display', fontSize: 22}}> Eat like a king</p>
                </div>

                <div className="productslist">
                    {prods.map(item => (
                        <div key={item.id}>
                            <ProdCard {...item}/>
                        </div>
                    ))}                   
                </div>
            </div>
        </div>
    </>
   )
}