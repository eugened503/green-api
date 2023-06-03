import styles from "./contacts.module.scss";
import { ReactComponent as AddIcon } from "../../images/plus.svg";
import { ReactComponent as DeleteIcon } from "../../images/close.svg";
import Contact from "../contact/contact";

const Contacts = () => {
  return (
    <div className={styles.contacts}>
      <Contact />
      <div className={styles.contacts__input}>
        <input type="text" placeholder="введите номер" />
        <div className={styles.contacts__buttons}>
          <button type="button">
            <AddIcon />
          </button>
          <button type="button">
            <DeleteIcon />
          </button>
        </div>
      </div>
      <div className={styles.contacts__container}>
        <Contact />
        <Contact />
      </div>
    </div>
  );
};

export default Contacts;
