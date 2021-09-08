import * as React from "react";
import * as styles from "./contactForm.module.scss";

const ContactForm = () => {
  return (
    <form className={styles.contactForm} action="">
      <h3>
        Lorem ipsum <span>Lorem ipsum lorem ipsum</span>{" "}
      </h3>
      <p>consectetur adipiscing elit. Ut auctor arcu </p>
      <p className={styles.bolded}>Zostaw kontakt, zadzwonimy do Ciebie</p>
      <input type="text" placeholder="Imię i nazwisko" />
      <input type="text" placeholder="Telefon" />
      <input type="text" placeholder="Email" />
      <input type="text" placeholder="Lorem ipsum lorem ipsum" />
      <label htmlFor="consent">
        <input type="checkbox" id="consent" />
        Wyrażam dobrowolną zgodę na przetwarzanie moich danych osobowych
        więcej...
      </label>
      <button type="submit">wyślij</button>
    </form>
  );
};

export default ContactForm;
