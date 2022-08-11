import React, { useState, useContext } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

export function Login(props) {
  const currentUser = useContext(CurrentUserContext);

  return (
    <section className="sign-up login">
        <h2 className="sign-up__title login__title">Вход</h2>
        <form className="sign-up__form login__form">
            <input className="sign-up__email login__email personal" 
            type="email"
             />
             <input className="sign-up__password login__password" 
            type="password"
             />
            <button className="sign-up__button login__button">Войти</button>
        </form>
    </section>
  );
}
