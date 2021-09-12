import * as React from "react";
import { Link } from "gatsby";
import * as styles from "./navbar.module.scss";
import instagramIcon from "../../images/instagramIcon.png";
import facebookIcon from "../../images/facebookIcon.png";
import { routes } from "../../assets/routes";

const Navbar = () => {
  const navRoutes = routes
    .sort((a, b) => {
      return a.id - b.id;
    })
    .filter((item) => item.id != 0);

  return (
    <div className={styles.navbarContainer}>
      <nav>
        {navRoutes.map((route, index) => {
          return (
            <Link className={styles.link} key={index} to={route.path}>
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
