import { createContext, useEffect, useReducer } from "react";
import { ProductsService } from "../services/ProductsService";

export const ProductsContext = createContext();

export function ProductsProvider({ children }) {
  const initialProductsState = {
    products: [],
    searchInput: "",
    rangeInput: 0,
    genreCheckbox: [],
    ratingsRadio: 1,
    sortRadio : ""
  };

  const [productsState, productsDispatch] = useReducer(
    productsReducer,
    initialProductsState
  );

  function productsReducer(state, { type, payload }) {
    switch (type) {
      case "set_products":
        return { ...state, products: payload };
      case "search_products":
        return { ...state, searchInput: payload };
      case "search_products_by_price":
        return { ...state, rangeInput: payload };
      case "search_products_by_genre":
        return state.genreCheckbox.includes(payload)
          ? {
              ...state,
              genreCheckbox: state.genreCheckbox.filter(
                (checkboxFilter) => checkboxFilter !== payload
              ),
            }
          : { ...state, genreCheckbox: [...state.genreCheckbox, payload] };

          case "search_products_by_rating":
        return { ...state, ratingsRadio: payload };

        case "search_products_by_sort":
        return { ...state, sortRadio: payload };
      default:
        return state;
    }
  }

  async function getProducts() {
    try {
      const response = await ProductsService();
      const {
        status,
        data: { products },
      } = response;
      if (status === 200) {
        productsDispatch({ type: "set_products", payload: products });
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getProducts();
  }, []);


  const searchedProducts = productsState.searchInput.length
    ? productsState.products.filter(({ name }) =>
        name.toLowerCase().includes(productsState.searchInput.toLowerCase())
      )
    : productsState.products;

  const priceRangeProducts = productsState.rangeInput
    ? searchedProducts.filter(({ price }) => price > productsState.rangeInput)
    : searchedProducts;

      const ratingsFilteredProducts = priceRangeProducts.filter(({rating}) => rating > productsState.ratingsRadio)

      const sortedFilteredProducts = productsState.sortRadio === "LTH" ? [...ratingsFilteredProducts].sort((a, b) => a.price - b.price) : productsState.sortRadio === "HTL" ? [...ratingsFilteredProducts].sort((a, b) => b.price - a.price) : ratingsFilteredProducts

  return (
    <ProductsContext.Provider
      value={{ productsState, productsDispatch, sortedFilteredProducts }}
    >
      {children}
    </ProductsContext.Provider>
  );
}
