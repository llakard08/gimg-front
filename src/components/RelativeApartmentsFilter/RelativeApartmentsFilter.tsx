import React, {Dispatch, FC, SetStateAction, useEffect, useState} from 'react';
import styles from './RelativeApartmentsFilter.module.css';
import ArrowDown from "../../assets/images/arrow-downVector.png";
import Filter from '../../assets/images/filter.png';
import buildingConfig from "../../db/building.config.json"
import {Apartment, Building} from "../../interfaces/Apartments";
import ReactSlider from "react-slider";
import {useTranslation} from "react-i18next";
import i18n from "../../utils/i18n";
import {LastSearchInputs} from "../../interfaces/LastSearchInputs";

interface ApartmentsFilterProps {
    setFilterVisible: Dispatch<SetStateAction<boolean>>
    setFilterMinimized: Dispatch<SetStateAction<boolean>>
    setApartmentsVisible: Dispatch<SetStateAction<boolean>>

    setSearchedApartments: Dispatch<SetStateAction<Apartment[]>>
    searchedApartments: Apartment[]
}

const RelativeApartmentsFilter: FC<ApartmentsFilterProps> = (props) => {
    const [floorsVisible, setFloorsVisible] = useState<boolean>(true);
    const [sliderVisible, setSliderVisible] = useState<boolean>(true);
    const [areasVisible, setAreasVisible] = useState<boolean>(true);
    const [standardSelected, setStandardSelected] = useState<boolean>(false);
    const [duplexSelected, setDuplexSelected] = useState<boolean>(false);
    const [standardApartmentAreas, setStandardApartmentAreas] = useState<number[]>([]);
    const [duplexApartmentAreas, setDuplexApartmentAreas] = useState<number[]>([]);
    const [apartmentAreasToDisplay, setApartmentAreasToDisplay] = useState<number[]>([]);
    const [selectedFloors, setSelectedFloors] = useState<boolean[]>([false, false, false, false, false, false, false, false]);
    const [selectedFloorsQuantity, setSelectedFloorsQuantity] = useState<number>(0);
    const [selectedAreas, setSelectedAreas] = useState<boolean[]>([]);
    const [selectedApartmentType, setSelectedApartmentType] = useState<string | undefined>(undefined);
    const [errorMessage, setErrorMessage] = useState<string | undefined>(undefined)
    // Initialize state for the range slider values
    const [rangeValues, setRangeValues] = useState([0, 100]);
    const {t} = useTranslation("global")
    // Handle slider value change
    const handleSliderChange = (values: React.SetStateAction<number[]>) => {
        setRangeValues(values);
    };
    const handleLanguageChange = (lang: string) => {
        i18n.changeLanguage(lang.toLowerCase());
        localStorage.setItem("selectedLanguage", lang);
    }

    useEffect(() => {
        const building = buildingConfig as Building;
        setRangeValues([building.minPrice, building.maxPrice]);
        getAvailableApartmentAreas();
        const item = localStorage.getItem("selectedLanguage");
        if (item !== undefined && item !== null) {
            handleLanguageChange(item)
        }
        const lastSearchInputJson = localStorage.getItem("lastSearchInput");
        if (lastSearchInputJson !== undefined && lastSearchInputJson !== null) {
            const lastSearchInput: LastSearchInputs = JSON.parse(lastSearchInputJson)
            setSelectedAreas(lastSearchInput.selectedAreas)
            setSelectedFloorsQuantity(lastSearchInput.selectedFloorsQuantity)
            setSelectedFloors(lastSearchInput.selectedFloors)
            lastSearchInput.selectedType === 'standard' ? setStandardSelected(true) : setDuplexSelected(true);
        }
    }, [])

    function clearSearchInputs() {
        setSelectedAreas((prevState) => {
            let newState = [...prevState];
            newState.forEach((areaState, index) => {
                newState[index] = false;
            })
            return newState;
        })
        setSelectedFloors((prevState) => {
            let newState = [...prevState];
            newState.forEach((areaState, index) => {
                newState[index] = false;
            })
            return newState;
        })
        setSelectedFloorsQuantity(0)
        setStandardSelected(false)
        setDuplexSelected(false)
        localStorage.removeItem("lastSearchInput")
    }

    function searchForApartmentsBasedOnFilter() {
        const building = buildingConfig as Building;
        const areasToDisplaySet = new Set(apartmentAreasToDisplay);
        let result: Apartment[] = []
        building.floors.forEach((floor) => {
            if (selectedFloors[floor.floorNumber - 1]) {
                floor.apartments.forEach((apartment) => {
                    const totalArea: number = Number((apartment.apartmentArea + apartment.balcony).toFixed(2));
                    if (areasToDisplaySet.has(totalArea)) {
                        const index = apartmentAreasToDisplay.indexOf(totalArea);
                        if (selectedAreas[index]) {
                            if (apartment.price >= rangeValues[0] && apartment.price <= rangeValues[1]) {
                                result.push(apartment);
                            }
                        }
                    }
                })
            }
        })
        if (result.length === 0) {
            setErrorMessage('Apartments by your description do not exist')
        } else {
            let lastSearchInput: LastSearchInputs = {
                selectedType: 'standard',
                selectedFloors: selectedFloors,
                selectedFloorsQuantity: selectedFloorsQuantity,
                selectedAreas: selectedAreas,
                selectedPriceRange: {
                    low: rangeValues[0],
                    high: rangeValues[1]
                }
            }
            localStorage.setItem("lastSearchInput", JSON.stringify(lastSearchInput))
            props.setSearchedApartments(result)
        }
    }

    function getAvailableApartmentAreas() {
        const availableStandardApartmentAreasSet: Set<number> = new Set();
        const availableDuplexApartmentAreasSet: Set<number> = new Set();
        const building = buildingConfig as Building;
        building.floors.forEach((floor) => {
            floor.apartments.forEach((apartment) => {
                if (!apartment.sold) {
                    if (apartment.type === 'standard') {
                        availableStandardApartmentAreasSet.add(Number((apartment.apartmentArea + apartment.balcony).toFixed(2)))
                    }
                    if (apartment.type === 'duplex') {
                        availableDuplexApartmentAreasSet.add(Number((apartment.apartmentArea + apartment.balcony
                            + (apartment.linkedApartment ? (apartment.linkedApartment?.apartmentArea + apartment.linkedApartment?.balcony) : 0)).toFixed(2)))
                    }
                }
            })
        })

        setStandardApartmentAreas((prevState) => {
            let availableStandardApartmentAreas: number[] = Array.from(availableStandardApartmentAreasSet)
            availableStandardApartmentAreas = availableStandardApartmentAreas.sort((a, b) => a - b);
            const clone = [...availableStandardApartmentAreas]
            setApartmentAreasToDisplay(clone)
            return clone;
        })
        const availableDuplexApartmentAreas: number[] = Array.from(availableDuplexApartmentAreasSet)
        availableDuplexApartmentAreas.sort((a, b) => a - b);
        setDuplexApartmentAreas(availableDuplexApartmentAreas)
    }

    return (<div className={styles.ApartmentsFilter}>
            <div className={styles.FilterSection}>
                <div className={`${styles.FilterDiv} ${styles.content}`} onClick={() => {
                    props.setFilterMinimized(true)
                }}>
                    <h4>{t("filter.header.find.fast.label")}</h4>
                    <img src={Filter} className={styles.FilterPng} alt=""/>
                </div>
                <div className={`${styles.FilterDiv} ${styles.content}`}>
                    <button
                        className={standardSelected ? styles.ButtonBlue : `${styles.ButtonBlue} ${styles.ButtonLight}`}
                        onClick={() => {
                            setStandardSelected(true);
                            setDuplexSelected(false);
                            setSelectedApartmentType('standard');
                            setApartmentAreasToDisplay(standardApartmentAreas)
                            setSelectedAreas(() => {
                                const newState: boolean[] = [];
                                apartmentAreasToDisplay.forEach((apartment) => newState.push(false));
                                return newState;
                            })
                        }}>
                        <h4>{t("filter.standard.label")}</h4>
                    </button>
                    <button
                        className={duplexSelected ? styles.ButtonBlue : `${styles.ButtonBlue} ${styles.ButtonLight}`}
                        onClick={() => {
                            setStandardSelected(false);
                            setDuplexSelected(true);
                            setSelectedApartmentType('duplex');
                            setApartmentAreasToDisplay(duplexApartmentAreas)
                            setSelectedAreas(() => {
                                const newState: boolean[] = [];
                                duplexApartmentAreas.forEach((apartment) => newState.push(false));
                                return newState;
                            })
                        }}>
                        <h4>{t("filter.duplex.label")}</h4>
                    </button>
                </div>
                <div className={styles.FilterDiv}>
                    <div className={styles.content} onClick={() => {
                        setSliderVisible(!sliderVisible)
                    }}>
                        <p>{t("filter.desired.price.label")}</p>
                        <img src={ArrowDown} alt=""/>
                    </div>
                    <div className={styles.slider} style={{display: sliderVisible ? "flex" : "none"}}>
                        <ReactSlider
                            className="horizontal-slider"
                            thumbClassName="thumb"
                            trackClassName="track"
                            min={0}
                            max={4000}
                            value={rangeValues}
                            onChange={handleSliderChange}

                            pearling
                            ariaLabel={['Lower thumb', 'Upper thumb']}
                            renderThumb={(props, state) => (
                                <div {...props}>
                                    <div key={props.key} className="thumb-value">{state.valueNow}</div>
                                </div>
                            )}
                        />
                    </div>
                </div>
                <div className={styles.FilterDiv}>
                    <div className={styles.content} onClick={() => {
                        setFloorsVisible(!floorsVisible)
                    }}>
                        <div className={styles.FloorNumber}>
                            <p>{t("filter.choose.floor.label")}</p>
                            {
                                selectedFloorsQuantity === 0 ? <></> : <div>{selectedFloorsQuantity}</div>
                            }
                        </div>
                        <img src={ArrowDown} alt=""/>

                    </div>
                    <div className={styles.selectFloor} style={{display: floorsVisible ? "flex" : "none"}}>
                        {
                            selectedFloors.map((value, index) => {
                                return <div key={index}
                                            className={selectedFloors[index] ? styles.numberItemSelected : styles.numberItem}
                                            onClick={() => {
                                                setSelectedFloors((prevState) => {
                                                    const newStates = [...prevState]
                                                    newStates[index] = !newStates[index];
                                                    let selectedQuantity = 0;
                                                    newStates.forEach((selected) => {
                                                        if (selected) {
                                                            selectedQuantity++;
                                                        }
                                                    });
                                                    setSelectedFloorsQuantity(selectedQuantity)
                                                    return newStates;
                                                })
                                            }}>{index + 5}
                                </div>;
                            })
                        }
                    </div>
                </div>
                <div className={styles.FilterDiv}>
                    <div className={styles.content} onClick={() => {
                        setAreasVisible(!areasVisible)
                    }}>
                        <p>{t("filter.area.label")}</p>
                        <img src={ArrowDown} alt=""/>
                    </div>
                    <div className={styles.areaItemContainer} style={{display: areasVisible ? "flex" : "none"}}>
                        {
                            (apartmentAreasToDisplay).map((apartmentArea, index) => {
                                return (
                                    <div key={apartmentArea}
                                         className={selectedAreas[index] ? styles.areaItemsSelected : styles.areaItems}
                                         onClick={() => {
                                             setSelectedAreas((prevState) => {
                                                 const newStates = [...prevState]
                                                 newStates[index] = !newStates[index];
                                                 return newStates;
                                             })
                                         }}>{apartmentArea} მ<sup>2</sup>
                                    </div>);
                            })
                        }
                    </div>
                </div>
            </div>
            {/*{errorMessage && <div>{errorMessage}</div>*/}

            {/*}*/}
            <div className={styles.filterButtons}>
                <button className={`${styles.clear}`} onClick={() => {
                    clearSearchInputs()
                }}>
                    {t("filter.clear.button.label")}
                </button>
                <button className={`${styles.ButtonBlue} ${styles.Button}`} onClick={() => {
                    setErrorMessage(undefined)
                    setSelectedAreas((prevState) => {
                        let newState = [...prevState];
                        newState.forEach((areaState, index) => {
                            newState[index] = false;
                        })
                        return newState;
                    })
                    searchForApartmentsBasedOnFilter();
                    if (!errorMessage) {
                        props.setFilterVisible(false)
                        props.setApartmentsVisible(true);
                    }
                }}>
                    {t("filter.search.button.label")}
                </button>
            </div>

        </div>
    )
};

export default RelativeApartmentsFilter;
