import React, {Dispatch, FC, SetStateAction, useEffect} from 'react';
import styles from './Appartments.module.css';
import close from '../../assets/images/close.png'
import { Apartment } from "../../interfaces/Apartments";
import RelativeApartmentsFilter from "../RelativeApartmentsFilter/RelativeApartmentsFilter";
import { useTranslation } from "react-i18next";
import i18n from "../../utils/i18n";

interface AppartmentsProps {
    setFloorPlanSectionVisible: Dispatch<SetStateAction<boolean>>
    setSelectedFloorNumber: Dispatch<SetStateAction<number>>
    selectedFloorNumber: number,
    setFlatSectionVisible: Dispatch<SetStateAction<boolean>>
    setSelectedFlatNumber: Dispatch<SetStateAction<number>>
    selectedFlatNumber: number
    setFilterVisible: Dispatch<SetStateAction<boolean>>
    setApartmentsVisible: Dispatch<SetStateAction<boolean>>
    filterVisible: boolean
    apartmentsVisible: boolean
    searchedApartments: Apartment[]
    setSearchedApartments: Dispatch<SetStateAction<Apartment[]>>
    setSelectedApartment: Dispatch<SetStateAction<Apartment | undefined>>
    setApartmentsSectionInitiated: Dispatch<SetStateAction<boolean>>
    setFloorPlanSectionInitiated: Dispatch<SetStateAction<boolean>>
}

const Apartments: FC<AppartmentsProps> = (props) => {
    const { t } = useTranslation("global")
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
    return (<div className={styles.Appartments}>
        <div className={`${styles.appartmentsSection} ${styles.sectionContainer}`}>
            <div className={styles.appartmentsHeader}>
                <div className={styles.floor}>
                    <h2 className={styles.gimgGeorgianText}>{t("apartments.label")}</h2>
                    <h4 className={styles.blueH3}>{t("available.label")} {t("apartment.label")} <span
                        className={styles.bold}>4 </span>
                        <span
                            className={styles.light}>/ 8
                        </span>
                    </h4>
                </div>
                <div className={styles.appartmentsButtons} onClick={() => {
                    props.setFilterVisible(true);
                    props.setApartmentsVisible(false);
                }}>
                    <button className={`${styles.primaryButton} ${styles.navbarButton}  ${styles.withIcon} ${styles.filterBtn}`}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M7.75 17.5C7.75 17.0858 7.41421 16.75 7 16.75H2C1.58579 16.75 1.25 17.0858 1.25 17.5C1.25 17.9142 1.58579 18.25 2 18.25H7C7.41421 18.25 7.75 17.9142 7.75 17.5Z" fill="white" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M16.25 6.5C16.25 6.08579 16.5858 5.75 17 5.75H22C22.4142 5.75 22.75 6.08579 22.75 6.5C22.75 6.91421 22.4142 7.25 22 7.25H17C16.5858 7.25 16.25 6.91421 16.25 6.5Z" fill="white" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M22.75 17.5C22.75 17.0858 22.4142 16.75 22 16.75H13C12.5858 16.75 12.25 17.0858 12.25 17.5C12.25 17.9142 12.5858 18.25 13 18.25H22C22.4142 18.25 22.75 17.9142 22.75 17.5Z" fill="white" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M1.25 6.5C1.25 6.08579 1.58579 5.75 2 5.75H11C11.4142 5.75 11.75 6.08579 11.75 6.5C11.75 6.91421 11.4142 7.25 11 7.25H2C1.58579 7.25 1.25 6.91421 1.25 6.5Z" fill="white" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M10 15.1499C11.2426 15.1499 12.25 16.1573 12.25 17.3999C12.25 18.6425 11.2426 19.6499 10 19.6499C8.75736 19.6499 7.75 18.6425 7.75 17.3999C7.75 16.1573 8.75736 15.1499 10 15.1499ZM13.75 17.3999C13.75 15.3288 12.0711 13.6499 10 13.6499C7.92893 13.6499 6.25 15.3288 6.25 17.3999C6.25 19.471 7.92893 21.1499 10 21.1499C12.0711 21.1499 13.75 19.471 13.75 17.3999Z" fill="white" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M14 4.1499C12.7574 4.1499 11.75 5.15726 11.75 6.3999C11.75 7.64254 12.7574 8.6499 14 8.6499C15.2426 8.6499 16.25 7.64254 16.25 6.3999C16.25 5.15726 15.2426 4.1499 14 4.1499ZM10.25 6.3999C10.25 4.32883 11.9289 2.6499 14 2.6499C16.0711 2.6499 17.75 4.32883 17.75 6.3999C17.75 8.47097 16.0711 10.1499 14 10.1499C11.9289 10.1499 10.25 8.47097 10.25 6.3999Z" fill="white" />
                        </svg>

                    </button>
                    <button className={`${styles.primaryButton} ${styles.navbarButton}  ${styles.withIcon}`}
                        onClick={() => {
                            props.setFilterVisible(!props.filterVisible);
                            props.setApartmentsVisible(!props.apartmentsVisible);
                        }}>
                        <span>{t("close.button.label")}</span>
                        <img src={close} alt="" />
                    </button>
                </div>
            </div>
            <div className={styles.selectionSection}>
                <div className={styles.filter}>
                    <RelativeApartmentsFilter
                        setFilterVisible={props.setFilterVisible}
                        setFilterMinimized={() => {
                        }}
                        setApartmentsVisible={props.setApartmentsVisible}
                        searchedApartments={props.searchedApartments}
                        setSearchedApartments={props.setSearchedApartments}></RelativeApartmentsFilter>
                </div>
                <div className={styles.appartmentsContainer}>
                    {
                        props.searchedApartments.map((apartment) => {
                            return <div className={styles.gridItem} onClick={() => {
                                props.setFilterVisible(false);
                                props.setApartmentsVisible(false);
                                props.setSelectedFloorNumber(apartment.floorNumber)
                                props.setSelectedFlatNumber(apartment.apartmentNumber)
                                props.setFlatSectionVisible(true)
                                props.setSelectedApartment(apartment)
                                props.setApartmentsSectionInitiated(true)
                                props.setFloorPlanSectionInitiated(false)
                            }}>
                                <img style={{ objectFit: "scale-down" }}
                                    src={require("../../assets/images/apartments/".concat(apartment.pictureName))}
                                    alt="" />
                                <div className={styles.itemComponents}>
                                    <div className={styles.floorNumber}>
                                        <h3> {t("floor.label")} {apartment.floorNumber}</h3>
                                        <h3 className={styles.blueH3}>{t("flat.label")} # <span
                                            className={styles.bold}> {apartment.apartmentNumber}</span>
                                        </h3>
                                    </div>
                                    <div className={styles.squareMeter}>
                                        <h3>{Number((apartment.apartmentArea + apartment.balcony + (apartment.linkedApartment ? (apartment.linkedApartment?.apartmentArea + apartment.linkedApartment?.balcony) : 0)).toFixed(2))} {t("meter.label")}<sup>2</sup>
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        })
                    }
                </div>
            </div>
        </div>
    </div >
    )
};

export default Apartments;
