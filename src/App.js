import React from 'react';
import s from "./App.css";
import Header from "./components/header/header";
import Info from "./components/info/info"
import List from "./components/list/list"
import Person from "./components/person/person";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import scammers from "./data/scammers";

const getRandomPerson = () => {
    let id = Math.floor(Math.random() * 5) + 1;
    let randomPerson;
    scammers.map(person => {
        if (person.id === id)
            randomPerson = person;
    });

    return randomPerson;
}

const App = (props) => {
    return (
        <BrowserRouter>
            <div className={s.wrapper}>
                <Header/>
                <div>
                    <Routes>
                        <Route path='/*' element={<Info mainPerson={getRandomPerson()}/>}/>
                        <Route path='/list' element={<List/>}/>
                        {scammers.map((person, i) => <Route key={i} path={person.url} element={<Person info={person}/>}/>)}
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
