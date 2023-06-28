import { useContext } from "react";
import { ProductsContext } from "../../contexts/products-context";
import { BookCard } from "../../components/BookCard/BookCard";
import { CategoriesContext } from "../../contexts/categories-context";

export function Products() {
  const { productsDispatch, sortedFilteredProducts } =
    useContext(ProductsContext);
  const {
    categoriesState: { categories },
  } = useContext(CategoriesContext);

  return (
    <>
      <h1>Products</h1>

      <input
        type="text"
        onChange={(e) =>
          productsDispatch({ type: "search_products", payload: e.target.value })
        }
      />

      <label htmlFor="">
        <input
          type="range"
          defaultValue="0"
          max={"1000"}
          onChange={(e) =>
            productsDispatch({
              type: "search_products_by_price",
              payload: e.target.value,
            })
          }
        />
      </label>

      <div>
        {categories.map(({ id, categoryName }, index) => (
          <div key={id}>
            <label htmlFor="">
              <input type="checkbox" value={categoryName} />
              {categoryName}
            </label>
          </div>
        ))}
      </div>

      <div>
        <label htmlFor="">
          <input
            type="radio"
            name="rating"
            value={"1"}
            onClick={(e) =>
              productsDispatch({
                type: "search_products_by_rating",
                payload: e.target.value,
              })
            }
          />
          1 Stars & above
        </label>

        <label htmlFor="">
          <input
            type="radio"
            name="rating"
            value={"2"}
            onClick={(e) =>
              productsDispatch({
                type: "search_products_by_rating",
                payload: e.target.value,
              })
            }
          />
          2 Stars & above
        </label>

        <label htmlFor="">
          <input
            type="radio"
            name="rating"
            value={"3"}
            onClick={(e) =>
              productsDispatch({
                type: "search_products_by_rating",
                payload: e.target.value,
              })
            }
          />
          3 Stars & above
        </label>

        <label htmlFor="">
          <input
            type="radio"
            name="rating"
            value={"4"}
            onClick={(e) =>
              productsDispatch({
                type: "search_products_by_rating",
                payload: e.target.value,
              })
            }
          />
          4 Stars & above
        </label>
      </div>

      <div>
        <label htmlFor="">
          <input
            type="radio"
            name="sort"
            value={"LTH"}
            onClick={(e) =>
              productsDispatch({
                type: "search_products_by_sort",
                payload: e.target.value,
              })
            }
          />
          Price - Low to High
        </label>

        <label htmlFor="">
          <input
            type="radio"
            name="sort"
            value={"HTL"}
            onClick={(e) =>
              productsDispatch({
                type: "search_products_by_sort",
                payload: e.target.value,
              })
            }
          />
          Price - High to Low
        </label>
      </div>

      {sortedFilteredProducts.map((product) => (
        <div key={product._id}>
          <BookCard book={product} />
        </div>
      ))}
    </>
  );
}
