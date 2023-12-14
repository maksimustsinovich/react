import React from 'react';
import ListElement from '../list-element/list-element';
import s from "./search-list.module.css"

function SearchList(props) {
    return (
        <div className={s.scammers}>
            {props.filteredPersons.map((person, i) => <ListElement key={i} person={person} />)}
        </div>
    );
}

export default SearchList;