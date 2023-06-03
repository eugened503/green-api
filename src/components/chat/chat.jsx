import styles from "./chat.module.scss";
import Messages from "../messages/messages";
import Contacts from "../contacts/contacts";

const Chat = () => {
  return (
    <div className={styles.chat}>
      <Contacts></Contacts>
      <Messages></Messages>
    </div>
  );
};

export default Chat;
