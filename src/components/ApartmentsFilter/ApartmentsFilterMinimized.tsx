import React, {Dispatch, FC, SetStateAction, useState} from 'react';
import styles from './ApartmentsFilter.module.css';
import Filter from '../../assets/images/filter.png';

interface ApartmentsFilterClosedProps {
    setFilterMinimized: Dispatch<SetStateAction<boolean>>
}

const ApartmentsFilterMinimized: FC<ApartmentsFilterClosedProps> = (props) => {
    const [floorsVisible, setFloorsVisible] = useState<boolean>(false);
    const [areasVisible, setAreasVisible] = useState<boolean>(false);
    return (<div className={styles.ApartmentsFilterMinimized} onClick={() => {
            props.setFilterMinimized(false);
        }}>
            <div className={styles.FilterSectionMinimized}>
                    <img src={Filter} className={styles.FilterPng} alt=""/>
            </div>
        </div>
    )
};

export default ApartmentsFilterMinimized;
