
export function InfoTooltip(props) {

  return (
    <div className="popup-info popup popup_opened">
      <div className="popup-info__container popup__container">
      <button
          className={`popup__close popup-${props.name}__close`}
          type="button"
          title="Закрыть окно"
          aria-label="Закрыть окно"
          onClick={props.onClose}
        ></button>
      <img className="popup-info__img" src="./../images/yes.svg" alt="" />
      <h2 className="popup-info__title">Вы успешно зарегистрировались!</h2>
      </div>
    </div>
  );
}
