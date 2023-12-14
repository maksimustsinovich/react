import React from 'react';
import s from "./list.module.css";
import Search from "./search/search";
import scammers from "../../data/scammers.js";

const List = (props) => {
    return (
        <div className={s.wrapper}>
            <Search details={scammers}/>
        </div>
    );
};

export default List;