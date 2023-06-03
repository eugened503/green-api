import styles from "./messages.module.scss";
import Contact from "../contact/contact";
import Message from "../message/message";
import MessagesFooter from "../messagesFooter/messagesFooter";

const Messages = () => {
  return (
    <div className={styles.messages}>
      <Contact />
      <div className={styles.messages__container}>
        <Message
          text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis
        voluptatum dicta soluta commodi, harum voluptates veniam vero facilis
        sunt reprehenderit odit ipsam iste eligendi obcaecati vel incidunt
        asperiores molestiae officia."
          status="user"
        />
        <Message
          text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis
          voluptatum dicta soluta commodi, harum voluptates veniam vero facilis
          sunt reprehenderit odit ipsam iste eligendi obcaecati vel incidunt
          asperiores molestiae officia."
          status="interlocutor"
        />
      </div>
      <MessagesFooter />
    </div>
  );
};

export default Messages;
