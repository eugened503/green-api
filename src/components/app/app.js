import React from "react";
import styles from './app.module.scss';
import Header from "../header/header";
import Chat from "../chat/chat";
import Modal from "../modal/modal";

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <Chat />
      <Modal />
    </div>
  );
}

export default App;
