import React, {FC, useEffect} from 'react';
import styles from './ApartmentSelectionHeader.module.css';
import gimgLogo from "../../assets/images/GIMG-logo.png";
import close from "../../assets/images/close.png";
import {NavLink} from "react-router-dom";
import phoneIcon from "../../assets/images/phone-icon.png";
import contactInfo from "../../db/contact-info.config.json"
import {ContactInfo} from "../../interfaces/ContactInfo";
import {useTranslation} from "react-i18next";
import i18n from "../../utils/i18n";

interface ApartmentSelectionHeaderProps {
}

const ApartmentSelectionHeader: FC<ApartmentSelectionHeaderProps> = () => {
    const contact = contactInfo as ContactInfo;
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
    return (<div className={styles.navbar}>
            <div className={styles.logoContainer}>
                <NavLink to={"/"}>
                    <img src={gimgLogo} className={styles.gimgLogo} alt=""/>
                </NavLink>

                <hr/>
                <a href={"tel:".concat(contact.phoneNumber)}>
                    <button className={`${styles.primaryButton} ${styles.navbarButton} ${styles.withIcon}`}>
                        <img src={phoneIcon} className={styles.phoneIcon} alt=""/>
                        <p className={styles.phoneNumber}>{contact.phoneNumber}</p>
                    </button>
                </a>
            </div>
            <div className={styles.menuContainer}>
                <hr/>
                <NavLink to={"/"} className={`${styles.primaryButton} ${styles.navbarButton} ${styles.withIcon}`}>
                    <span>{t("close.button.label")}</span>
                    <img src={close} alt=""/>
                </NavLink>
            </div>
        </div>
    )
};

export default ApartmentSelectionHeader;
