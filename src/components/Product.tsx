import { useNavigate } from "react-router-dom"
import { useCart } from "../context/cartContext"

type itemProps = {
  id: number
  produrl: string
  productName: string
  price: number
  desc: string
  prodimg: string
}

export function ProdCard ( {id, productName, price, produrl, desc, prodimg} : itemProps)
{
  const { getQuantity, increaseQuantity, removeItem } = useCart();
  const quantity = getQuantity(id);
  const navigate = useNavigate();
  const handleClick = () => navigate('/'+produrl)

  return <div className="productscard">
          <img className="productimg" src={prodimg} alt="Food"></img>
          <h1 style={{marginTop: 15}}>{productName}</h1>
            <p style={{marginBottom: 10, backgroundColor: "white"}}>{desc}</p>
          <h2>${price}</h2>
          <div style={{display: 'flex', flexDirection:'column'}}>

            {quantity === 0 ? (
              <button className="productbutton" onClick={() => increaseQuantity(id)}>Add to cart</button>
            ) :
              <button className="removebutton" onClick={() => removeItem(id)}>Remove from Cart</button>            
            }
            <button className="productbutton" onClick={handleClick}>See more</button>

          </div>
        </div>
}