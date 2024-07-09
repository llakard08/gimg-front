import React, {Dispatch, FC, SetStateAction} from 'react';
import styles from './RenderFloorEight.module.css';
import {Apartment} from "../../../interfaces/Apartments";
import {FloorData} from "../../../interfaces/GeneralInterfaces";

interface RenderFloorEightProps {
    setFloorPlanSectionVisible: Dispatch<SetStateAction<boolean>>
    setFlatSectionVisible: Dispatch<SetStateAction<boolean>>
    floorData: FloorData
    setSelectedApartment: Dispatch<SetStateAction<Apartment | undefined>>
}

const RenderFloorEight: FC<RenderFloorEightProps> = (props) => {
    function displaySelectedFlat(flatNumber: number, props: RenderFloorEightProps) {
        if(isApartmentSold(flatNumber)) return;
        props.setFlatSectionVisible(true)
        props.setFloorPlanSectionVisible(false)
        props.setSelectedApartment(props.floorData.apartmentsOfCurrentFloor.find((apartment: Apartment) => apartment.apartmentNumber === flatNumber))
    }

    function isApartmentSold(flatNumber: number) {
        if (props.floorData.apartmentsOfCurrentFloor === undefined) {
            setTimeout(() => {
                return isApartmentSold(flatNumber)
            }, 1000);
        } else {
            return props.floorData.apartmentsOfCurrentFloor[flatNumber - 1].sold
        }
    }

    return (<>
            <svg width="1162" height="342" viewBox="0 0 1162 342" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M0 301.5L75.5 0L131 13L118.5 25.5L219.5 38.5C219.5 38.5 282.161 40.8251 322 34.5C370.061 29.0423 396.293 28.3414 443.879 27.0701L446.5 27C446.5 27 521.148 31.9876 569 37.5C616.89 45.9447 643.494 51.1699 690.5 65C739.578 80.9608 765.457 91.3399 809 112L857.5 128C907.953 136.958 936.227 134.755 986 121.5L982 116L1018 100.5L1161 225.5C1131.12 248.376 1113.42 259.397 1081 275.5L1089.5 299.5C994.807 337.458 941.734 347.323 846.5 330.5C846.5 330.5 781.807 314.94 742.5 297C711.459 286.096 696.784 276.421 661.5 267.5C607.399 253.1 577.244 247.152 524 243C461.302 239.119 425.939 240.607 363 251.5C314.065 259.861 288.096 267.719 244.5 286C204.094 299.802 180.08 305.967 133 312C76.7069 316.03 48.2644 312.543 0 301.5Z"
                    fill="#001525"/>
                <path
                    d="M1160.5 225.5C1127.41 250.341 1109.55 261.867 1081 275.5L1089.5 299.5C988.356 339.26 931.833 347.796 831.5 326.5L836.5 295.5L892.5 303.5L893.333 254.5V244.5M1019 100.5L982 116.5L986 122C935.474 138.339 908.021 138.695 857.5 128"
                    stroke="#6A8090" strokeWidth="3"/>
                <path className={styles.flatCover}
                      onClick={() => {
                          displaySelectedFlat(4, props)
                      }}
                      d="M553 220L568.5 37.5C628.108 38.5196 772.504 92.141 809 111.5L781 190L754.5 180L726 261L671 244.5L613 229L596.5 225.5L553 220Z"
                      fill={isApartmentSold(1) ? "#640303" : "#10324C"}/>
                <path className={styles.flatCover}
                      onClick={() => {
                          displaySelectedFlat(3, props)
                      }}
                      d="M405 216.003L383 29.5061C432.5 25.0092 521.133 31.9565 569 37.5031V39.0031L553 219.503L516 215.003H496.5L478.5 214.503L460 215.003L405 216.003Z"
                      fill={isApartmentSold(3) ? "#640303" : "#142837"}/>
                <path className={styles.flatCover}
                      onClick={() => {
                          displaySelectedFlat(2, props)
                      }}
                      d="M218.5 62L220 38.5C245.788 39.1068 285.566 37.1836 322 35C347.5 32 368.099 30.5844 383.5 30L386 54L393.5 114L398 153.5L405 217L300.5 236.5L288 240.5L246.5 255L238 212L222.5 135L221 123L218.5 62Z"
                      fill={isApartmentSold(1) ? "#640303" : "#10324C"}/>
                <path className={styles.flatCover}
                      onClick={() => {
                          displaySelectedFlat(1, props)
                      }}
                      d="M95 167L119 25C154.5 31 173.5 32.5 219.5 38.5L218 62L221 126.5L234 191.5L246.5 255L194 274L129 287L130.5 179.5L95 167Z"
                      fill={isApartmentSold(1) ? "#640303" : "#142837"}/>
                <path d="M111.5 173L95.5 167L119 24.5" stroke="#6A8090" strokeWidth="3"/>
                <path d="M126 177.5L130.5 179.5L128.5 287.5L194.5 273.5L246.5 255L222.5 134L221 126.5L218.5 61L220 38"
                      stroke="#6A8090" strokeWidth="3"/>
                <path
                    d="M219.5 62.5L233.125 62.125L250 61.5625M328 58L300 59.5M350.5 226.5L294.5 238.5L271.25 246.25M246.5 254.5L255.5 251.5M267.188 61.1875L274 61L279 60.25"
                    stroke="#6A8090" strokeWidth="3"/>
                <path
                    d="M219.5 62.5L233.125 62.125L250 61.5625M326 58L300 59.5M350.5 226.5L294.5 238.5L271.25 246.25M246.5 254.5L255.5 251.5M267.188 61.1875L274 61L279 60.25"
                    stroke="#6A8090" strokeWidth="3"/>
                <path
                    d="M383.5 29.5L386.367 54M405.5 217.5L386.367 54M386.367 54C432.949 48.9744 459.348 49.6579 506 56"
                    stroke="#6A8090" strokeWidth="3"/>
                <path d="M286.5 132.5L290.5 147.5L336.5 137" stroke="#6A8090" strokeWidth="1.5"/>
                <path d="M274 62L284 118" stroke="#6A8090" strokeWidth="1.5"/>
                <path
                    d="M326 58L337.25 142M348.5 226L342.875 184M340.062 163L338.656 152.5M340.062 163L398 155.5M340.062 163L341.5 172"
                    stroke="#6A8090" strokeWidth="1.5"/>
                <path
                    d="M327 58L351.25 56.5M349.5 226.5L397.789 218.222C400.59 217.742 403.339 216.998 406 216V216M369.438 55.375L375.5 55L387 54"
                    stroke="#6A8090" strokeWidth="3"/>
                <path d="M210 179L214.5 199L213 199.292M178.5 206L198.5 202.111L211.5 267.5" stroke="#6A8090"
                      strokeWidth="1.5"/>
                <path d="M115.5 47L141.5 51M220 62.5L193.75 58.75M161 54L167.5 55L174.062 55.9375" stroke="#6A8090"
                      strokeWidth="3"/>
                <path d="M167.5 56.5L165 100.5" stroke="#6A8090" strokeWidth="1.5"/>
                <path d="M164 117.5L165 134.5L220 123" stroke="#6A8090" strokeWidth="1.5"/>
                <path d="M165 135L165.375 138.125M166.5 147.5L174.5 186L229.5 174.5" stroke="#6A8090"
                      strokeWidth="1.5"/>
                <path
                    d="M566.5 61.5L553 219.5L518.325 215.897C515.776 215.633 513.22 215.466 510.658 215.398C503.524 215.207 487.962 214.792 477 214.5M566.5 61.5L569 37.5M566.5 61.5L536.5 58.5L529 57.75M566.5 61.5C580.532 62.9659 592.681 64.5689 604.036 66.5M461 214.5H449L405 216.5M499 55L506.5 55.5L514 56.25M686.5 88.5C675.142 84.7198 665.013 81.4729 655.5 78.6521M622 69.9653C627.339 71.1223 632.629 72.3845 638 73.7749"
                    stroke="#6A8090" strokeWidth="3"/>
                <path
                    d="M613 161L614 153.5M613 161L559 157M613 161L612.238 166.5M616 140L617.664 130.5M628 71.5L617.664 130.5M604 226L610.369 180M617.664 130.5L662 144.072M701 96L683 150.5L676 148.357"
                    stroke="#6A8090" strokeWidth="1.5"/>
                <path
                    d="M506.5 55L504 97.5L503.5 112.5V118L503 131.5M500 214.5L501 173.5M501.995 159.5L502.249 152.5M502.503 145.5L502.249 152.5M502.249 152.5L558.5 157"
                    stroke="#6A8090" strokeWidth="1.5"/>
                <path d="M448.5 51V117.5L455.5 117.945M503.5 121L470.5 118.9" stroke="#6A8090" strokeWidth="1.5"/>
                <path
                    d="M685.5 88L714.125 99.25L721.281 102.062L742.75 110.5L753.5 114.725M800 133L781 190.5L754.5 179.5L726.5 261.5L682 247.557C678.647 246.492 675.391 245.474 672.219 244.5M800 133L771.375 121.75M800 133L809 110.5M553 220C586.128 224.126 609.66 227.871 635.5 234.238M661 241.136C664.633 242.197 668.364 243.316 672.219 244.5M661 241.136L672.219 244.5M661 241.136C657.586 240.139 654.26 239.193 651 238.293"
                    stroke="#6A8090" strokeWidth="3"/>
                <path d="M659 240L670.5 205" stroke="#6A8090" strokeWidth="1.5"/>
                <line x1="163.552" y1="118.264" x2="164.172" y2="103.483" stroke="white" strokeWidth="0.55175"
                      strokeDasharray="1.1 1.1"/>
                <path d="M164.271 103.706V103.706C167.127 102.739 170.23 104.25 171.229 107.094L171.675 108.363"
                      stroke="white" strokeWidth="0.55175" strokeDasharray="1.1 1.1"/>
                <rect x="162.397" y="117.682" width="14.3962" height="1.65525" rx="0.827625"
                      transform="rotate(-46.8935 162.397 117.682)" fill="#D9D9D9"/>
                <line x1="286.743" y1="132.633" x2="284.199" y2="118.06" stroke="white" strokeWidth="0.55175"
                      strokeDasharray="1.1 1.1"/>
                <path d="M284.343 118.257V118.257C286.927 116.703 290.28 117.518 291.863 120.084L292.57 121.229"
                      stroke="white" strokeWidth="0.55175" strokeDasharray="1.1 1.1"/>
                <rect x="285.491" y="132.312" width="14.3962" height="1.65525" rx="0.827625"
                      transform="rotate(-59.2018 285.491 132.312)" fill="#D9D9D9"/>
                <line x1="502.013" y1="146.242" x2="502.722" y2="131.465" stroke="white" strokeWidth="0.55175"
                      strokeDasharray="1.1 1.1"/>
                <path d="M502.82 131.689V131.689C505.682 130.738 508.775 132.268 509.757 135.119L510.195 136.39"
                      stroke="white" strokeWidth="0.55175" strokeDasharray="1.1 1.1"/>
                <rect x="500.861" y="145.653" width="14.3962" height="1.65525" rx="0.827625"
                      transform="rotate(-46.5481 500.861 145.653)" fill="#D9D9D9"/>
                <line x1="471.181" y1="118.689" x2="456.416" y2="117.759" stroke="white" strokeWidth="0.55175"
                      strokeDasharray="1.1 1.1"/>
                <path d="M456.641 117.665V117.665C455.734 114.79 457.309 111.72 460.174 110.78L461.453 110.361"
                      stroke="white" strokeWidth="0.55175" strokeDasharray="1.1 1.1"/>
                <rect x="470.575" y="119.832" width="14.3962" height="1.65525" rx="0.827625"
                      transform="rotate(-135.693 470.575 119.832)" fill="#D9D9D9"/>
                <line x1="501.013" y1="174.242" x2="501.722" y2="159.465" stroke="white" strokeWidth="0.55175"
                      strokeDasharray="1.1 1.1"/>
                <path d="M501.82 159.689V159.689C504.682 158.738 507.775 160.268 508.757 163.119L509.195 164.39"
                      stroke="white" strokeWidth="0.55175" strokeDasharray="1.1 1.1"/>
                <rect x="499.861" y="173.653" width="14.3962" height="1.65525" rx="0.827625"
                      transform="rotate(-46.5481 499.861 173.653)" fill="#D9D9D9"/>
                <line y1="-0.275875" x2="12.522" y2="-0.275875"
                      transform="matrix(-0.10605 -0.994361 0.970955 -0.239264 338.638 153.726)" stroke="white"
                      strokeWidth="0.55175" strokeDasharray="1.1 1.1"/>
                <path d="M337.196 141.492V141.492C339.295 140.056 341.974 140.55 343.054 142.573L343.633 143.657"
                      stroke="white" strokeWidth="0.55175" strokeDasharray="1.1 1.1"/>
                <rect width="12.7996" height="1.28077" rx="0.640384"
                      transform="matrix(0.507612 -0.861586 0.855949 0.517061 337.432 153.564)" fill="#D9D9D9"/>
                <line y1="-0.275875" x2="12.522" y2="-0.275875"
                      transform="matrix(-0.10605 -0.994361 0.970955 -0.239264 343.392 184.718)" stroke="white"
                      strokeWidth="0.55175" strokeDasharray="1.1 1.1"/>
                <path d="M341.95 172.484V172.484C344.048 171.048 346.727 171.542 347.808 173.565L348.387 174.649"
                      stroke="white" strokeWidth="0.55175" strokeDasharray="1.1 1.1"/>
                <rect width="12.7996" height="1.28077" rx="0.640384"
                      transform="matrix(0.507612 -0.861586 0.855949 0.517061 342.186 184.557)" fill="#D9D9D9"/>
                <line x1="616.448" y1="138.958" x2="614.604" y2="153.637" stroke="white" strokeWidth="0.55175"
                      strokeDasharray="1.1 1.1"/>
                <path d="M614.524 153.406V153.406C611.597 154.134 608.631 152.371 607.871 149.453L607.531 148.151"
                      stroke="white" strokeWidth="0.55175" strokeDasharray="1.1 1.1"/>
                <rect x="617.55" y="139.633" width="14.3962" height="1.65525" rx="0.827625"
                      transform="rotate(137.862 617.55 139.633)" fill="#D9D9D9"/>
                <line x1="676.523" y1="148.383" x2="662.429" y2="143.885" stroke="white" strokeWidth="0.55175"
                      strokeDasharray="1.1 1.1"/>
                <path d="M662.671 143.848V143.848C662.491 140.838 664.767 138.244 667.775 138.031L669.117 137.936"
                      stroke="white" strokeWidth="0.55175" strokeDasharray="1.1 1.1"/>
                <rect x="675.657" y="149.344" width="14.3962" height="1.65525" rx="0.827625"
                      transform="rotate(-121.594 675.657 149.344)" fill="#D9D9D9"/>
                <line x1="612.448" y1="165.958" x2="610.604" y2="180.637" stroke="white" strokeWidth="0.55175"
                      strokeDasharray="1.1 1.1"/>
                <path d="M610.524 180.406V180.406C607.597 181.134 604.631 179.371 603.871 176.453L603.531 175.151"
                      stroke="white" strokeWidth="0.55175" strokeDasharray="1.1 1.1"/>
                <rect x="613.55" y="166.633" width="14.3962" height="1.65525" rx="0.827625"
                      transform="rotate(137.862 613.55 166.633)" fill="#D9D9D9"/>
                <line x1="166.348" y1="150.606" x2="164.973" y2="135.876" stroke="white" strokeWidth="0.55175"
                      strokeDasharray="1.1 1.1"/>
                <path d="M165.101 136.083V136.083C167.801 134.74 171.078 135.82 172.452 138.504L173.064 139.702"
                      stroke="white" strokeWidth="0.55175" strokeDasharray="1.1 1.1"/>
                <rect x="165.125" y="150.185" width="14.3962" height="1.65525" rx="0.827625"
                      transform="rotate(-54.6306 165.125 150.185)" fill="#D9D9D9"/>
                <line x1="198.266" y1="202.449" x2="212.704" y2="199.223" stroke="white" strokeWidth="0.55175"
                      strokeDasharray="1.1 1.1"/>
                <path d="M212.514 199.377V199.377C214.188 201.885 213.531 205.273 211.042 206.975L209.932 207.734"
                      stroke="white" strokeWidth="0.55175" strokeDasharray="1.1 1.1"/>
                <rect x="198.529" y="201.183" width="14.3962" height="1.65525" rx="0.827625"
                      transform="rotate(28.1102 198.529 201.183)" fill="#D9D9D9"/>
                <path d="M893.5 245.5L773 216L753.5 266C804.71 288.8 835.345 297.167 893.5 304" stroke="#6A8090"
                      strokeWidth="3"/>
                <path d="M808 112C827.375 120.181 839.523 122.533 858.5 128L850 195" stroke="#6A8090" strokeWidth="3"/>
            </svg>
        </>
    )
};

export default RenderFloorEight;
