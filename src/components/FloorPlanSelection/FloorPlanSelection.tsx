import React, {Dispatch, FC, SetStateAction, useEffect, useState} from 'react';
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
import RenderFloorEight from "../FloorRenders/RenderFloorEight/RenderFloorEight";
import buildingConfig from "../../db/building.config.json";
import {Apartment, Building, Floor} from "../../interfaces/Apartments";
import {useTranslation} from "react-i18next";
import i18n from "../../utils/i18n";

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

    const [buildingFloors, setBuildingFloors] = useState<Floor[]>([]);

    function loadBuildingFloors() {
        const building = buildingConfig as Building;
        setBuildingFloors(building.floors)
    }

    const handleLanguageChange = (lang: string) => {
        i18n.changeLanguage(lang.toLowerCase());
        localStorage.setItem("selectedLanguage", lang);
    }

    useEffect(() => {
        loadBuildingFloors()
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
                    apartmentsOfCurrentFloor={buildingFloors.find((floor: Floor) => floor.floorNumber === 5)?.apartments!}
                    setSelectedApartment={props.setSelectedApartment}
                ></RenderFloorOne>;
            case 6:
                return <RenderFloorTwo
                    setFloorPlanSectionVisible={props.setFloorPlanSectionVisible}
                    setFlatSectionVisible={props.setFlatSectionVisible}
                    setSelectedApartment={props.setSelectedApartment}
                    apartmentsOfCurrentFloor={buildingFloors.find((floor: Floor) => floor.floorNumber === 6)?.apartments!}></RenderFloorTwo>;
            case 7:
                return <RenderFloorThree
                    setFloorPlanSectionVisible={props.setFloorPlanSectionVisible}
                    setFlatSectionVisible={props.setFlatSectionVisible}
                    setSelectedApartment={props.setSelectedApartment}
                    apartmentsOfCurrentFloor={buildingFloors.find((floor: Floor) => floor.floorNumber === 7)?.apartments!}></RenderFloorThree>;
            case 8:
                return <RenderFloorFour
                    setFloorPlanSectionVisible={props.setFloorPlanSectionVisible}
                    setFlatSectionVisible={props.setFlatSectionVisible}
                    setSelectedApartment={props.setSelectedApartment}
                    apartmentsOfCurrentFloor={buildingFloors.find((floor: Floor) => floor.floorNumber === 8)?.apartments!}></RenderFloorFour>;
            case 9:
                return <RenderFloorFive
                    setFloorPlanSectionVisible={props.setFloorPlanSectionVisible}
                    setFlatSectionVisible={props.setFlatSectionVisible}
                    setSelectedApartment={props.setSelectedApartment}
                    apartmentsOfCurrentFloor={buildingFloors.find((floor: Floor) => floor.floorNumber === 9)?.apartments!}></RenderFloorFive>;
            case 10:
                return <RenderFloorSix
                    setFloorPlanSectionVisible={props.setFloorPlanSectionVisible}
                    setFlatSectionVisible={props.setFlatSectionVisible}
                    setSelectedApartment={props.setSelectedApartment}
                    apartmentsOfCurrentFloor={buildingFloors.find((floor: Floor) => floor.floorNumber === 10)?.apartments!}></RenderFloorSix>;
            case 11:
                return <RenderFloorSeven
                    setFloorPlanSectionVisible={props.setFloorPlanSectionVisible}
                    setFlatSectionVisible={props.setFlatSectionVisible}
                    setSelectedApartment={props.setSelectedApartment}
                    apartmentsOfCurrentFloor={buildingFloors.find((floor: Floor) => floor.floorNumber === 11)?.apartments!}></RenderFloorSeven>;
            case 12:
                return <RenderFloorEight
                    setFloorPlanSectionVisible={props.setFloorPlanSectionVisible}
                    setFlatSectionVisible={props.setFlatSectionVisible}
                    setSelectedApartment={props.setSelectedApartment}
                    apartmentsOfCurrentFloor={buildingFloors.find((floor: Floor) => floor.floorNumber === 12)?.apartments!}></RenderFloorEight>;
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
                        <h2 className={styles.gimgGeorgianText}>{props.selectedFloorNumber} {t("floor.label")}</h2>
                        <h4 className={styles.blueH3}><span
                            className={styles.nowrap}>{t("available.label")}</span> {t("apartment.label")} <span
                            className={styles.bold}>{4} </span>
                            <span
                                className={styles.light}>/ {5}
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

                    <button className={`${styles.primaryButton} ${styles.withIcon}`}
                            disabled={props.selectedFloorNumber <= 5}
                            onClick={() => props.setSelectedFloorNumber(props.selectedFloorNumber - 1)}>
                        <img src={arrowHeadLeft} alt=""/>
                        <h4 className={styles.nowrap}>{props.selectedFloorNumber <= 5 ? props.selectedFloorNumber : props.selectedFloorNumber - 1} {t("floor.label")}</h4>
                    </button>
                    <hr className={styles.floorLine}/>

                    <button className={`${styles.primaryButton} ${styles.withIcon}`}
                            disabled={props.selectedFloorNumber >= 12}
                            onClick={() => props.setSelectedFloorNumber(props.selectedFloorNumber + 1)}>
                        <h4 className={styles.nowrap}>{props.selectedFloorNumber >= 12 ? props.selectedFloorNumber : props.selectedFloorNumber + 1} {t("floor.label")}</h4>
                        <img src={arrowHeadRight} alt=""/>
                    </button>
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
