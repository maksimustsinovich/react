import React from 'react';
import Developer from "./developer/developer"
import s from "./developers.module.css"
import {useTranslation} from "react-i18next";

const Developers = (props) => {
    const {t} = useTranslation();
    return (
        <footer className="footer">
        <div className={s.wrapper}>
            <div className={s.list}>
                {props.info.map((info, i) => <Developer key={i} info={info}/>)}
            </div>
        </div>
        </footer>
    );
}

export default Developers;