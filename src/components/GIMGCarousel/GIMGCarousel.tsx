import React, {FC} from 'react';
import styles from './GIMGCarousel.module.css';
import carousel1 from '../../assets/images/carousel-1.png'
import carousel2 from '../../assets/images/carousel-2.png'
import carousel3 from '../../assets/images/carousel-3.png'
import carousel4 from '../../assets/images/carousel-4.png'
import carousel5 from '../../assets/images/carousel-5.png'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

interface GIMGCarouselProps {
}

const GIMGCarousel: FC<GIMGCarouselProps> = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: {max: 4000, min: 1920},
            items: 3
        },
        desktop: {
            breakpoint: {max: 1920, min: 1024},
            items: 3
        },
        tablet: {
            breakpoint: {max: 1024, min: 768},
            items: 3
        },
        mobile: {
            breakpoint: {max: 768, min: 0},
            items: 1
        }
    };
    return <div className={styles.GIMGCarousel}>
        <Carousel
            arrows={false}
            swipeable={true}
            showDots={true}
            responsive={responsive}
            infinite={true}
            centerMode={true}
            minimumTouchDrag={10}
            focusOnSelect={true}

            itemClass={styles.carouselItem}
            containerClass={styles.carouselList}
            dotListClass={styles.dots}>
            <div>
                <img className={styles.carouselImg} src={carousel1} alt=""/>
            </div>
            <div>
                <img className={styles.carouselImg} src={carousel2} alt=""/>
            </div>
            <div>
                <img className={styles.carouselImg} src={carousel3} alt=""/>
            </div>
            <div>
                <img className={styles.carouselImg} src={carousel4} alt=""/>
            </div>
            <div>
                <img className={styles.carouselImg} src={carousel5} alt=""/>
            </div>
        </Carousel>
    </div>
};

export default GIMGCarousel;
