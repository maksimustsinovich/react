import React from 'react';
import s from './person.module.css'
import "react-vertical-timeline-component/style.min.css"
import Timeline from "./timeline/timeline";
import Map from "./map/map";
import VideoList from "./videos/video-list";
import Gallery from "./gallery/gallery";
import {useTranslation} from "react-i18next";
import {useLoadScript} from "@react-google-maps/api"

const Person = (props) => {
    const {t} = useTranslation();
    const name = props.info.name_en.toLowerCase().split(' ').join('_');
    const {isLoaded} = useLoadScript(
        {googleMapsApiKey: "AIzaSyBcGCRX6kYq-fQW3ZAYGoPX9ecRmK45cxI"})
    if (!isLoaded)
        return <div>Loading...</div>
    return (
        <div className={s.wrapper}>
            <h1>{t(name)}</h1>
            <h4>({props.info.dateOfBirth} - {props.info.dateOfDeath})</h4>
            <img src={props.info.imgPath} alt="" className={s.avatar}/>
            <Timeline info={props.info}/>
            <Gallery photos={props.info.photos}/>
            <VideoList links={props.info.links}/>
            <Map coordinates={props.info.coordinates}/>
        </div>
    );
};

export default Person;