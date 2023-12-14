import React from 'react';
import s from "./days.module.css"
import {NavLink} from "react-router-dom";
import {useTranslation} from "react-i18next";

const Days = (props) => {
    const {t} = useTranslation();
    return (
        <div className={s.wrapper}>
            <h1>{t('figure_of_the_day')}</h1>
            <img src={props.person.imgPath} alt=""/>
            <div>{props.person.name}</div>
            <div>({props.person.dateOfBirth} - {props.person.dateOfDeath})</div>
            <div className={s.text}>{props.person.someText}</div>
            <NavLink to={props.person.url}>{t('information_button')}</NavLink>
        </div>
    );
};

export default Days;