import * as React from "react";
import { Link } from "gatsby";
import * as styles from "./navbar.module.scss";
import instagramIcon from "../../images/instagramIcon.png";
import facebookIcon from "../../images/facebookIcon.png";

const Navbar = () => {
  const routes = [
    { name: "Poznaj przestrzeń", to: "" },
    { name: "Oferta", to: "" },
    { name: "Lokalizacja", to: "" },
    { name: "Własne biuro", to: "" },
    { name: "Kontakt", to: "" },
  ];

  return (
    <div className={styles.navbarContainer}>
      <nav>
        {routes.map((route, index) => {
          return (
            <Link className={styles.link} key={index} to={route.to}>
              {route.name}
            </Link>
          );
        })}
      </nav>
      <div className={styles.socialIcons}>
        <img src={instagramIcon} alt="Instagram Icon" />
        <img src={facebookIcon} alt="Facebook Icon" />
      </div>
    </div>
  );
};

export default Navbar;
