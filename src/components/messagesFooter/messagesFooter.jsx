import styles from "./messagesFooter.module.scss";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { postMessage } from "../../store/messageReducer";
import { ReactComponent as SendIcon } from "../../images/send-message.svg";

const MessagesFooter = () => {
  const { currentNum } = useSelector((state) => state.contacts);
  const { idInstance, apiTokenInstance } = useSelector((state) => state.user);
  const [isMessage, setMessage] = useState("");
  const dispatch = useDispatch();

  const sendMessage = () => {
    dispatch(
      postMessage({
        idInstance,
        apiTokenInstance,
        chatId: currentNum + "@c.us",
        message: isMessage,
      })
    );
    setMessage("");
  };

  return (
    <div className={styles.footer}>
      <div className={styles.footer__input}>
        <input
          onChange={(e) => setMessage(e.target.value)}
          value={isMessage}
          type="text"
          placeholder="введите сообщение"
        />
        <div className={styles.footer__buttons}>
          <button
            disabled={!currentNum || isMessage === ""}
            type="button"
            onClick={sendMessage}
          >
            <SendIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MessagesFooter;
