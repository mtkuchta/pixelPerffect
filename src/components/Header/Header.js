import * as React from "react";
import * as styles from "./header.module.scss";
import HeaderSlider from "../HeaderSlider/HeaderSlider";
import Navbar from "../Navbar/Navbar";
import ContactForm from "../ContactForm/ContactForm";

const Header = () => {
  return (
    <header className={styles.header}>
      <HeaderSlider />
      <Navbar />
      <div className={styles.logo}>LOGO</div>
      <h1>Firma</h1>
      <h2>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi aut,
      </h2>
      <ContactForm />
    </header>
  );
};

export default Header;
