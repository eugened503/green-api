import styles from "./contacts.module.scss";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ReactComponent as AddIcon } from "../../images/plus.svg";
import Contact from "../contact/contact";
import { addContact } from "../../store/contactsReducer";

const Contacts = () => {
  const { user } = useSelector((state) => state.user);
  const { contacts, currentNum } = useSelector((state) => state.contacts);
  const [isTel, setTel] = useState("");
  const [isNumberInter, setNumberInter] = useState("");
  const [isError, setError] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    if (user.length > 0) {
      setTel(user[0]?.wid.replace(/\D/g, ""));
    }
  }, [user]);

  useEffect(() => {
    setError("");
  }, [isNumberInter]);

  const handleContact = (num) => {
    if (isNumberInter !== "") {
      if (!contacts.some((item) => item.number === num)) {
        if (contacts.length === 3) {
          setError("Допустимое количество чатов: 3");
          return;
        }
        dispatch(addContact(num));
        setNumberInter("");
        setError("");
      } else {
        setError("Номер есть в списке контактов!");
      }
    } else {
      setError("Введите номер!");
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
          <button onClick={() => handleContact(isNumberInter)} type="button">
            <AddIcon />
          </button>
        </div>
        <span>{isError}</span>
      </div>
      <div className={styles.contacts__container}>
        {contacts.map((contact) => (
          <Contact
            key={contact.id}
            tel={contact.number}
            status={"user"}
            active={currentNum === contact.number}
          />
        ))}
      </div>
    </div>
  );
};

export default Contacts;
