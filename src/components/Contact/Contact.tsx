import React, {FC, useEffect} from 'react';
import styles from "./Contact.module.css"
import phoneFrame from "../../assets/images/phone-frame.png"
import emailFrame from "../../assets/images/email-frame.png"
import locationFrame from "../../assets/images/location-frame.png"
import map from "../../assets/images/map.png"
import contactInfo from "../../db/contact-info.config.json"
import {ContactInfo} from "../../interfaces/ContactInfo";
import {useTranslation} from "react-i18next";
import i18n from "../../utils/i18n";

interface ContactProps {
}

const Contact: FC<ContactProps> = () => {
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
    return (
        <div id='contact' className={styles.contactContainer}>
            <div className={styles.mapImageWrapper}>
                <img src={map} className={styles.mapImage} alt=""/>
            </div>
            <div className={styles.mapShadowFromBelow}></div>
            <div className={styles.mapShadowFromAbove}></div>
            <div className={`${styles.contactSection} ${styles.sectionContainer}`}>
                <a href={"tel:".concat(contact.phoneNumber)}>
                    <div className={styles.contactCard}>
                        <img src={phoneFrame} className={styles.frame} alt=""/>
                        <div className={styles.contactInfo}>
                            <h4 className={styles.grayText}>{t("contact.phone.number.label")}</h4>
                            <h3>{contact.phoneNumber}</h3>
                        </div>
                    </div>
                </a>
                <hr className={styles.line}/>
                <a href={"mailto:".concat(contact.phoneNumber)}>
                    <div className={styles.contactCard}>
                        <img src={emailFrame} className={styles.frame} alt=""/>
                        <div className={styles.contactInfo}>
                            <h4 className={styles.grayText}>{t("contact.email.label")}</h4>
                            <h3>{contact.email}</h3>
                        </div>
                    </div>
                </a>
                <hr className={styles.line}/>
                <div className={styles.contactCard}>
                    <img src={locationFrame} className={styles.frame} alt=""/>
                    <div className={styles.contactInfo}>
                        <h4 className={styles.grayText}>{t("contact.address.label")}</h4>
                        <h3>{t("contact.address.value")}</h3>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Contact;
