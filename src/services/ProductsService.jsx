import axios from "axios";

export const ProductsService = async () => await axios.get("/api/products")