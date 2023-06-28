import { createContext, useEffect, useReducer } from "react";
import { CategoriesService } from "../services/CategoriesService";

export const CategoriesContext = createContext();

export function CategoriesProvider({ children }) {
  const initialCategoriesState = { categories: [] };

  const [categoriesState, categoriesDispatch] = useReducer(
    categoriesReducer,
    initialCategoriesState
  );

  function categoriesReducer(state, { type, payload }) {
    switch (type) {
      case "set_categories":
        return { ...state, categories: payload };

      default:
        return state;
    }
  }

  async function getCategories() {
    try {
      const response = await CategoriesService();
      const {
        status,
        data: { categories },
      } = response;
      if (status === 200) {
        categoriesDispatch({ type: "set_categories", payload: categories });
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <CategoriesContext.Provider value={{ categoriesState }}>
      {children}
    </CategoriesContext.Provider>
  );
}
