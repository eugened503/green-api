import styles from "./chat.module.scss";
import Messages from "../messages/messages";
import Contacts from "../contacts/contacts";

const Chat = () => {
  return (
    <div className={styles.chat}>
      <div className={styles.chat__desktop}>
        <Contacts />
      </div>
      <Messages />
      <div className={styles.chat__mobile}>
        <Contacts />
      </div>
    </div>
  );
};

export default Chat;
