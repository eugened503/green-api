import styles from "./contact.module.scss";
import { useDispatch } from "react-redux";
import { addCurrentNum } from "../../store/contactsReducer";
import { ReactComponent as UserLogo } from "../../images/default-user.svg";

const Contact = ({ tel, status = "default", active = false }) => {
  const userClass = status === "user" ? styles.user : "";
  const activeClass = active ? styles.active : "";
  const dispatch = useDispatch();

  return (
    <div
      onClick={() => dispatch(addCurrentNum(tel))}
      className={`${styles.contact} ${userClass} ${activeClass}`}
    >
      <UserLogo className={styles.contact__logo} />
      <span className={styles.contact__phone}> {tel}</span>
    </div>
  );
};

export default Contact;
