import "../Header/header.css";

import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { NavLink } from "react-router-dom";

export function Header() {
  return (
    <nav className="header">
      <h1 className="heading">Books Store</h1>
      <input type="text" className="search" />
      <div className="icons">
        <FavoriteIcon />
        <ShoppingCartIcon />
        <NavLink to={"/login"}>
          <AccountCircleIcon />
        </NavLink>
      </div>
    </nav>
  );
}
