import React, { useState, useContext } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

export function Register(props) {
  const currentUser = useContext(CurrentUserContext);

  return (
    <section className="sign-up register">
        <h2 className="sign-up__title register__title">Регистрация</h2>
        <form className="sign-up__form register__form">
            <input className="sign-up__email register__email" 
            type="email"
             />
             <input className="sign-up__password register__password" 
            type="password"
             />
            <button className="sign-up__button register__button">Зарегистрироваться</button>
            <a className="sign-up__question register__question" href="">Уже зарегистрированы? Войти</a>
        </form>
    </section>
  );
}
