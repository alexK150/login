import React from "react";

import manIcon from "../assets/men.png";

import './login.styles.css';

export const LoginPage = () => {
    return <div className="container">
        <img src={manIcon} alt='man'/>
            <form>
                <div className="dws-input">
                    <input type="text" name="username" placeholder="Введите логин"/>
                </div>
                <div className="dws-input">
                    <input type="password" name="password" placeholder="Введите пароль"/>
                </div>
                <input type="submit" name="submit" value="ВОЙТИ"/><br/>
            </form>
    </div>
};