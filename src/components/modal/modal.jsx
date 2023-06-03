import styles from "./modal.module.scss";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getUser } from "../../store/toolkitReducer";

const Modal = ({isModal, setModal}) => {
  const [idInstance, setIdInstance] = useState("");
  const [apiTokenInstance, setApiTokenInstance] = useState("");
  const dispatch = useDispatch();

  if (!isModal) return null;

  const handleAddPost = async (e) => {
    e.preventDefault();
    if (idInstance !== "" && apiTokenInstance !== "") {
      const userData = { idInstance, apiTokenInstance };
      dispatch(getUser(userData));
      setModal(false);
    }
  };

  return (
    <div className={styles.modal}>
      <form onSubmit={handleAddPost} className={styles.modal__content}>
        <div className={styles.modal__header}>
          <p className={styles.modal__title}>Sign in</p>
        </div>
        <div className={styles.modal__body}>
          <input
            type="text"
            placeholder="idInstance"
            onChange={(e) => setIdInstance(e.target.value.trim())}
            value={idInstance}
          ></input>
          <input
            type="text"
            placeholder="apiTokenInstance"
            onChange={(e) => setApiTokenInstance(e.target.value.trim())}
            value={apiTokenInstance}
          ></input>
          <button type="submit" className={styles.modal__submit}>
            Sign in
          </button>
        </div>
      </form>
    </div>
  );
};

export default Modal;
