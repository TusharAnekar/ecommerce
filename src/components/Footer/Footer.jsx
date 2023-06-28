import "../Footer/footer.css";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { NavLink } from "react-router-dom";

export function Footer() {
  return (
    <div className="footer">
      <h3>Connect with me:</h3>
      <NavLink
        to={"https://github.com/TusharAnekar"}
        target="_blank"
        rel="noopener noreferrer"
      >
        <GitHubIcon />
      </NavLink>

      <NavLink
        to={"https://in.linkedin.com/"}
        target="_blank"
        rel="noopener noreferrer"
      >
        <LinkedInIcon />
      </NavLink>
    </div>
  );
}
