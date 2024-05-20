import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";

import { Cart } from "./Pages/Carrinho";
import { Home } from "./Pages/house";
import { PageProdVen, PageProdWin, PageProdFlan, PageProdTully, PageProdQueen, PageProdArbor} from "./Pages/productspages";
import { Cabecalho } from "./components/header";
import { CartProvider } from "./context/cartContext";
import { Finished } from "./Pages/finalizada";

export function CrossRoutes(){

    return(
        <Router>
            <CartProvider>
                <Cabecalho />
                <Routes>
                    <Route path = "/" element ={<Home />} />
                    <Route path = "/cart" element ={<Cart />} />
                    <Route path = "/finish" element ={<Finished />}/>
                    <Route path = "/1" element ={<PageProdVen id = {1}/>} />
                    <Route path = "/4" element ={<PageProdWin id = {4}/>} />
                    <Route path = "/2" element ={<PageProdFlan id = {2}/>} />
                    <Route path = "/5" element ={<PageProdTully id = {5}/>} />
                    <Route path = "/3" element ={<PageProdQueen id = {3}/>} />
                    <Route path = "/6" element ={<PageProdArbor id = {6}/>} />
                </Routes>
            </CartProvider>
        </Router>
    )
}
