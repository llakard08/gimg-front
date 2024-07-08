import React, {Dispatch, FC, SetStateAction, useEffect, useState} from 'react';
import styles from './MobileMenu.module.css';
import close from '../../assets/images/close.png';
import phoneIcon from '../../assets/images/phone-icon.png'
import {Link} from 'react-scroll';
import {useTranslation} from 'react-i18next';
import {ContactInfo} from '../../interfaces/ContactInfo';
import contactInfo from "../../db/contact-info.config.json"
import i18n from "../../utils/i18n";


interface MobileMenuProps {
    setMobileMenuActive: Dispatch<SetStateAction<boolean>>,
    mobileMenuActive: boolean
}


const MobileMenu: FC<MobileMenuProps> = (props) => {
    const {t} = useTranslation("global")
    const availableLanguages = ["Geo", "Rus", "Eng"];
    const [selectedLanguage, setSelectedLanguage] = useState<string>("Geo");
    const handleLanguageChange = (lang: string) => {
        setSelectedLanguage(lang);
        i18n.changeLanguage(lang.toLowerCase());
        localStorage.setItem("selectedLanguage", lang);
    }

    useEffect(() => {
        const item = localStorage.getItem("selectedLanguage");
        if (item !== undefined && item !== null) {
            handleLanguageChange(item)
        }
    }, [])
    const contact = contactInfo as ContactInfo;

    return (
        <div className={styles.MobileMenu} style={props.mobileMenuActive ? {display: "flex", overflow: "hidden"} : {}}>
            <div className={styles.menuContainer}>
                <div className={styles.content}>
                    <div className={styles.navigation}>
                        <h3>{t("header.navigation.label")}</h3>
                        <button>
                            <img onClick={() => {
                                props.setMobileMenuActive(false)
                            }} src={close} alt=""/>
                        </button>
                    </div>
                    <div className={styles.menuMob}>
                        <ul className={styles.menu}>
                            <li>
                                <Link onClick={() => {
                                    props.setMobileMenuActive(false)
                                }} activeClass='active' smooth={true} to='header'
                                      offset={-100}>{t("header.navigation.main")}</Link>
                            </li>
                            <li>
                                <Link onClick={() => {
                                    props.setMobileMenuActive(false)
                                }} activeClass='active' smooth={true} to='about-project'
                                      offset={-100}>{t("header.navigation.aboutUs")}</Link>
                            </li>
                            <li>
                                <Link onClick={() => {
                                    props.setMobileMenuActive(false)
                                }} activeClass='active' smooth={true} to='why-gimg'
                                      offset={0}>{t("header.navigation.project")}</Link>
                            </li>
                            <li>
                                <Link onClick={() => {
                                    props.setMobileMenuActive(false)
                                }} activeClass='active' smooth={true} to='contact'
                                      offset={-50}>{t("header.navigation.contact")}</Link>
                            </li>
                        </ul>
                    </div>
                    <button className={`${styles.primaryButton} ${styles.navbarButton} ${styles.withIcon}`}>
                        <img src={phoneIcon} className={styles.phoneIcon} alt=""/>
                        <a href={"tel:".concat(contact.phoneNumber)}
                           className={styles.phoneNumber}>{contact.phoneNumber}</a>
                    </button>
                </div>

                <div className={styles.languages}>
                    {
                        availableLanguages.map((language) =>
                            <button>
                                <a onClick={() => handleLanguageChange(language)}>{language}</a>
                            </button>
                        )
                    }
                </div>

            </div>
        </div>
    )
};

export default MobileMenu;
