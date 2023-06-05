import styles from "./messages.module.scss";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Contact from "../contact/contact";
import Message from "../message/message";
import MessagesFooter from "../messagesFooter/messagesFooter";
import {
  receiveNotification,
  deleteNotification,
} from "../../store/messageReducer";

const Messages = () => {
  const { currentNum } = useSelector((state) => state.contacts);
  const { idInstance, apiTokenInstance } = useSelector((state) => state.user);
  const { message, receiptId, result } = useSelector((state) => state.message);
  const [isCurrentMessage, setCurrentMessage] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    if (message.length > 0) {
      const currentMessage = message.find(
        (el) => el.chatId === currentNum + "@c.us"
      );
      setCurrentMessage(currentMessage);
    }
  }, [currentNum, message]);

  useEffect(() => {
    if (idInstance && apiTokenInstance) {
      setInterval(() => dispatch(
      receiveNotification({
        idInstance,
        apiTokenInstance,
      })
    ), 7000);
    }
  }, [dispatch, idInstance, apiTokenInstance]);

  useEffect(() => {
    if (receiptId) {
      dispatch(
        deleteNotification({
          idInstance,
          apiTokenInstance,
          receiptId,
        })
      );
    }
  }, [apiTokenInstance, dispatch, idInstance, receiptId]);

  // const getReceiveNotification = () => {
  //   dispatch(
  //     receiveNotification({
  //       idInstance,
  //       apiTokenInstance,
  //     })
  //   );
  // };

  // const deleteReceiveNotification = () => {
  //   dispatch(
  //     deleteNotification({
  //       idInstance,
  //       apiTokenInstance,
  //       receiptId,
  //     })
  //   );
  // };

  // console.log("receiptId", receiptId);
  // console.log("result", result);
  // console.log("message", message);

  let content;

  if (isCurrentMessage) {
    content = (
      <div className={styles.messages__container}>
        {isCurrentMessage.message?.map((item, index) => (
          <Message key={index} text={item[0]} status={item[1]} />
        ))}
      </div>
    );
  } else {
    content = <div className={styles.messages__container}></div>;
  }

  return (
    <div className={styles.messages}>
      <Contact tel={currentNum} />
      {content}
      {/* <div>
        <button
          onClick={getReceiveNotification}
          style={{
            backgroundColor: "salmon",
            color: "blue",
            width: "150px",
            height: "50px",
            margin: "0 20px 0 0",
          }}
        >
          получить
        </button>
        <button
          onClick={deleteReceiveNotification}
          style={{
            backgroundColor: "salmon",
            color: "blue",
            width: "150px",
            height: "50px",
          }}
        >
          удалить
        </button>
      </div> */}
      <MessagesFooter />
    </div>
  );
};

export default Messages;
