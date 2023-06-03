import { useState } from "react";
import styles from "./app.module.scss";
import Header from "../header/header";
import Chat from "../chat/chat";
import Modal from "../modal/modal";
import ErrorModal from "../errorModal/errorModal";
import Loader from "../loader/loader";
import { useSelector } from "react-redux";

function App() {
  const userData = useSelector((state) => state.user);
  const { status } = userData;
  const [isModal, setModal] = useState(true);
  const [isErrorModal, setErrorModal] = useState(true);
  let messageStatus;

  if (status === "loading") {
    messageStatus = <Loader />;
  } else if (status === "failed") {
    messageStatus = (
      <ErrorModal
        isErrorModal={isErrorModal}
        setErrorModal={setErrorModal}
        setModal={setModal}
      />
    );
  } else {
    messageStatus = null;
  }

  return (
    <div className={styles.app}>
      <Header />
      <Chat />
      <Modal isModal={isModal} setModal={setModal} />
      {messageStatus}
    </div>
  );
}

export default App;
