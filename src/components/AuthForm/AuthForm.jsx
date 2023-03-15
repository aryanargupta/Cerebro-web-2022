import React from "react";
import { Link } from "react-router-dom";
import leftarm from "../../assets/images/left-arm.svg";
import rightarm from "../../assets/images/right-arm.svg";
import homeicon from "../../assets/images/home-icon.png";
import "./AuthForm.scss";

const AuthForm = ({ title, children, to, text, link }) => {
  return (
    <div className="authform">
      <div className="authform__center">
        <div className="authform__center__form">
          <div className="authform__center__form__title">
              <div className="authform__center__form__title__text">{title}</div>
          </div>
          <div className="authform__center__form__container">
            {children}
            <span className="authform__center__form__container__text">
              {`${text} `}
              <Link
                to={to}
                className="authform__center__form__container__text__link"
              >
                {link}
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
