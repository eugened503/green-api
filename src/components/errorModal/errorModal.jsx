import styles from "./errorModal.module.scss";

const ErrorModal = ({ isErrorModal, setErrorModal, setModal }) => {
  if (!isErrorModal) return null;

  const getLogin = () => {
    setErrorModal(false);
    setModal(true);
  };

  return (
    <div className={styles.modal}>
      <div className={styles.modal__content}>
        <div className={styles.modal__header}>
          <p className={styles.modal__title}>Ошибка!</p>
        </div>
        <div className={styles.modal__body}>
          <p>Упс...Что-то пошло не так, попробуйте еще раз</p>
          <button
            onClick={getLogin}
            type="button"
            className={styles.modal__submit}
          >
            Sign in
          </button>
        </div>
      </div>
    </div>
  );
};

export default ErrorModal;
