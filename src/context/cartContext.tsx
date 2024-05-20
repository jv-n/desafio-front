import { ReactNode, createContext, useContext, useState } from "react"


type cartItem = {
    id: number
    quantity: number
}

type cartContext = {
    
    getQuantity: (id: number) => number
    increaseQuantity: (id: number) => void
    decreaseQuantity: (id: number) => void
    removeItem: (id: number) => void
    removeAll: () => void
    totalQuantity: number
    cartItems: cartItem[]
}

const CartContext = createContext({} as cartContext)

export function useCart ()
{
    return useContext(CartContext);
}

type ProviderProps = {
    children: ReactNode
}

export function CartProvider ({ children }: ProviderProps){

    const[cartItems, setCartItems] = useState<cartItem[]>([]);

    const totalQuantity = cartItems.reduce((quantity, item) =>item.quantity + quantity, 0)

    function getQuantity (id: number){
        return cartItems.find(item => item.id === id)?.quantity || 0
    }

    function increaseQuantity (id: number){
        setCartItems(curItems => {
            if(curItems.find(item => item.id === id) == null){
                return [...curItems, { id, quantity: 1}]
            } else {
                return curItems.map(item =>{
                    if(item.id === id)
                    {
                        return { ...item, quantity: item.quantity+1 }
                    } else { return item }
                })
            }
        })
    }

    function decreaseQuantity (id: number){
        setCartItems(curItems => {
            if(curItems.find(item => item.id === id)?.quantity === 1){
                return curItems.filter(item =>item.id !== id)
            } else {
                return curItems.map(item =>{
                    if(item.id === id)
                    {
                        return { ...item, quantity: item.quantity-1 }
                    } else { return item }
                })
            }
        })
    }

    function removeItem(id: number){
        setCartItems(curItems => {
            return curItems.filter(item =>item.id !== id)
        })
    }

    function removeAll()
    {
        setCartItems(curItems => {
            return curItems.filter(item =>item.id === -1)
        });
    }

    return ( 
        <CartContext.Provider value = {{ getQuantity, increaseQuantity, decreaseQuantity, removeItem, removeAll, cartItems, totalQuantity}}>
            {children}
        </CartContext.Provider>
    )

}