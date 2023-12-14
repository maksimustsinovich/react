import lustig from '../img/lustig/lustig.jpg';
import lustigPhoto1 from '../img/lustig/lustigPhoto1.jpg';
import lustigPhoto2 from '../img/lustig/lustigPhoto2.jpg';
import lustigPhoto3 from '../img/lustig/lustigPhoto3.jpg';

import voigt from '../img/voigt/voigt.jpg';
import voigtPhoto1 from '../img/voigt/voigtPhoto1.jpg';
import voigtPhoto2 from '../img/voigt/voigtPhoto2.jpg';
import voigtPhoto3 from '../img/voigt/voigtPhoto3.jpg';

import mavrodi from '../img/mavrodi/mavrodi.jpg';
import mavrodiPhoto1 from '../img/mavrodi/mavrodiPhoto1.jpg';
import mavrodiPhoto2 from '../img/mavrodi/mavrodiPhoto2.jpg';
import mavrodiPhoto3 from '../img/mavrodi/mavrodiPhoto3.jpg';
import mavrodiPhoto4 from '../img/mavrodi/mavrodiPhoto4.jpg';
import mavrodiPhoto5 from '../img/mavrodi/mavrodiPhoto5.jpg';

import weil from '../img/weil/weil.jpg';
import weilPhoto1 from '../img/weil/weilPhoto1.jpg';
import weilPhoto2 from '../img/weil/weilPhoto2.jpg';
import weilPhoto3 from '../img/weil/weilPhoto3.jpg';
import weilPhoto4 from '../img/weil/weilPhoto4.jpg';

import madoff from '../img/madoff/madoff.jpg';
import madoffPhoto1 from '../img/madoff/madoffPhoto1.jpg';
import madoffPhoto2 from '../img/madoff/madoffPhoto2.jpg';
import madoffPhoto3 from '../img/madoff/madoffPhoto3.jpg';
import madoffPhoto4 from '../img/madoff/madoffPhoto4.jpg';


const scammers = [
    {
        id: 1,
        imgPath: lustig,
        name: "Виктор Люстиг",
        name_en: "Victor Lustiq",
        dateOfBirth: 1890,
        dateOfDeath: 1947,
        someText: "Мошенник и аферист. Мировую известность приобрёл как\n" +
                "«человек, продавший Эйфелеву башню. Дважды».",
        photos: [
            lustigPhoto1,
            lustigPhoto2,
            lustigPhoto3,
        ],
        links: [
            "https://www.youtube.com/embed/X70xYJtfHt0?si=kyK8gdQraNtJJInU",
            "https://www.youtube.com/embed/AUd51p4ntzM?si=v8dLVhXAb8YSwlju"
        ],
        coordinates: {
            longitude: 15.72333,
            latitude: 50.540658
        },
        url: "/lustig"
    },
    {
        id: 2,
        imgPath: voigt,
        name: "Вильгельм Фойгт",
        name_en: "Wilhelm Voigt",
        dateOfBirth: 1849,
        dateOfDeath: 1922,
        someText:  "Немецкий сапожник и авантюрист родом из Восточной Пруссии.\n" +
        "Прославился как «капитан» из Кёпеника.",
        photos: [
            voigtPhoto1,
            voigtPhoto2,
            voigtPhoto3
        ],
        links: [
            "https://www.youtube.com/embed/HUUuoVOCp68?si=qLOF101tzlZw0AXH",
            "https://www.youtube.com/embed/Ly5pFp1E-Qg?si=J6P3cSqrss8eVqyI"
        ],
        coordinates: {
            longitude: 21.88256,
            latitude: 55.078378
        },
        url: "/voigt"
    },
    {
        id: 3,
        imgPath: mavrodi,
        name: "Сергей Мавроди",
        name_en: "Sergei Mavrodi",
        dateOfBirth: 1955,
        dateOfDeath: 2018,
        someText:  "Российский основатель нескольких финансовых пирамид, политический деятель и писатель. Известен как создатель АО «МММ»,\n" +
        "которая считается классической и крупнейшей финансовой пирамидой России по количеству пострадавших и ущербу.",
        photos: [
            mavrodiPhoto1,
            mavrodiPhoto2,
            mavrodiPhoto3,
            mavrodiPhoto4,
            mavrodiPhoto5,
        ],
        links: [
            "https://www.youtube.com/embed/fe6uBNMAKHY?si=GU_gspvclYTKxk50",
            "https://www.youtube.com/embed/nOk_VcKmcRE?si=0uRbeSxip4lDSiTu"
        ],
        coordinates: {
            longitude: 37.61623,
            latitude: 55.749331
        },
        url: "/mavrodi"
    },
    {
        id: 4,
        imgPath: weil,
        name: "Джозеф Уэйл",
        name_en: "Joseph Weil",
        dateOfBirth: 1875,
        dateOfDeath: 1976,
        someText: "Джозеф Уэйл по прозвищу «Желтый Малыш» один из самых знаменитых мошенников 20 века.\n" +
            "Он хотел стать актёром, но не смог осуществить детскую мечту и начал примерять на себя разные роли в жизни.\n" +
            "Также был владельцем казино, продавцом собак и даже руководителем банка…\n" +
            "Втираясь в доверие к людям, оставлял их без гроша.",
        photos: [
            weilPhoto1,
            weilPhoto2,
            weilPhoto3,
            weilPhoto4
        ],
        links: [
            "https://www.youtube.com/embed/lMabK2Ijejc?si=lucB1b0Ub3SluXY0",
            "https://www.youtube.com/embed/A7aM7PGw8Fs?si=KSme_yjs4JbecomI"
        ],
        coordinates: {
            longitude: -87.64819,
            latitude: 41.86541
        },
        url: "/weil"
    },
    {
        id: 5,
        imgPath: madoff,
        name: "Бернард Мейдофф",
        name_en: "Bernard Madoff",
        dateOfBirth: 1938,
        dateOfDeath: 2021,
        someText:  "Американский мошенник и финансист, который организовал крупнейшую в истории финансовую пирамиду на сумму около 64,8 миллиарда долларов.\n" +
            "Некоторое время занимал должность председателя совета директоров фондовой биржи NASDAQ.\n" +
            "До краха компания Мейдоффа проработала больше 40 лет.",
        photos: [
            madoffPhoto1,
            madoffPhoto2,
            madoffPhoto3,
            madoffPhoto4
        ],
        links: [
            "https://www.youtube.com/embed/9t5BXyb_-xU?si=GeUL1D9mg-Cspl-_",
            "https://www.youtube.com/embed/JmQ4Wez3uRo?si=KUQbCk3UcEBuoS94"
        ],
        coordinates: {
            longitude: -73.79566,
            latitude: 40.725773
        },
        url: "/madoff"
    },
];

export default scammers;