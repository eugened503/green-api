import styles from "./messagesFooter.module.scss";
import { ReactComponent as SendIcon } from "../../images/send-message.svg";

const MessagesFooter = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footer__input}>
        <input type="text" placeholder="введите сообщение" />
        <div className={styles.footer__buttons}>
          <button type="button">
            <SendIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MessagesFooter;
