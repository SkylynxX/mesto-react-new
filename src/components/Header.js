import logo from "../images/header-logo.svg";

export function Header() {
  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="Логотип Mesto" />
      <div className="header__container">
        <p className="header__container_email header__container_email-block ">1234@mail.ru</p>
        <a className="header__container_link header__container_link-out" href="#">Регистрация</a>
      </div>
    </header>
  );
}
