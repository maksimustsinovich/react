import React, {useState} from 'react';
import SearchList from './search-list/search-list';
import s from "./search.module.css"
import {useTranslation} from "react-i18next";

function Search(props) {
    const {t} = useTranslation();
    let lng = t('lng');

    const [searchField, setSearchField] = useState("");

    const filteredPersons = props.details.filter(person => lng === 'ru' ? person.name.toLowerCase().includes(searchField.toLowerCase()) :
                                                                          person.name_en.toLowerCase().includes(searchField.toLowerCase()));

    const handleChange = e => setSearchField(e.target.value);

    function searchList() {
        return (
            <SearchList filteredPersons={filteredPersons}/>
        );
    }

    return (
        <div className={s.search}>
            <input type="search" placeholder={t('search_placeholder')} onChange={handleChange}/>
            {searchList()}
        </div>
    );
}

export default Search;