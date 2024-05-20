
import { useCart } from "../context/cartContext"
import prods from "../data/items.json"

type cartItem = {
    id: number
    quantity: number
}

export function ItemInCart({id, quantity}: cartItem)
{

    const { removeItem, increaseQuantity, decreaseQuantity } = useCart();
    const item = prods.find(i => i.id === id)
    if (item == null) return null

    return <div className="productscard2">
            <img className="productimg2" src={item.prodimg} alt="Food"></img>
          <div style={{display: 'flex', flexDirection:'column'}}>
            <h1 style={{marginTop: 15}}>{item.productName}</h1>
                <p style={{marginBottom: 10, backgroundColor: "white"}}>${item.price} x{quantity}</p>
            <h2>${item.price*quantity}</h2>
          </div>
          <div style={{display: 'flex', flexDirection:'column', marginLeft: '50px', marginTop: '50px', alignItems: 'center', textAlign: "center"}}>
            <div style={{display:'flex', flexDirection: 'row', gap: '10px', textAlign:"center", justifyContent: 'center'}}>
                <button className="iconbuttonminus" onClick={() => decreaseQuantity(id)}>-</button>
                <div style={{backgroundColor:'lightgray', borderRadius: '10px', height: '30px', width: '40px'}}>{quantity}</div>
                <button className="iconbuttonplus" onClick={() => increaseQuantity(id)}>+</button>
            </div>
            <button className="removebutton" onClick={() => removeItem(id)}>Remove</button>            
          </div>
        </div>
}