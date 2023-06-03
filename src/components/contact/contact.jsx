import styles from "./contact.module.scss";
import { ReactComponent as UserLogo } from "../../images/default-user.svg";

const Contact = () => {
  return (
      <div className={styles.contact__header}>
        <UserLogo className={styles.contact__logo} />
        <span className={styles.contact__phone}>+1 111 1111</span>
      </div>
  );
};

export default Contact;
