import React, {FC, useEffect, useState} from 'react';
import aboutSectionPic from '../../assets/images/about-section-pic.png'
import styles from './AboutProject.module.css'
import {useTranslation} from "react-i18next";
import useFlag from "../../assets/images/flags/usa.png"
import turkeyFlag from "../../assets/images/flags/turkey.png"
import lithuaniaFlag from "../../assets/images/flags/lithuania.png"
import bahrainFlag from "../../assets/images/flags/bahrain.png"
import thailandFlag from "../../assets/images/flags/thailand.png"
import georgianFlag from "../../assets/images/flags/georgia.png"
import czechFlag from "../../assets/images/flags/czech.png"
import i18n from "../../utils/i18n";

interface AboutProjectProps {
}

const AboutProject: FC<AboutProjectProps> = () => {
    const [showMoreSelected, setShowMoreSelected] = useState<boolean>(false);
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
    return (<div className={styles.aboutProject} style={showMoreSelected ? {
            height: "110vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "initial"
        } : {}}>
            <div className={styles.aboutSection}>
                <div className={styles.aboutPic}>
                    <img src={aboutSectionPic} className={styles.aboutSectionPic} alt=""/>
                </div>
                <div className={styles.aboutPicCover}>
                </div>
                <div id='about-project' className={styles.aboutContent}
                     style={showMoreSelected ? {height: "100vh"} : {}}>
                    <h2 className={styles.gimgGeorgianText}>{t("aboutUs.main.label")}</h2>
                    <p>{t("aboutUs.description.part.one")}</p>
                    {!showMoreSelected && <p className={styles.showMore} onClick={() => {
                        setShowMoreSelected(true)
                    }}>{t("aboutUs.description.show.more")}</p>
                    }
                    <p className={styles.authors}
                       style={showMoreSelected ? {display: "flex"} : {}}>{t("aboutUs.description.project.authors")}</p>
                    <div className={styles.creatorData} style={showMoreSelected ? {display: "flex"} : {}}>
                        <div className={styles.aboutUsDescriptionCreatorNames}>
                            <div className={styles.companyName}><p>Leo A Daly</p></div>
                            <div className={styles.companyName}><p>Erburg Architects</p></div>
                            <div className={styles.companyName}><p> Ural Engineering</p></div>
                            <div className={styles.companyName}><p>Metta</p></div>
                            <div className={styles.companyName}><p>Cowi</p></div>
                            <div className={styles.companyName}><p>DWP</p></div>
                            <div className={styles.companyName}><p>Leo International</p></div>
                            <div className={styles.companyName}><p>Studio 4</p></div>
                            <div className={styles.companyName}><p>ICT Install</p></div>
                            <div className={styles.companyName}><p>Ross Holding</p></div>
                        </div>
                        <div className={styles.aboutUsDescriptionCreatorWorks}>
                            <div className={styles.creatorAndWork}>
                                <img className={styles.flag} src={useFlag}/>
                                <p>Concept design</p>
                            </div>
                            <div className={styles.creatorAndWork}>
                                <img className={styles.flag} src={turkeyFlag}/>
                                <p>Architecture</p>
                            </div>
                            <div className={styles.creatorAndWork}>
                                <img className={styles.flag} src={turkeyFlag}/>
                                <p>Structural part</p>
                            </div>
                            <div className={styles.creatorAndWork}>
                                <img className={styles.flag} src={turkeyFlag}/>
                                <p>Engineering</p>
                            </div>
                            <div className={styles.creatorAndWork}>
                                <img className={styles.flag} src={lithuaniaFlag}/>
                                <p>Engineering</p>
                            </div>
                            <div className={styles.creatorAndWork}>
                                <img className={styles.flag} src={bahrainFlag}/>
                                <p>Interior design</p>
                            </div>
                            <div className={styles.creatorAndWork}>
                                <img className={styles.flag} src={thailandFlag}/>
                                <p>Interior design</p>
                            </div>
                            <div className={styles.creatorAndWork}>
                                <img className={styles.flag} src={georgianFlag}/>
                                <p>Interior design</p>
                            </div>
                            <div className={styles.creatorAndWork}>
                                <img className={styles.flag} src={georgianFlag}/>
                                <p>Engineering</p>
                            </div>
                            <div className={styles.creatorAndWork}>
                                <img className={styles.flag} src={czechFlag}/>
                                <p>General Contractor</p>
                            </div>
                        </div>
                    </div>
                    <p className={styles.aboutUsPartThree}
                       style={showMoreSelected ? {display: "flex"} : {}}>{t("aboutUs.description.part.three")} </p>
                    {showMoreSelected && <p className={styles.showLess} onClick={() => {
                        setShowMoreSelected(false)
                    }}>{t("aboutUs.description.show.less")}</p>
                    }
                </div>
            </div>
        </div>
    )
};

export default AboutProject;
