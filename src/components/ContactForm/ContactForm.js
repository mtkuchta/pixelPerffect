import * as React from "react";
import { useState } from "react";
import * as styles from "./contactForm.module.scss";

const ContactForm = () => {
  const [formValues, setFormValues] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const submitForm = (e) => {
    e.preventDefault();
    console.log(formValues);
  };

  return (
    <form className={styles.contactForm} onSubmit={submitForm}>
      <h3>
        Lorem ipsum <span>Lorem ipsum lorem ipsum</span>{" "}
      </h3>
      <p>consectetur adipiscing elit. Ut auctor arcu </p>
      <p className={styles.bolded}>Zostaw kontakt, zadzwonimy do Ciebie</p>
      <input
        type="text"
        name="name"
        placeholder="Imię i nazwisko"
        value={formValues.name}
        onChange={handleInputChange}
        required
      />
      <input
        type="tel"
        name="phone"
        placeholder="Telefon"
        value={formValues.phone}
        onChange={handleInputChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formValues.email}
        onChange={handleInputChange}
        required
      />
      <input
        type="text"
        name="message"
        placeholder="Lorem ipsum lorem ipsum"
        value={formValues.message}
        onChange={handleInputChange}
      />
      <label htmlFor="consent">
        <input type="checkbox" id="consent" required />
        Wyrażam dobrowolną zgodę na przetwarzanie moich danych osobowych
        więcej...
      </label>
      <button className={`pageButton`} type="submit">
        <span>wyślij</span>
      </button>
    </form>
  );
};

export default ContactForm;
