import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import "../Home/home.css"
import { CategoriesContext } from "../../contexts/categories-context";


export function Home() {
  const navigate = useNavigate()
  const { categoriesState: {categories} } = useContext(CategoriesContext);
  
  return (
    <>
      <div className="home-container">
        <h2>Welcome to the Book Store</h2>
        <p>Find all the books you need here.</p>
        <button>Shop Now</button>
      </div>

      <div>
        <h2>Featured Book Categories</h2>
        <p>
          There are many categories of books available at Pustaka. Choose your
          favorite one now.
        </p>
      </div>

      <div>
        {categories.map(({ _id, categoryName, description }) => (
          <div key={_id} onClick={() => navigate("/products")}>
            <h3>{categoryName}</h3>
            <p>{description}</p>
          </div>
        ))}
      </div>
    </>
  );
}
