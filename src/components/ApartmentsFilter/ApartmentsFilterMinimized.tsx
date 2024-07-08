import React, {Dispatch, FC, SetStateAction} from 'react';
import styles from './ApartmentsFilter.module.css';
import Filter from '../../assets/images/filter.png';

interface ApartmentsFilterClosedProps {
    setFilterMinimized: Dispatch<SetStateAction<boolean>>
}

const ApartmentsFilterMinimized: FC<ApartmentsFilterClosedProps> = (props) => {
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
