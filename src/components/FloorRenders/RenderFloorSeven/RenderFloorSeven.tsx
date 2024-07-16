import React, {Dispatch, FC, SetStateAction, useState} from 'react';
import {Apartment} from "../../../interfaces/Apartments";
import {FlatAvailabilityCondition, FloorData} from "../../../interfaces/GeneralInterfaces";
import styles from "../RenderFloorEight/RenderFloorEight.module.css";

interface RenderFloorSevenProps {
    setFloorPlanSectionVisible: Dispatch<SetStateAction<boolean>>
    setFlatSectionVisible: Dispatch<SetStateAction<boolean>>
    floorData: FloorData
    setSelectedApartment: Dispatch<SetStateAction<Apartment | undefined>>
}

const RenderFloorSeven: FC<RenderFloorSevenProps> = (props) => {

    const [duplexOneActive, setDuplexOneActive] = useState<boolean>(false);
    const [duplexTwoActive, setDuplexTwoActive] = useState<boolean>(false);

    function displaySelectedFlat(flatNumber: number, props: RenderFloorSevenProps) {
        if (getFloorAvailabilityCondition(flatNumber).sold) return;
        props.setFlatSectionVisible(true)
        props.setFloorPlanSectionVisible(false)
        props.setSelectedApartment(props.floorData.apartmentsOfCurrentFloor.find((apartment: Apartment) => apartment.apartmentNumber === flatNumber))
    }

    function getFloorAvailabilityCondition(flatNumber: number): FlatAvailabilityCondition {
        if (props.floorData.apartmentsOfCurrentFloor === undefined) {
            setTimeout(() => {
                return getFloorAvailabilityCondition(flatNumber)
            }, 1000);
        }
        const result: FlatAvailabilityCondition = {
            sold: props.floorData.apartmentsOfCurrentFloor[flatNumber - 1].sold,
            reserved: props.floorData.apartmentsOfCurrentFloor[flatNumber - 1].reserved
        }
        return result
    }

    function getFillColorBasedOnCondition(floorNumber: number, colorAvailable: string): string {
        const floorAvailabilityCondition = getFloorAvailabilityCondition(floorNumber);
        return floorAvailabilityCondition.sold ? "#640303" : (floorAvailabilityCondition.reserved ? "#967c00" : colorAvailable);
    }


    return (<>
            <svg width="1200" height="600" viewBox="0 0 1200 800" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M100 618.5L175.5 317L231 330L218.5 342.5L319.5 355.5C319.5 355.5 382.161 357.825 422 351.5C470.061 346.042 496.293 345.341 543.879 344.07L546.5 344C546.5 344 621.148 348.988 669 354.5C716.89 362.945 743.494 368.17 790.5 382C839.578 397.961 865.457 408.34 909 429L957.5 445C1007.95 453.958 1036.23 451.755 1086 438.5L1082 433L1118 417.5L1261 542.5C1231.12 565.376 1213.42 576.397 1181 592.5L1189.5 616.5C1094.81 654.458 1041.73 664.323 946.5 647.5C946.5 647.5 881.807 631.94 842.5 614C811.459 603.096 796.784 593.421 761.5 584.5C707.399 570.1 677.244 564.152 624 560C561.302 556.119 525.939 557.607 463 568.5C414.065 576.861 388.096 584.719 344.5 603C304.094 616.802 280.08 622.967 233 629C176.707 633.03 148.264 629.543 100 618.5Z"
                    fill="#001525"/>
                <path
                    d="M1260.5 542.5C1227.41 567.341 1209.55 578.867 1181 592.5L1189.5 616.5C1088.36 656.26 1031.83 664.796 931.5 643.5L936.5 612.5L992.5 620.5L993.333 571.5V561.5M1119 417.5L1082 433.5L1086 439C1035.47 455.339 1008.02 455.695 957.5 445"
                    stroke="#6A8090" strokeWidth="3"/>
                <path
                    className={styles.flatCover}
                    onClick={() => {
                        displaySelectedFlat(4, props)
                    }}
                    d="M653 537L668.5 354.5C728.108 355.52 872.504 409.141 909 428.5L881 507L854.5 497L826 578L771 561.5L713 546L696.5 542.5L653 537Z"
                    fill={getFillColorBasedOnCondition(4, "#10324C")}/>
                <path
                    className={styles.flatCover}
                    onClick={() => {
                        displaySelectedFlat(3, props)
                    }}
                    d="M505 533.003L483 346.506C532.5 342.009 621.133 348.957 669 354.503V356.003L653 536.503L616 532.003H596.5L578.5 531.503L560 532.003L505 533.003Z"
                    fill={getFillColorBasedOnCondition(3, "#142837")}/>
                <path
                    className={`${styles.flatCover} ${duplexTwoActive ? styles.duplexOn : styles.duplexOff}`}
                    onClick={() => {
                        displaySelectedFlat(2, props)
                    }}
                    onMouseEnter={() => {
                        setDuplexTwoActive(true)
                    }}
                    onMouseLeave={() => {
                        setDuplexTwoActive(false)
                    }}
                    d="M318.5 379L320 355.5C345.788 356.107 385.566 354.184 422 352C447.5 349 468.099 347.584 483.5 347L486 371L493.5 431L498 470.5L505 534L400.5 553.5L388 557.5L346.5 572L338 529L322.5 452L321 440L318.5 379Z"
                    fill={getFillColorBasedOnCondition(2, "#10324C")}/>
                <path
                    className={`${styles.flatCover} ${duplexOneActive ? styles.duplexOn : styles.duplexOff}`}
                    onClick={() => {
                        displaySelectedFlat(1, props)
                    }}
                    onMouseEnter={() => {
                        setDuplexOneActive(true)
                    }}
                    onMouseLeave={() => {
                        setDuplexOneActive(false)
                    }}
                    d="M195 484L219 342C254.5 348 273.5 349.5 319.5 355.5L318 379L321 443.5L334 508.5L346.5 572L294 591L229 604L230.5 496.5L195 484Z"
                    fill={getFillColorBasedOnCondition(1, "#142837")}/>
                <path d="M211.5 490L195.5 484L219 341.5" stroke="#6A8090" strokeWidth="3"/>
                <path d="M226 494.5L230.5 496.5L228.5 604.5L294.5 590.5L346.5 572L322.5 451L321 443.5L318.5 378L320 355"
                      stroke="#6A8090" strokeWidth="3"/>
                <path
                    d="M319.5 379.5L333.125 379.125L350 378.562M428 375L400 376.5M450.5 543.5L394.5 555.5L371.25 563.25M346.5 571.5L355.5 568.5M367.188 378.188L374 378L379 377.25"
                    stroke="#6A8090" strokeWidth="3"/>
                <path
                    d="M319.5 379.5L333.125 379.125L350 378.562M426 375L400 376.5M450.5 543.5L394.5 555.5L371.25 563.25M346.5 571.5L355.5 568.5M367.188 378.188L374 378L379 377.25"
                    stroke="#6A8090" strokeWidth="3"/>
                <path
                    d="M483.5 346.5L486.367 371M505.5 534.5L486.367 371M486.367 371C532.949 365.974 559.348 366.658 606 373"
                    stroke="#6A8090" strokeWidth="3"/>
                <path d="M386.5 449.5L390.5 464.5L436.5 454" stroke="#6A8090" strokeWidth="1.5"/>
                <path d="M374 379L384 435" stroke="#6A8090" strokeWidth="1.5"/>
                <path
                    d="M426 375L437.25 459M448.5 543L442.875 501M440.062 480L438.656 469.5M440.062 480L498 472.5M440.062 480L441.5 489"
                    stroke="#6A8090" strokeWidth="1.5"/>
                <path
                    d="M427 375L451.25 373.5M449.5 543.5L497.789 535.222C500.59 534.742 503.339 533.998 506 533V533M469.438 372.375L475.5 372L487 371"
                    stroke="#6A8090" strokeWidth="3"/>
                <path d="M310 496L314.5 516L313 516.292M278.5 523L298.5 519.111L311.5 584.5" stroke="#6A8090"
                      strokeWidth="1.5"/>
                <path d="M215.5 364L241.5 368M320 379.5L293.75 375.75M261 371L267.5 372L274.062 372.938"
                      stroke="#6A8090" strokeWidth="3"/>
                <path d="M267.5 373.5L265 417.5" stroke="#6A8090" strokeWidth="1.5"/>
                <path d="M264 434.5L265 451.5L320 440" stroke="#6A8090" strokeWidth="1.5"/>
                <path d="M265 452L265.375 455.125M266.5 464.5L274.5 503L329.5 491.5" stroke="#6A8090"
                      strokeWidth="1.5"/>
                <path
                    d="M666.5 378.5L653 536.5L618.325 532.897C615.776 532.633 613.22 532.466 610.658 532.398C603.524 532.207 587.962 531.792 577 531.5M666.5 378.5L669 354.5M666.5 378.5L636.5 375.5L629 374.75M666.5 378.5C680.532 379.966 692.681 381.569 704.036 383.5M561 531.5H549L505 533.5M599 372L606.5 372.5L614 373.25M786.5 405.5C775.142 401.72 765.013 398.473 755.5 395.652M722 386.965C727.339 388.122 732.629 389.385 738 390.775"
                    stroke="#6A8090" strokeWidth="3"/>
                <path
                    d="M713 478L714 470.5M713 478L659 474M713 478L712.238 483.5M716 457L717.664 447.5M728 388.5L717.664 447.5M704 543L710.369 497M717.664 447.5L762 461.072M801 413L783 467.5L776 465.357"
                    stroke="#6A8090" strokeWidth="1.5"/>
                <path
                    d="M606.5 372L604 414.5L603.5 429.5V435L603 448.5M600 531.5L601 490.5M601.995 476.5L602.249 469.5M602.503 462.5L602.249 469.5M602.249 469.5L658.5 474"
                    stroke="#6A8090" strokeWidth="1.5"/>
                <path d="M548.5 368V434.5L555.5 434.945M603.5 438L570.5 435.9" stroke="#6A8090" strokeWidth="1.5"/>
                <path
                    d="M785.5 405L814.125 416.25L821.281 419.062L842.75 427.5L853.5 431.725M900 450L881 507.5L854.5 496.5L826.5 578.5L782 564.557C778.647 563.492 775.391 562.474 772.219 561.5M900 450L871.375 438.75M900 450L909 427.5M653 537C686.128 541.126 709.66 544.871 735.5 551.238M761 558.136C764.633 559.197 768.364 560.316 772.219 561.5M761 558.136L772.219 561.5M761 558.136C757.586 557.139 754.26 556.193 751 555.293"
                    stroke="#6A8090" strokeWidth="3"/>
                <path d="M759 557L770.5 522" stroke="#6A8090" strokeWidth="1.5"/>
                <line x1="263.552" y1="435.264" x2="264.172" y2="420.483" stroke="white" strokeWidth="0.55175"
                      strokeDasharray="1.1 1.1"/>
                <path d="M264.271 420.706V420.706C267.127 419.739 270.23 421.25 271.229 424.094L271.675 425.363"
                      stroke="white" strokeWidth="0.55175" strokeDasharray="1.1 1.1"/>
                <rect x="262.397" y="434.682" width="14.3962" height="1.65525" rx="0.827625"
                      transform="rotate(-46.8935 262.397 434.682)" fill="#D9D9D9"/>
                <line x1="386.743" y1="449.633" x2="384.199" y2="435.06" stroke="white" strokeWidth="0.55175"
                      strokeDasharray="1.1 1.1"/>
                <path d="M384.343 435.257V435.257C386.927 433.703 390.28 434.518 391.863 437.084L392.57 438.229"
                      stroke="white" strokeWidth="0.55175" strokeDasharray="1.1 1.1"/>
                <rect x="385.491" y="449.312" width="14.3962" height="1.65525" rx="0.827625"
                      transform="rotate(-59.2018 385.491 449.312)" fill="#D9D9D9"/>
                <line x1="602.013" y1="463.242" x2="602.722" y2="448.465" stroke="white" strokeWidth="0.55175"
                      strokeDasharray="1.1 1.1"/>
                <path d="M602.82 448.689V448.689C605.682 447.738 608.775 449.268 609.757 452.119L610.195 453.39"
                      stroke="white" strokeWidth="0.55175" strokeDasharray="1.1 1.1"/>
                <rect x="600.861" y="462.653" width="14.3962" height="1.65525" rx="0.827625"
                      transform="rotate(-46.5481 600.861 462.653)" fill="#D9D9D9"/>
                <line x1="571.181" y1="435.689" x2="556.416" y2="434.759" stroke="white" strokeWidth="0.55175"
                      strokeDasharray="1.1 1.1"/>
                <path d="M556.641 434.665V434.665C555.734 431.79 557.309 428.72 560.174 427.78L561.453 427.361"
                      stroke="white" strokeWidth="0.55175" strokeDasharray="1.1 1.1"/>
                <rect x="570.575" y="436.832" width="14.3962" height="1.65525" rx="0.827625"
                      transform="rotate(-135.693 570.575 436.832)" fill="#D9D9D9"/>
                <line x1="601.013" y1="491.242" x2="601.722" y2="476.465" stroke="white" strokeWidth="0.55175"
                      strokeDasharray="1.1 1.1"/>
                <path d="M601.82 476.689V476.689C604.682 475.738 607.775 477.268 608.757 480.119L609.195 481.39"
                      stroke="white" strokeWidth="0.55175" strokeDasharray="1.1 1.1"/>
                <rect x="599.861" y="490.653" width="14.3962" height="1.65525" rx="0.827625"
                      transform="rotate(-46.5481 599.861 490.653)" fill="#D9D9D9"/>
                <line y1="-0.275875" x2="12.522" y2="-0.275875"
                      transform="matrix(-0.10605 -0.994361 0.970955 -0.239264 438.638 470.726)" stroke="white"
                      strokeWidth="0.55175" strokeDasharray="1.1 1.1"/>
                <path d="M437.196 458.492V458.492C439.295 457.056 441.974 457.55 443.054 459.573L443.633 460.657"
                      stroke="white" strokeWidth="0.55175" strokeDasharray="1.1 1.1"/>
                <rect width="12.7996" height="1.28077" rx="0.640384"
                      transform="matrix(0.507612 -0.861586 0.855949 0.517061 437.432 470.564)" fill="#D9D9D9"/>
                <line y1="-0.275875" x2="12.522" y2="-0.275875"
                      transform="matrix(-0.10605 -0.994361 0.970955 -0.239264 443.392 501.718)" stroke="white"
                      strokeWidth="0.55175" strokeDasharray="1.1 1.1"/>
                <path d="M441.95 489.484V489.484C444.048 488.048 446.727 488.542 447.808 490.565L448.387 491.649"
                      stroke="white" strokeWidth="0.55175" strokeDasharray="1.1 1.1"/>
                <rect width="12.7996" height="1.28077" rx="0.640384"
                      transform="matrix(0.507612 -0.861586 0.855949 0.517061 442.186 501.557)" fill="#D9D9D9"/>
                <line x1="716.448" y1="455.958" x2="714.604" y2="470.637" stroke="white" strokeWidth="0.55175"
                      strokeDasharray="1.1 1.1"/>
                <path d="M714.524 470.406V470.406C711.597 471.134 708.631 469.371 707.871 466.453L707.531 465.151"
                      stroke="white" strokeWidth="0.55175" strokeDasharray="1.1 1.1"/>
                <rect x="717.55" y="456.633" width="14.3962" height="1.65525" rx="0.827625"
                      transform="rotate(137.862 717.55 456.633)" fill="#D9D9D9"/>
                <line x1="776.523" y1="465.383" x2="762.429" y2="460.885" stroke="white" strokeWidth="0.55175"
                      strokeDasharray="1.1 1.1"/>
                <path d="M762.671 460.848V460.848C762.491 457.838 764.767 455.244 767.775 455.031L769.117 454.936"
                      stroke="white" strokeWidth="0.55175" strokeDasharray="1.1 1.1"/>
                <rect x="775.657" y="466.344" width="14.3962" height="1.65525" rx="0.827625"
                      transform="rotate(-121.594 775.657 466.344)" fill="#D9D9D9"/>
                <line x1="712.448" y1="482.958" x2="710.604" y2="497.637" stroke="white" strokeWidth="0.55175"
                      strokeDasharray="1.1 1.1"/>
                <path d="M710.524 497.406V497.406C707.597 498.134 704.631 496.371 703.871 493.453L703.531 492.151"
                      stroke="white" strokeWidth="0.55175" strokeDasharray="1.1 1.1"/>
                <rect x="713.55" y="483.633" width="14.3962" height="1.65525" rx="0.827625"
                      transform="rotate(137.862 713.55 483.633)" fill="#D9D9D9"/>
                <line x1="266.348" y1="467.606" x2="264.973" y2="452.876" stroke="white" strokeWidth="0.55175"
                      strokeDasharray="1.1 1.1"/>
                <path d="M265.101 453.083V453.083C267.801 451.74 271.078 452.82 272.452 455.504L273.064 456.702"
                      stroke="white" strokeWidth="0.55175" strokeDasharray="1.1 1.1"/>
                <rect x="265.125" y="467.185" width="14.3962" height="1.65525" rx="0.827625"
                      transform="rotate(-54.6306 265.125 467.185)" fill="#D9D9D9"/>
                <line x1="298.266" y1="519.449" x2="312.704" y2="516.223" stroke="white" strokeWidth="0.55175"
                      strokeDasharray="1.1 1.1"/>
                <path d="M312.514 516.377V516.377C314.188 518.885 313.531 522.273 311.042 523.975L309.932 524.734"
                      stroke="white" strokeWidth="0.55175" strokeDasharray="1.1 1.1"/>
                <rect x="298.529" y="518.183" width="14.3962" height="1.65525" rx="0.827625"
                      transform="rotate(28.1102 298.529 518.183)" fill="#D9D9D9"/>
                <path d="M993.5 562.5L873 533L853.5 583C904.71 605.8 935.345 614.167 993.5 621" stroke="#6A8090"
                      strokeWidth="3"/>
                <path d="M908 429C927.375 437.181 939.523 439.533 958.5 445L950 512" stroke="#6A8090" strokeWidth="3"/>
                <path
                    className={`${styles.flatCover} ${duplexOneActive ? styles.duplexOn : styles.duplexOff}`}
                    onClick={() => {
                        displaySelectedFlat(1, props)
                    }}
                    onMouseEnter={() => {
                        setDuplexOneActive(true)
                    }}
                    onMouseLeave={() => {
                        setDuplexOneActive(false)
                    }}
                    d="M230 261.5L252 113C296.896 118.182 332.157 120.276 367 119.318V149L368.5 163.5L369.5 188.5L372 220L373.5 259H369.5L344.5 256L333 312L287 304.5L294.5 269L230 261.5Z"
                    fill={getFillColorBasedOnCondition(1, "#142837")}/>
                <path d="M237 215.5L319.5 227.5M336 226L372 222.859L367 150" stroke="#6A8090" strokeWidth="1.5"/>
                <path
                    d="M367 149.5L315 147.096M367 149.5L368.5 168.5L374 258.495L369.5 259L344.5 256.5L333 312L287 305L295 269L230 261.5L247.5 143.5M367 149.5V120.5M247.5 143.5L252 112.5M247.5 143.5L300.5 146.324"
                    stroke="#6A8090" strokeWidth="3"/>
                <line x1="335.631" y1="226.334" x2="321.066" y2="228.932" stroke="white" strokeWidth="0.55175"
                      strokeDasharray="1.1 1.1"/>
                <path d="M321.263 228.786V228.786C319.699 226.208 320.502 222.852 323.062 221.26L324.205 220.549"
                      stroke="white" strokeWidth="0.55175" strokeDasharray="1.1 1.1"/>
                <rect x="335.313" y="227.587" width="14.3962" height="1.65525" rx="0.827625"
                      transform="rotate(-149.412 335.313 227.587)" fill="#D9D9D9"/>
                <path
                    className={`${styles.flatCover} ${duplexTwoActive ? styles.duplexOn : styles.duplexOff}`}
                    onClick={() => {
                        displaySelectedFlat(2, props)
                    }}
                    onMouseEnter={() => {
                        setDuplexTwoActive(true)
                    }}
                    onMouseLeave={() => {
                        setDuplexTwoActive(false)
                    }}
                    d="M368 148L366 131.5L366 119.369C403.655 118.46 440.617 113.988 488.5 106L505.5 204L468.5 210L473 247.5L374.5 259V254L373.5 236L372 214L370.5 195.5L368 148Z"
                    fill={getFillColorBasedOnCondition(2, "#10324C")}/>
                <path d="M411.5 219.5L373 222.859L368 150M426.5 218H435L426.5 145.5" stroke="#6A8090"
                      strokeWidth="1.5"/>
                <path
                    d="M488 105L493.364 135.5M493.364 135.5L505.5 204.5L468 210.5L473 247.5L375 258.495L369.5 168.5L368 149.5M493.364 135.5L480.682 136.997M368 149.5L385 148.289M368 149.5L366 120.5M396.5 146.932L468 138.493"
                    stroke="#6A8090" strokeWidth="3"/>
                <line x1="426.631" y1="218.334" x2="412.066" y2="220.932" stroke="white" strokeWidth="0.55175"
                      strokeDasharray="1.1 1.1"/>
                <path d="M412.263 220.786V220.786C410.699 218.208 411.502 214.852 414.062 213.26L415.205 212.549"
                      stroke="white" strokeWidth="0.55175" strokeDasharray="1.1 1.1"/>
                <rect x="426.313" y="219.587" width="14.3962" height="1.65525" rx="0.827625"
                      transform="rotate(-149.412 426.313 219.587)" fill="#D9D9D9"/>
            </svg>
        </>
    )
};

export default RenderFloorSeven;
