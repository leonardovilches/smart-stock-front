import React from "react";
import "../Styles/HeaderStyle.css";

export default function Header() {
    
    const [accountLogged, setAccountLogged] = React.useState(false)


    function changeAccount() {
        setAccountLogged(!accountLogged)
    }

    


    return (
        <div className="headerContainer">
            <div className="headerLeft">
                <h1>SmartStock</h1>
            </div>

            <div className="headerRight">
            { accountLogged ? (
                <div className="accountCont" id="accountCont">
                    <p>Denilson Fontes Da Cruz</p>
                    <img src="icons/avatardefault.svg" alt="avatarDefault" className="avatarIcon" onClick={changeAccount}></img>
                </div>
                
            ) : 
            (
                <div className="buttonsCont" id="buttonsCont">
                    <button id="registerButton">Cadastrar</button>
                    <button id="loginButton" onClick={changeAccount}>Login</button>
                </div>
            )}
            </div>
        </div>
    )
}