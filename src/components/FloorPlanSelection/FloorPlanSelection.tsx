import React, {Dispatch, FC, SetStateAction, useEffect} from 'react';
import styles from './FloorPlanSelection.module.css';
import arrowHeadRight from '../../assets/images/arrow-head-right.png'
import arrowHeadLeft from '../../assets/images/arrow-head-left.png'
import close from '../../assets/images/close.png'
import RenderFloorOne from "../FloorRenders/RenderFloorOne/RenderFloorOne";
import RenderFloorTwo from "../FloorRenders/RenderFloorTwo/RenderFloorTwo";
import RenderFloorThree from "../FloorRenders/RenderFloorThree/RenderFloorThree";
import RenderFloorFour from "../FloorRenders/RenderFloorFour/RenderFloorFour";
import RenderFloorFive from "../FloorRenders/RenderFloorFive/RenderFloorFive";
import RenderFloorSix from "../FloorRenders/RenderFloorSix/RenderFloorSix";
import RenderFloorSeven from "../FloorRenders/RenderFloorSeven/RenderFloorSeven";
import {Apartment, Building, Floor} from "../../interfaces/Apartments";
import {useTranslation} from "react-i18next";
import i18n from "../../utils/i18n";
import {FloorData} from "../../interfaces/GeneralInterfaces";
import buildingConfig from "../../db/building.config.json";

interface FloorPlanSelectionProps {
    setFloorPlanSectionVisible: Dispatch<SetStateAction<boolean>>
    setSelectedFloorNumber: Dispatch<SetStateAction<number>>
    selectedFloorNumber: number
    setFlatSectionVisible: Dispatch<SetStateAction<boolean>>
    setSelectedFlatNumber: Dispatch<SetStateAction<number>>
    selectedFlatNumber: number
    setFilterVisible: Dispatch<SetStateAction<boolean>>
    setSelectedApartment: Dispatch<SetStateAction<Apartment | undefined>>
}

const FloorPlanSelection: FC<FloorPlanSelectionProps> = (props) => {
    const {t} = useTranslation("global")


    function getFloorData(floorNumber: number): FloorData {
        let result: FloorData = {
            apartmentsOfCurrentFloor: [],
            availableApartments: 0,
            totalApartments: 0
        }
        const building = buildingConfig as Building;
        const foundFloor = building.floors.find((floor: Floor) => {
            return floor.floorNumber === floorNumber;
        });
        if (foundFloor !== undefined) {
            result.apartmentsOfCurrentFloor = foundFloor.apartments
            result.totalApartments = foundFloor.apartments.length
            result.availableApartments = foundFloor.apartments.filter((apartment) => !apartment.sold).length
        }
        const foundDuplexApartment: Apartment | undefined = foundFloor?.apartments.find((apartment) => apartment.type === 'duplex')
        if (foundDuplexApartment !== undefined) {
            result.asTwoFloor = true
            result.floorsNumbers = [floorNumber, floorNumber + 1]
        }
        return result
    }

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

    function displaySelectedFloorRender() {
        switch (props.selectedFloorNumber) {
            case 5:
                return <RenderFloorOne
                    setFloorPlanSectionVisible={props.setFloorPlanSectionVisible}
                    setFlatSectionVisible={props.setFlatSectionVisible}
                    setSelectedApartment={props.setSelectedApartment}
                    floorData={getFloorData(5)}
                ></RenderFloorOne>;
            case 6:
                return <RenderFloorTwo
                    setFloorPlanSectionVisible={props.setFloorPlanSectionVisible}
                    setFlatSectionVisible={props.setFlatSectionVisible}
                    setSelectedApartment={props.setSelectedApartment}
                    floorData={getFloorData(6)}></RenderFloorTwo>;
            case 7:
                return <RenderFloorThree
                    setFloorPlanSectionVisible={props.setFloorPlanSectionVisible}
                    setFlatSectionVisible={props.setFlatSectionVisible}
                    setSelectedApartment={props.setSelectedApartment}
                    floorData={getFloorData(7)}
                ></RenderFloorThree>;
            case 8:
                return <RenderFloorFour
                    setFloorPlanSectionVisible={props.setFloorPlanSectionVisible}
                    setFlatSectionVisible={props.setFlatSectionVisible}
                    setSelectedApartment={props.setSelectedApartment}
                    floorData={getFloorData(8)}></RenderFloorFour>;
            case 9:
                return <RenderFloorFive
                    setFloorPlanSectionVisible={props.setFloorPlanSectionVisible}
                    setFlatSectionVisible={props.setFlatSectionVisible}
                    setSelectedApartment={props.setSelectedApartment}
                    floorData={getFloorData(9)}></RenderFloorFive>;
            case 10:
                return <RenderFloorSix
                    setFloorPlanSectionVisible={props.setFloorPlanSectionVisible}
                    setFlatSectionVisible={props.setFlatSectionVisible}
                    setSelectedApartment={props.setSelectedApartment}
                    floorData={getFloorData(10)}></RenderFloorSix>;
            case 11:
                return <RenderFloorSeven
                    setFloorPlanSectionVisible={props.setFloorPlanSectionVisible}
                    setFlatSectionVisible={props.setFlatSectionVisible}
                    setSelectedApartment={props.setSelectedApartment}
                    floorData={getFloorData(11)}></RenderFloorSeven>;
            // case 12:
            //     return <RenderFloorEight
            //         setFloorPlanSectionVisible={props.setFloorPlanSectionVisible}
            //         setFlatSectionVisible={props.setFlatSectionVisible}
            //         setSelectedApartment={props.setSelectedApartment}
            //         floorData={getFloorData(12)}></RenderFloorEight>;
            default:
                return;
        }
    }

    const handleOverlayClick = (e: { target: any; currentTarget: any; }) => {
        if (e.target === e.currentTarget) {
            props.setFloorPlanSectionVisible(false);
            props.setFilterVisible(true);
        }
    };

    return (<div className={styles.FloorPlanSelection} onClick={handleOverlayClick}>
            <div className={`${styles.floorPlanSection} ${styles.sectionContainer}`}>
                <div className={styles.floorHeader}>
                    <div className={styles.floor}>
                        <h2 className={styles.gimgGeorgianText}>{getFloorData(props.selectedFloorNumber).asTwoFloor ? getFloorData(props.selectedFloorNumber).floorsNumbers?.join('-') : props.selectedFloorNumber} {t("floor.label")}</h2>
                        <h4 className={styles.blueH3}><span
                            className={styles.nowrap}>{t("available.label")}</span> {t("apartment.label")} <span
                            className={styles.bold}>{getFloorData(props.selectedFloorNumber).availableApartments} </span>
                            <span
                                className={styles.light}>/ {getFloorData(props.selectedFloorNumber).totalApartments}
                        </span></h4>
                    </div>
                    <button className={`${styles.primaryButton} ${styles.navbarButton}  ${styles.withIcon}`}
                            onClick={() => {
                                props.setFloorPlanSectionVisible(false);
                                props.setFilterVisible(true);
                            }
                            }>
                        <h4 className={styles.nowrap}>{t("close.button.label")}</h4>
                        <img src={close} alt=""/>
                    </button>
                </div>

                <div className={styles.floorButtons}>
                    {props.selectedFloorNumber > 5 &&
                        <button className={`${styles.primaryButton} ${styles.withIcon} ${styles.leftButton}`}
                                disabled={props.selectedFloorNumber <= 5}
                                onClick={() => props.setSelectedFloorNumber(props.selectedFloorNumber - 1)}>
                            <img src={arrowHeadLeft} alt=""/>
                            <h4 className={styles.nowrap}>{props.selectedFloorNumber <= 5 ? props.selectedFloorNumber : props.selectedFloorNumber - 1} {t("floor.label")}</h4>
                        </button>
                    }
                    <hr className={styles.floorLine}/>

                    {props.selectedFloorNumber < 11 &&
                        <button className={`${styles.primaryButton} ${styles.withIcon} ${styles.rightButton}`}
                                disabled={props.selectedFloorNumber >= 11}
                                onClick={() => props.setSelectedFloorNumber(props.selectedFloorNumber + 1)}>
                            <h4 className={styles.nowrap}>{props.selectedFloorNumber >= 11 ? props.selectedFloorNumber : props.selectedFloorNumber + 1} {t("floor.label")}</h4>
                            <img src={arrowHeadRight} alt=""/>
                        </button>
                    }
                </div>
                <div className={styles.chooseApartmentLabel}>
                    <h4 className={styles.nowrap}>{t("floor.plan.selection.header")}</h4>
                </div>
                <div className={styles.floorPlan}>
                    {
                        displaySelectedFloorRender()
                    }
                </div>
            </div>
        </div>
    )
};

export default FloorPlanSelection;
