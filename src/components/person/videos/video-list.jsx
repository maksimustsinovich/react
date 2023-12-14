import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap'
import Video from "./video/video";
import s from './video-list.module.css'
import {useTranslation} from "react-i18next";

const VideoList = (props) => {
    const {t} = useTranslation();
    return (
        <div className={s.wrapper}>
            <h1>{t('videos')}</h1>
            <Container className={s.videos}>
                {props.links.map((link, i) => <Video key={i} link={link}/>)}
            </Container>
        </div>
    );
};

export default VideoList;