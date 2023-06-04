import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./contacts.module.scss";
import { ReactComponent as AddIcon } from "../../images/plus.svg";
import Contact from "../contact/contact";
import { addContact } from "../../store/contactsReducer";

const Contacts = () => {
  const { user } = useSelector((state) => state.user);
  const { contacts } = useSelector((state) => state.contacts);
  const [isTel, setTel] = useState("");
  const [isNumberInter, setNumberInter] = useState("");
  const [isCurrentId, setCurrentId] = useState(null);
  const [isError, setError] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    if (user.length > 0) {
      setTel(user[0]?.wid.replace(/\D/g, ""));
    }
  }, [user]);

  const handleContact = (num) => {
    if (!contacts.some((item) => item.number === num)) {
      dispatch(addContact(num));
      setNumberInter("");
      setError("");
    } else {
      setError("Номер есть в списке контактов!");
    }
  };

  return (
    <div className={styles.contacts}>
      <Contact tel={isTel} />
      <div className={styles.contacts__wrapper}>
        <div className={styles.contacts__input}>
          <input
            onChange={(e) => setNumberInter(e.target.value.trim())}
            value={isNumberInter}
            type="text"
            placeholder="введите номер"
          />
          <div className={styles.contacts__buttons}>
            <button onClick={() => handleContact(isNumberInter)} type="button">
              <AddIcon />
            </button>
          </div>
        </div>
        <span>{isError}</span>
      </div>
      <div className={styles.contacts__container}>
        {contacts.map((contact) => (
          <Contact
            key={contact.id}
            tel={contact.number}
            status={"user"}
            active={isCurrentId === contact.id}
            setCurrentId={setCurrentId}
            id={contact.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Contacts;
