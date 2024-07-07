import React, {FC, useEffect} from 'react';
import styles from './Hero.module.css';
import rectangleHero from '../../assets/images/rectangle-hero.png'
import arrowRight from '../../assets/images/arrow-right.png'
import scrollDown from '../../assets/images/scroll-down.png'
import groupedHero from '../../assets/images/grouped-hero.png'
import {NavLink} from "react-router-dom";
import heroMobile from '../../assets/images/heroMobile.png'
import {useTranslation} from "react-i18next";
import i18n from "../../utils/i18n";

interface HeroProps {
}

const Hero: FC<HeroProps> = () => {
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
    return (<>
            <div id='hero' className={styles.hero}>
                <div className={`${styles.sectionContainer}  ${styles.twoColumn}`}>
                    <div className={styles.colLeft}>
                        <img className={styles.heroMobile} src={heroMobile}/>
                        <h3 className={styles.gimgGeorgianText}>{t("hero.card.header.moto.first")}
                            <img src={rectangleHero} alt=""
                                 className={styles.rectangleHero}/>{t("hero.card.header.moto.second")}
                        </h3>
                        <h1 className={styles.gimgGeorgianText}>{t("hero.card.header.moto.third")}</h1>
                        <p>{t("hero.card.description")}</p>
                        <div className={styles.buttonContainer}>
                            <NavLink to={"/selection"} className={`${styles.primaryButton} ${styles.withIcon}`}>
                                {t("hero.card.search.button.label")}
                                <img src={arrowRight} alt=""/></NavLink>
                        </div>
                        <div className={styles.scrollDown}>
                            <img src={scrollDown} alt=""/>
                            <p>{t("hero.scroll.down.label")}</p>
                        </div>
                    </div>
                    <div className={`${styles.colRight}  ${styles.heroPicContainer}`}>
                        <img className={styles.heroPic} src={groupedHero} alt=""/>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Hero;
