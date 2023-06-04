import styles from "./messages.module.scss";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Contact from "../contact/contact";
import Message from "../message/message";
import MessagesFooter from "../messagesFooter/messagesFooter";

const Messages = () => {
  const { currentNum } = useSelector((state) => state.contacts);
  const { message } = useSelector((state) => state.message);
  const [isCurrentMessage, setCurrentMessage] = useState(null);

  useEffect(() => {
    if (message.length > 0) {
      const currentMessage = message.find(
        (el) => el.chatId === currentNum + "@c.us"
      );
      setCurrentMessage(currentMessage);
    }
  }, [currentNum, message]);

  let content;

  if (isCurrentMessage) {
    content = (
      <div className={styles.messages__container}>
        {isCurrentMessage.message?.map((item, index) => (
          <Message key={index} text={item} status="user" />
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
        {/* {isCurrentMessage.message?.map((item, index) => (
          <Message
            key={index}
            text={item}
            status="user"
          />
        ))} */}
        {/* <Message
          text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis
        voluptatum dicta soluta commodi, harum voluptates veniam vero facilis
        sunt reprehenderit odit ipsam iste eligendi obcaecati vel incidunt
        asperiores molestiae officia."
          status="user"
        /> */}
        {/* <Message
          text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis
          voluptatum dicta soluta commodi, harum voluptates veniam vero facilis
          sunt reprehenderit odit ipsam iste eligendi obcaecati vel incidunt
          asperiores molestiae officia."
          status="interlocutor"
        /> */}
      <MessagesFooter />
    </div>
  );
};

export default Messages;
