import { useState, useEffect } from "react";
import styles from "./contacts.module.scss";
import { ReactComponent as AddIcon } from "../../images/plus.svg";
import { ReactComponent as DeleteIcon } from "../../images/close.svg";
import Contact from "../contact/contact";
import { useSelector } from "react-redux";

const Contacts = () => {
  const userData = useSelector((state) => state.posts);
  const { postItems } = userData;
  const [isTel, setTel] = useState("");

  useEffect(() => {
    if (postItems.length > 0) {
      setTel(postItems[0]?.wid.replace(/\D/g, ""));
    }
  }, [postItems]);

  return (
    <div className={styles.contacts}>
      <Contact tel={isTel} />
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
