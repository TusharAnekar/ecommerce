import { createContext, useEffect } from "react"
import { AddToCartService } from "../services/cart-services/AddToCartService"
import { GetCartService } from "../services/cart-services/GetCartService"

export const CartContext = createContext()

export function CartProvider ({children}) {

    async function getCart() {
        try {
            const response = await GetCartService("12345")
            console.log("22")
        } catch (error) {
            
        }
    }

    useEffect(() => {
        getCart()
    }, [])

    async function addToCart (product) {
        try {
            const response = await AddToCartService(product, "12345")
            console.log(response)
        } catch (error) {
            
        }
    }

    return(
        <CartContext.Provider value={{addToCart}}>
            {children}
        </CartContext.Provider>
    )
}