import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../contexts/cart-context";

export function BookCard({ book, details }) {
  const {
    _id,
    img,
    name,
    author,
    price,
    originalPrice,
    isBestSeller,
    category,
    rating,
  } = book;
  const navigate = useNavigate();
  const {addToCart} = useContext(CartContext)

  function addToBookHandler (book) {
    addToCart(book)
  }

  return (
    <div>
      <img
        src={img}
        alt="Book top cover"
        onClick={() => navigate(`/products/${_id}`)}
      />
      <p>{name}</p>
      <p>{author}</p>
      <p>{price}</p>
      <p>{originalPrice}</p>
      <p>{rating}</p>
      <button onClick={() => addToBookHandler(book)}>Add to cart</button>
      <button>Add to wishlisht</button>
    </div>
  );
}
