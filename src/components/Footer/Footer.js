import * as React from "react";
import * as styles from "./footer.module.scss";
import Logo from "../Logo/Logo";
import { Link } from "gatsby";
import { routes } from "../../assets/routes";
import decoration from "../../images/footer_decoration.png";
import adream from "../../images/adream.png";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.about}>
        <Logo style={{ fontSize: "6.5rem" }} />
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.address}>
          <span>ul.Towarowa 5/6</span>
          <span> 31-000 Kraków</span>
          <span>+48 999 999 999</span>
          <span>email@email.com</span>
        </div>
        <div className={styles.routes}>
          {routes.map((route, index) => {
            return (
              <Link
                key={`route_${index}`}
                to={route.path}
                className={styles.link}
              >
                {route.name}
              </Link>
            );
          })}
        </div>
      </div>
      <img className={styles.decoration} src={decoration} alt="" />
      <div className={styles.privacy}>
        <Link to="/privacy" className={styles.privacyLink}>
          Polityka prywatności
        </Link>
        <span>
          Proudly designed by <img src={adream} alt="ADream logo" />
        </span>
      </div>
    </footer>
  );
};

export default Footer;
