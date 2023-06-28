import { useParams } from "react-router-dom"
import { useContext } from "react";
import { ProductsContext } from "../../contexts/products-context";
import { BookCard } from "../../components/BookCard/BookCard";

export function ProductDetails () {
    const {productId} = useParams()

    const {
        productsState: { products },
      } = useContext(ProductsContext);

      const product = products.find(({_id}) => _id === productId)

    return(
        <><BookCard book={product} details/></>
    )
}