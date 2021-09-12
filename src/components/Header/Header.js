import * as React from "react";
import * as styles from "./header.module.scss";
import HeaderSlider from "../HeaderSlider/HeaderSlider";
import Navbar from "../Navbar/Navbar";
import ContactForm from "../ContactForm/ContactForm";
import Logo from "../Logo/Logo";

const Header = () => {
  return (
    <header className={styles.header}>
      <HeaderSlider playTime={3000} />
      <Navbar />
      <Logo style={{ position: `absolute`, top: "7%", left: "175px" }} />
      <h1>Firma</h1>
      <h2>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi aut,
      </h2>
      <ContactForm />
    </header>
  );
};

export default Header;
