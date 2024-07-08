import i18n from "i18next";
import {initReactI18next} from "react-i18next";
import global_en from "../assets/languages/eng/global.json"
import global_rus from "../assets/languages/rus/global.json"
import global_geo from "../assets/languages/geo/global.json"

const resources = {
    eng: {
        global: global_en
    },
    rus: {
        global: global_rus
    },
    geo: {
        global: global_geo
    }
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: "geo",

        interpolation: {
            escapeValue: false
        }
    });

export default i18n;