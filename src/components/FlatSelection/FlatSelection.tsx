import React, {Dispatch, FC, SetStateAction, useEffect} from 'react';
import styles from './FlatSelection.module.css';
import arrowLeft from '../../assets/images/arrow-left.png'
import close from '../../assets/images/close.png'
import phoneIcon from '../../assets/images/phone-icon.png'
import GIMGCarousel from "../GIMGCarousel/GIMGCarousel";
import contactInfo from "../../db/contact-info.config.json"
import {ContactInfo} from "../../interfaces/ContactInfo";
import {Apartment} from "../../interfaces/Apartments";
import {useTranslation} from "react-i18next";
import i18n from "../../utils/i18n";

interface FlatSelectionProps {
    setFloorPlanSectionVisible: Dispatch<SetStateAction<boolean>>
    setSelectedFloorNumber: Dispatch<SetStateAction<number>>
    selectedFloorNumber: number,
    setFlatSectionVisible: Dispatch<SetStateAction<boolean>>
    setSelectedFlatNumber: Dispatch<SetStateAction<number>>
    selectedFlatNumber: number
    selectedApartment: Apartment | undefined
    setFilterVisible: Dispatch<SetStateAction<boolean>>
    floorPlanSectionInitiated: boolean
    apartmentsSectionInitiated: boolean
    setApartmentsVisible: Dispatch<SetStateAction<boolean>>
}

const FlatSelection: FC<FlatSelectionProps> = (props) => {
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

    function executeGoBackLogic() {
        props.setFlatSectionVisible(false);
        if (props.floorPlanSectionInitiated) {
            props.setFloorPlanSectionVisible(true);
        }
        if (props.apartmentsSectionInitiated) {
            props.setApartmentsVisible(true)
        }
    }

    return (<div className={styles.FlatSelection}>
            <div className={`${styles.flatSection} ${styles.sectionContainer}`}>
                <div className={styles.flatHeader}>
                    <div className={styles.flatRight}>
                        <div className={styles.flatNumber}>
                            <h2 className={styles.gimgGeorgianText}>{props.selectedApartment?.floorNumber} {t("floor.label")}</h2>
                            <h4 className={styles.blueH3}>{t("flat.label")} # <span
                                className={styles.bold}> {props.selectedApartment?.apartmentNumber}</span></h4>
                        </div>
                        <hr className={styles.darkHr}/>
                        <button className={`${styles.primaryButton} ${styles.navbarButton}  ${styles.withIcon}`}
                                onClick={() => {
                                    executeGoBackLogic();
                                }}>
                            <img style={{marginRight: "10px"}} src={arrowLeft} alt=""/>
                            <h4 className={styles.nowrap}>{t("go.back.label")}</h4>
                        </button>
                    </div>
                    <button className={`${styles.primaryButton} ${styles.navbarButton}  ${styles.withIcon}`}
                            onClick={() => {
                                props.setFlatSectionVisible(false);
                                props.setFilterVisible(true)
                            }}>
                        <h4 className={styles.nowrap}>{t("close.button.label")}</h4>
                        <img src={close} alt=""/>
                    </button>

                </div>
                <hr className={styles.flatHr}/>
                <div className={styles.descriptionSection}>
                    <div className={styles.area}>
                        <div className={styles.wholeArea}>
                            <h4 className={styles.nowrap}>{t("meter.label")}<sup>2</sup> {t("price.label")}</h4>
                            <h3 className={styles.nowrap}>{props.selectedApartment?.price}$</h3>
                        </div>
                        <div className={styles.wholeArea}>
                            <h4 className={styles.nowrap}>{t("total.area.label")}</h4>
                            <h3 className={styles.nowrap}>{(props.selectedApartment!.apartmentArea + props.selectedApartment!.balcony
                                + (props.selectedApartment!.linkedApartment ? (props.selectedApartment!.linkedApartment?.apartmentArea + props.selectedApartment!.linkedApartment?.balcony) : 0)).toFixed(2)} {t("meter.label")}<sup>2</sup>
                            </h3>
                        </div>
                        <hr className={styles.flatHr}/>
                        <div className={styles.specifications}>
                            <h4>{t("total.area.label")}</h4>
                            <h4>{(props.selectedApartment!.apartmentArea + props.selectedApartment!.balcony
                                + (props.selectedApartment!.linkedApartment ? (props.selectedApartment!.linkedApartment?.apartmentArea + props.selectedApartment!.linkedApartment?.balcony) : 0)).toFixed(2)} {t("meter.label")}<sup>2</sup>
                            </h4>
                            <h4>{t("apartment.area.label")}</h4>
                            <h4>{(props.selectedApartment!.apartmentArea + (props.selectedApartment!.linkedApartment ? (props.selectedApartment!.linkedApartment?.apartmentArea) : 0)).toFixed(2)} {t("meter.label")}<sup>2</sup>
                            </h4>
                            <h4>{t("balcony.area.label")}</h4>
                            <h4>{(props.selectedApartment!.balcony + (props.selectedApartment!.linkedApartment ? (props.selectedApartment!.linkedApartment?.balcony) : 0)).toFixed(2)} {t("meter.label")}<sup>2</sup>
                            </h4>
                        </div>
                        <div className={styles.otherSpecifications}>
                            {
                                props.selectedApartment?.benefits.map((benefit) => {
                                    return (<>
                                        <div className={styles.dotContainer}>
                                            <span className={styles.dot}></span>
                                            <h4>{t(benefit.languageKey)}</h4>
                                        </div>
                                    </>);
                                })
                            }
                        </div>
                        <div className={styles.consultation}>
                            <div>
                                <h3>{t("consultation.label")}</h3>
                                <h4>{t("call.now.label")}</h4>
                            </div>
                            <a href={"tel:".concat(contact.phoneNumber)}>
                                <button className={`${styles.primaryButton} ${styles.navbarButton}  ${styles.withIcon}`}
                                        style={{alignItems: "center"}}>
                                    <img style={{marginRight: "5px"}} src={phoneIcon} alt=""/>
                                    <a className={styles.phoneNumber}>{contact.phoneNumber}</a>
                                </button>
                            </a>

                        </div>
                    </div>
                    <div className={styles.flatPlan}>
                        <img className={styles.flatStyle}
                             src={require("../../assets/images/apartments/".concat(props.selectedApartment?.pictureName!))}
                             alt=""/>
                    </div>
                </div>
                <div className={styles.gallery}>
                    <hr/>
                    {t("gallery.label")}
                    <hr/>
                </div>
                <GIMGCarousel></GIMGCarousel>
            </div>
        </div>
    )
};

export default FlatSelection;
