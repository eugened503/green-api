import styles from "./contact.module.scss";
import { ReactComponent as UserLogo } from "../../images/default-user.svg";

const Contact = ({ tel, status = "default", active = false, setCurrentId, id }) => {
  const userClass = status === "user" ? styles.user : "";
  const activeClass = active ? styles.active : "";

  return (
    <div
      onClick={() => setCurrentId(id)}
      className={`${styles.contact} ${userClass} ${activeClass}`}
    >
      <UserLogo className={styles.contact__logo} />
      <span className={styles.contact__phone}> {tel}</span>
    </div>
  );
};

export default Contact;
