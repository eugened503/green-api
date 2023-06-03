import styles from "./contact.module.scss";
import { ReactComponent as UserLogo } from "../../images/default-user.svg";

const Contact = ({tel}) => {
  return (
      <div className={styles.contact__header}>
        <UserLogo className={styles.contact__logo} />
        <span className={styles.contact__phone}> {tel}</span>
      </div>
  );
};

export default Contact;
