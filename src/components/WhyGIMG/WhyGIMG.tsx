import React, {FC, useEffect} from 'react';
import whyGimg11 from '../../assets/images/why-gimg-1.1.png'
import whyGimg12 from '../../assets/images/why-gimg-1.2.png'
import whyGimg13 from '../../assets/images/why-gimg-1.3.png'
import whyGimg21 from '../../assets/images/why-gimg-2.1.png'
import whyGimg22 from '../../assets/images/why-gimg-2.2.png'
import whyGimg23 from '../../assets/images/why-gimg-2.3.png'
import styles from "../WhyGIMG/WhyGIMG.module.css";
import {useTranslation} from "react-i18next";
import i18n from "../../utils/i18n";

interface WhyGIMGProps {
}

const WhyGIMG: FC<WhyGIMGProps> = () => {
    const {t} = useTranslation("global")
    const handleLanguageChange = (lang: string) => {
        i18n.changeLanguage(lang.toLowerCase());
        localStorage.setItem("selectedLanguage", lang);
    }

    useEffect(() => {
        const item = localStorage.getItem("selectedLanguage");
        if (item !== undefined && item !== null) {
            handleLanguageChange(item)
        }
    }, [])
    return (<div className={`${styles.whyGimgSection} ${styles.sectionContainer}`}>
            <h1 id="why-gimg" className={styles.whyUs}>{t("whyGimg.header.main.label")}</h1>
            <div className={`${styles.card1} ${styles.card}`}>
                <div className={styles.whyGimgPic}>
                    <img className={styles.whyGimgIcon} src={whyGimg11} alt=""/>
                    {/*<img src={lineRight} className={styles.lineRight} alt=""/>*/}
                </div>
                <div className={styles.cardContent}>
                    <h3>{t("whyGimg.header.structure.label")}</h3>
                    <p className={styles.grayText}>{t("whyGimg.structure.description")}</p>
                </div>
            </div>
            <div className={`${styles.card2} ${styles.card}`}>
                <div className={styles.whyGimgPic}>
                    <img className={styles.whyGimgIcon} src={whyGimg12} alt=""/>
                    {/*<img src={lineLeft} className={styles.lineLeft} alt=""/>*/}
                </div>
                <div className={styles.cardContent}>
                    <h3>{t("whyGimg.header.courtyard.label")}</h3>
                    <p className={styles.grayText}>{t("whyGimg.courtyard.description")}
                    </p>
                </div>

            </div>
            <div className={`${styles.card3} ${styles.card}`}>
                <div className={styles.whyGimgPic}>
                    <img className={styles.whyGimgIcon} src={whyGimg13} alt=""/>
                    {/*<img src={lineRight} className={styles.lineRight} alt=""/>*/}
                </div>
                <div className={styles.cardContent}>
                    <h3>{t("whyGimg.header.parking.label")}</h3>
                    <p className={styles.grayText}>{t("whyGimg.parking.description")}</p>
                </div>
            </div>
            <div className={`${styles.card4} ${styles.card}`}>
                <div className={styles.whyGimgPic}>
                    <img className={styles.whyGimgIcon} src={whyGimg21} alt=""/>
                    {/*<img src={lineLeft} className={styles.lineLeft} alt=""/>*/}
                </div>
                <div className={styles.cardContent}>
                    <h3>{t("whyGimg.header.facade.label")}</h3>
                    <p className={styles.grayText}>{t("whyGimg.facade.description")}</p>
                </div>
            </div>
            <div className={`${styles.card5} ${styles.card}`}>
                <div className={styles.whyGimgPic}>
                    <img className={styles.whyGimgIcon} src={whyGimg22} alt=""/>
                    {/*<img src={lineRight} className={styles.lineRight} alt=""/>*/}
                </div>
                <div className={styles.cardContent}>
                    <h3>{t("whyGimg.header.lobbyArea.label")}</h3>
                    <p className={styles.grayText}>{t("whyGimg.lobbyArea.description")}
                    </p>
                </div>
            </div>
            <div className={`${styles.card6} ${styles.card}`}>
                <div className={styles.whyGimgPic}>
                    <img className={styles.whyGimgIcon} src={whyGimg23} alt=""/>
                </div>
                <div className={styles.cardContent}>
                    <h3>{t("whyGimg.header.location.label")}</h3>
                    <p className={styles.grayText}>{t("whyGimg.location.description")}
                    </p>
                </div>
            </div>
        </div>
    )
};

export default WhyGIMG;
