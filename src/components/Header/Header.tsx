import React, {Dispatch, FC, SetStateAction, useEffect, useState} from 'react';
import styles from './Header.module.css';
import gimgLogo from '../../assets/images/GIMG-logo.png'
import arrowHeadDown from '../../assets/images/arrow-head-down.png'
import phoneIcon from '../../assets/images/phone-icon.png'
import {Link} from "react-scroll";
import contactInfo from "../../db/contact-info.config.json"
import {ContactInfo} from "../../interfaces/ContactInfo";
import {useTranslation} from "react-i18next";
import i18n from "../../utils/i18n";
import MobileMenu from "../MobileMenu/MobileMenu";
import {NavLink} from "react-router-dom";

interface HeaderProps {
    setMobileMenuActive: Dispatch<SetStateAction<boolean>>,
    mobileMenuActive: boolean
}

const Header: FC<HeaderProps> = (props) => {
    const {t} = useTranslation("global")
    const contact = contactInfo as ContactInfo;
    const [selectedLanguage, setSelectedLanguage] = useState<string>("Geo");
    const [isDropdownActive, setIsDropdownActive] = useState<boolean>(false);
    const availableLanguages = ["Geo", "Rus", "Eng"];
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
    return (<>
            {props.mobileMenuActive &&
                <MobileMenu setMobileMenuActive={props.setMobileMenuActive}
                            mobileMenuActive={props.mobileMenuActive}/>
            }

            <div id='header' className={styles.navbar}>
                <div className={styles.logoContainer}>
                    <img src={gimgLogo} className={styles.gimgLogo} alt=""/>
                    <hr/>
                    <button className={`${styles.navbarButton}  ${styles.primaryButton} ${styles.withIcon}`}
                            onMouseEnter={() => setIsDropdownActive(true)}
                            onMouseLeave={() => setIsDropdownActive(false)}>
                        <a>{selectedLanguage}</a>
                        <img src={arrowHeadDown} alt=""/>
                        <div className={isDropdownActive ? styles.dropdownMenu : styles.dropdownMenuGone}>
                            {
                                availableLanguages.filter((language) => language !== selectedLanguage).map((language) =>
                                    <button className={styles.dropdownMenuItem}>
                                        <a onClick={() => handleLanguageChange(language)}>{language}</a>
                                    </button>
                                )
                            }
                        </div>
                    </button>

                </div>

                <div className={styles.menuContainer}>
                    <ul className={styles.menu}>
                        <li>
                            <Link activeClass='active' smooth={true} to='header'
                                  offset={-100}>{t("header.navigation.main")}</Link>
                        </li>
                        <li>
                            <Link activeClass='active' smooth={true} to='about-project'
                                  offset={-100}>{t("header.navigation.aboutUs")}</Link>
                        </li>
                        <li>
                            <NavLink to={"/selection"}>{t("header.navigation.project")}</NavLink>
                        </li>
                        <li>
                            <Link activeClass='active' smooth={true} to='contact'
                                  offset={-50}>{t("header.navigation.contact")}</Link>
                        </li>
                    </ul>
                    <hr/>
                    <a href={"tel:".concat(contact.phoneNumber)}>
                        <button className={`${styles.primaryButton} ${styles.navbarButton} ${styles.withIcon}`}>
                            <img src={phoneIcon} className={styles.phoneIcon} alt=""/>
                            <a className={styles.phoneNumber}>{contact.phoneNumber}</a>
                        </button>
                    </a>
                    <div className={styles.openBtn} onClick={() => {
                        props.setMobileMenuActive(true)
                    }}><span></span><span></span><span></span></div>
                </div>
            </div>
        </>
    )
};

export default Header;
