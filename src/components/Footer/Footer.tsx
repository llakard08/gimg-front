import React, {FC, useEffect, useState} from 'react';
import styles from './Footer.module.css';
import gimgLogo from '../../assets/images/GIMG-logo.png'
import {Link} from "react-scroll";
import arrowHeadDown from '../../assets/images/arrow-head-down.png'
import {useTranslation} from "react-i18next";
import i18n from "../../utils/i18n";
import {NavLink} from "react-router-dom";

interface FooterProps {
}

const Footer: FC<FooterProps> = () => {
    const {t} = useTranslation("global")
    const availableLanguages = ["Geo", "Rus", "Eng"];
    const [selectedLanguage, setSelectedLanguage] = useState<string>("Geo");
    const [isDropdownActive, setIsDropdownActive] = useState<boolean>(false);
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
            <footer className={styles.sectionContainer}>
                <hr/>
                <div className={styles.footerContainer}>
                    <div className={styles.gimgLogo}>
                        <Link activeClass='active' smooth={true} to='header' offset={-100}><img src={gimgLogo} alt=""/></Link>
                        <button className={`${styles.navbarButton}  ${styles.primaryButton} ${styles.withIcon}`}
                                onClick={() => {
                                    setIsDropdownActive(!isDropdownActive);
                                }}>
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
                    <div className={styles.footerMenu}>
                        <ul className={styles.menu}>
                            <li><Link activeClass='active' smooth={true} to='header'
                                      offset={-100}>{t("header.navigation.main")}</Link>
                            </li>
                            <li><Link activeClass='active' smooth={true} to='about-project'
                                      offset={-100}>{t("header.navigation.aboutUs")}</Link></li>
                            <li><NavLink to={"/selection"}>{t("header.navigation.project")}</NavLink></li>
                            <li><Link activeClass='active' smooth={true} to='contact'
                                      offset={0}>{t("header.navigation.contact")}</Link>
                            </li>
                        </ul>
                    </div>
                </div>

            </footer>
            <div className={styles.incSection}>
                <p className={styles.grayText}>{t("footer.black.panel.label")} &#169; 2024</p>
            </div>
        </>
    )
};

export default Footer;
