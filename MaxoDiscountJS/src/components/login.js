import React from "react";
import './login.css'

export default function Login() {
    return (
        <div>
            <div className="form">
                <form className="all-form">
                    <h1>Se connecter</h1>
                    <div className="form-group">
                        <label>E-mail</label>
                        <input type="email"/>
                    </div>
                    <div className="form-group">
                        <label form="exampleInputPassword">Mot de passe</label>
                        <input type="password" className="form-control" />
                    </div>
                    <button type="submit" className="bg-slate-900 btn btn-primary">
                        Connexion {" "}
                    </button>
                </form>
            </div>
        </div>
    )
}