import styles from "./modal.module.scss";
import { useState } from "react";

const Modal = () => {
  const [isModal, setModal] = useState(true);
  const onClose = () => setModal(false);

  if (!isModal) return null;

  return (
    <div className={styles.modal}>
      <form onSubmit={onClose} className={styles.modal__content}>
        <div className={styles.modal__header}>
          <p className={styles.modal__title}>Sign in</p>
        </div>
        <div className={styles.modal__body}>
          <input type="text" placeholder="idInstance"></input>
          <input type="text" placeholder="apiTokenInstance"></input>
          <button type="submit" className={styles.modal__submit}>
            Sign in
          </button>
        </div>
      </form>
    </div>
  );
};

export default Modal;
