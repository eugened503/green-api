import styles from "./message.module.scss";
import { ReactComponent as TailUser } from "../../images/tail-user.svg";
import { ReactComponent as TailInterlocutor } from "../../images/tail-interlocutor.svg";

const Message = ({text, status}) => {
const userClass = status === 'sent' ? styles.user : styles.interlocutor;
const tail = status === 'sent' ? <TailUser /> : <TailInterlocutor />;

  return (
    <div className={`${styles.message} ${userClass}`}>
      <p>
        {text}
      </p>
      <span>
        {tail}
      </span>
    </div>
  );
};

export default Message;
