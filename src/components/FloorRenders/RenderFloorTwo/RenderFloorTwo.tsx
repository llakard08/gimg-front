import React, {Dispatch, FC, SetStateAction} from 'react';
import styles from "../RenderFloorOne/RenderFloorOne.module.css";
import {Apartment} from "../../../interfaces/Apartments";

interface RenderFloorTwoProps {
    setFloorPlanSectionVisible: Dispatch<SetStateAction<boolean>>
    setFlatSectionVisible: Dispatch<SetStateAction<boolean>>
    apartmentsOfCurrentFloor: Apartment[]
    setSelectedApartment: Dispatch<SetStateAction<Apartment | undefined>>
}

const RenderFloorTwo: FC<RenderFloorTwoProps> = (props) => {
    function displaySelectedFlat(flatNumber: number, props: RenderFloorTwoProps) {
        props.setFlatSectionVisible(true)
        props.setFloorPlanSectionVisible(false)
        props.setSelectedApartment(props.apartmentsOfCurrentFloor.find((apartment: Apartment) => apartment.apartmentNumber === flatNumber))
    }

    function isApartmentSold(flatNumber: number) {
        if (props.apartmentsOfCurrentFloor === undefined) {
            setTimeout(() => {
                isApartmentSold(flatNumber)
            }, 1000);
        } else {
            return props.apartmentsOfCurrentFloor[flatNumber - 1].sold
        }
    }

    return (<>
            <svg width="1162" height="342" viewBox="0 0 1162 342" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M0 301.5L75.5 0L131 13L118.5 25.5L219.5 38.5C219.5 38.5 282.161 40.8251 322 34.5C370.061 29.0423 396.293 28.3414 443.879 27.0701L446.5 27C446.5 27 521.148 31.9876 569 37.5C616.89 45.9447 643.494 51.1699 690.5 65C739.578 80.9608 765.457 91.3399 809 112L857.5 128C907.953 136.958 936.227 134.755 986 121.5L982 116L1018 100.5L1161 225.5C1131.12 248.376 1113.42 259.397 1081 275.5L1089.5 299.5C994.807 337.458 941.734 347.323 846.5 330.5C846.5 330.5 781.807 314.94 742.5 297C711.459 286.096 696.784 276.421 661.5 267.5C607.399 253.1 577.244 247.152 524 243C461.302 239.119 425.939 240.607 363 251.5C314.065 259.861 288.096 267.719 244.5 286C204.094 299.802 180.08 305.967 133 312C76.7069 316.03 48.2644 312.543 0 301.5Z"
                    fill="#001525"/>
                <path className={styles.flatCover}
                      onClick={() => {
                          displaySelectedFlat(7, props)
                      }}
                      d="M986 121.5C935.082 135.982 907.333 137.685 858.5 128L855.5 150.5L895.5 156L892.5 304L837 295L831.5 326.5C831.5 326.5 945.5 363 1089.5 299.5L1081 275.5C1110.76 261.097 1129.09 249.207 1160 226L1018 101L982 116.5L986 121.5Z"
                      fill={isApartmentSold(7) ? "#640303" : "#10324C"}/>
                <path
                    d="M895 156.5L894.167 205.5V211.5M1081 275.5L1089.5 299.5C988.356 339.26 931.833 347.796 831.5 326.5L836.5 295.5L892.5 303.5L893.333 254.5M1081 275.5C1109.55 261.867 1127.41 250.341 1160.5 225.5M1081 275.5L1061.5 278.5L1053.75 262.75M1019 100.5L982 116.5L986 122L990.5 145M893.333 254.5L950 258.5M893.333 254.5L893.542 242.25L893.646 236.125M954 275.5L1046 247"
                    stroke="#6A8090" strokeWidth="3"/>
                <path
                    d="M856 150.5C880.019 154.662 899.213 156.594 918 156.169M979 248.5L1035 228.5L1023.5 174.5L990.5 144.5C970.082 149.761 953.151 153.214 937 154.935"
                    stroke="#6A8090" strokeWidth="3"/>
                <path className={styles.flatCover}
                      onClick={() => {
                          displaySelectedFlat(6, props)
                      }}
                      d="M650.5 238.5L691 65.5C736 80.5 760 87.5 808 111.5L781.5 190L754.5 179.5L726.5 261.5L650.5 238.5Z"
                      fill={isApartmentSold(6) ? "#640303" : "#10324C"}/>
                <path className={styles.flatCover}
                      onClick={() => {
                          displaySelectedFlat(5, props)
                      }}
                      d="M553 220L568.5 37.5C618.894 45.4199 645.602 51.9192 690.5 65L651.5 238L613 229L597 225L553 220Z"
                      fill={isApartmentSold(5) ? "#640303" : "#142837"}/>
                <path className={styles.flatCover}
                      onClick={() => {
                          displaySelectedFlat(4, props)
                      }}
                      d="M448.5 215L447 27C494.396 29.5783 521.133 31.9534 569 37.5V39L553 219.5L516 215H496.5L478.5 214.5L460 215H448.5Z"
                      fill={isApartmentSold(4) ? "#640303" : "#10324C"}/>
                <path className={styles.flatCover}
                      onClick={() => {
                          displaySelectedFlat(3, props)
                      }}
                      d="M339.5 162L322.5 34.5C370.286 29.4046 397.529 27.7613 447 27.5L447.5 144.5L448.5 216L402.5 217L350.5 226.5L339.5 162Z"
                      fill={isApartmentSold(3) ? "#640303" : "#142837"}/>
                <path className={styles.flatCover}
                      onClick={() => {
                          displaySelectedFlat(2, props)
                      }}
                      d="M218.5 62L220 38.5C262.5 39.5 283.353 41.1559 322.5 34L326 57.5L334.5 122.5L339.5 161L351 226.5L300.5 236.5L288 240.5L246.5 255L238 212L222.5 135L221 123L218.5 62Z"
                      fill={isApartmentSold(2) ? "#640303" : "#10324C"}/>
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
                    d="M219.5 62.5L233.125 62.125L250 61.5625M326 58L339.5 161.5L350.5 226.5L294.5 238.5L271.25 246.25M326 58L300 59.5M326 58L322.5 34M246.5 254.5L255.5 251.5M267.188 61.1875L274 61L279 60.25"
                    stroke="#6A8090" strokeWidth="3"/>
                <path
                    d="M375 55.5L379.5 102.5M380.5 118V122M380.5 122L381.5 137M380.5 122L364.5 124M383 151.5V156L339.5 161M335 127L353.5 125"
                    stroke="#6A8090" strokeWidth="1.5"/>
                <path
                    d="M287 132L288 138M290 148.5L288 138M292 163L293.5 172L339.5 161.5M288 138L303.5 134.5M335 128L317 131.5"
                    stroke="#6A8090" strokeWidth="1.5"/>
                <path d="M274 62L284 118" stroke="#6A8090" strokeWidth="1.5"/>
                <path
                    d="M327 58L351.25 56.5M447 51.5L448.5 216H436M447 51.5V27M447 51.5L411.25 53.25M351.5 225.5L402 217.5L421 216.75M369.438 55.375L375.5 55L393.375 54.125"
                    stroke="#6A8090" strokeWidth="3"/>
                <path d="M413.5 217L409.5 186" stroke="#6A8090" strokeWidth="1.5"/>
                <path d="M210 179L214.5 199L213 199.292M178.5 206L198.5 202.111L211.5 267.5" stroke="#6A8090"
                      strokeWidth="1.5"/>
                <path d="M115.5 47L141.5 51M220 62.5L193.75 58.75M161 54L167.5 55L174.062 55.9375" stroke="#6A8090"
                      strokeWidth="3"/>
                <path d="M167.5 56.5L165 100.5" stroke="#6A8090" strokeWidth="1.5"/>
                <path d="M164 117.5L165 134.5L220 123" stroke="#6A8090" strokeWidth="1.5"/>
                <path d="M165 135L165.375 138.125M166.5 147.5L174.5 186L229.5 174.5" stroke="#6A8090"
                      strokeWidth="1.5"/>
                <path
                    d="M446.5 51.5L476.5 53.5L484 54M566.5 61.5L553 219.5L518.325 215.897C515.776 215.633 513.22 215.466 510.658 215.398C503.524 215.207 487.962 214.792 477 214.5M566.5 61.5L569 37.5M566.5 61.5L536.5 58.5L529 57.75M461 214.5H449M499 55L506.5 55.5L514 56.25"
                    stroke="#6A8090" strokeWidth="3"/>
                <path
                    d="M558 158L601 165L602 161.5M604 149.5L606.5 130.5M606.5 130.5L616.5 132V129M606.5 130.5L595.5 129M618 115L627.5 75.5M584 127L561.5 123.5"
                    stroke="#6A8090" strokeWidth="1.5"/>
                <path
                    d="M558.5 157L516 154V148M516 133.5L517 119M517 119L528.5 120M517 119L503.5 118V112.5M561.5 122.5L541 121M504 97.5L506.5 55"
                    stroke="#6A8090" strokeWidth="1.5"/>
                <path d="M494.5 215V181.5" stroke="#6A8090" strokeWidth="1.5"/>
                <path
                    d="M567 61.5L596.625 68.125L604.031 69.7812M685.5 88L651 238L638.5 235M685.5 88L655.875 81.375L648.469 79.7188M685.5 88L690.5 65M553 219.5L601 226L613.5 229M618.844 73.0938L626.25 74.75L633.656 76.4062"
                    stroke="#6A8090" strokeWidth="3"/>
                <path d="M610 227.5L614 201" stroke="#6A8090" strokeWidth="1.5"/>
                <path
                    d="M685.5 88L714.125 99.25L721.281 102.062M800 133L781 190.5L754.5 179.5L726.5 261.5L682 247.557M800 133L771.375 121.75M800 133L809 110.5M651.5 238L663.25 241.682M753.5 114.725L742.75 110.5L735.594 107.688"
                    stroke="#6A8090" strokeWidth="3"/>
                <path
                    d="M745 111.5L734.5 146.5M731.5 160.5L730.5 163.5M730.5 163.5L720.5 159.5L719.5 163.5M730.5 163.5L740.5 167.5M715.5 178L711.5 195.5L743.5 207.5M755.5 173L754 179"
                    stroke="#6A8090" strokeWidth="1.5"/>
                <path d="M687.5 248L699 213" stroke="#6A8090" strokeWidth="1.5"/>
                <line x1="163.552" y1="118.264" x2="164.172" y2="103.483" stroke="white" strokeWidth="0.55175"
                      strokeDasharray="1.1 1.1"/>
                <path d="M164.271 103.706V103.706C167.127 102.739 170.23 104.25 171.229 107.094L171.675 108.363"
                      stroke="white" strokeWidth="0.55175" strokeDasharray="1.1 1.1"/>
                <rect x="162.397" y="117.682" width="14.3962" height="1.65525" rx="0.827625"
                      transform="rotate(-46.8935 162.397 117.682)" fill="#D9D9D9"/>
                <line x1="286.743" y1="132.633" x2="284.199" y2="118.06" stroke="white" strokeWidth="0.55175"
                      strokeDasharray="1.1 1.1"/>
                <path d="M284.343 118.257V118.257C286.927 116.703 290.281 117.518 291.863 120.084L292.57 121.229"
                      stroke="white" strokeWidth="0.55175" strokeDasharray="1.1 1.1"/>
                <rect x="285.491" y="132.312" width="14.3962" height="1.65525" rx="0.827625"
                      transform="rotate(-59.2018 285.491 132.312)" fill="#D9D9D9"/>
                <line x1="503.513" y1="113.242" x2="504.222" y2="98.4649" stroke="white" strokeWidth="0.55175"
                      strokeDasharray="1.1 1.1"/>
                <path d="M504.32 98.6886V98.6886C507.182 97.7385 510.275 99.2679 511.257 102.119L511.695 103.39"
                      stroke="white" strokeWidth="0.55175" strokeDasharray="1.1 1.1"/>
                <rect x="502.361" y="112.653" width="14.3962" height="1.65525" rx="0.827625"
                      transform="rotate(-46.5481 502.361 112.653)" fill="#D9D9D9"/>
                <line x1="731.043" y1="161.023" x2="734.705" y2="146.689" stroke="white" strokeWidth="0.55175"
                      strokeDasharray="1.1 1.1"/>
                <path d="M734.756 146.928V146.928C737.75 146.572 740.473 148.692 740.863 151.682L741.037 153.016"
                      stroke="white" strokeWidth="0.55175" strokeDasharray="1.1 1.1"/>
                <rect x="730.033" y="160.215" width="14.3962" height="1.65525" rx="0.827625"
                      transform="rotate(-34.9642 730.033 160.215)" fill="#D9D9D9"/>
                <line x1="715.043" y1="179.023" x2="718.705" y2="164.689" stroke="white" strokeWidth="0.55175"
                      strokeDasharray="1.1 1.1"/>
                <path d="M718.756 164.928V164.928C721.75 164.572 724.473 166.692 724.863 169.682L725.037 171.016"
                      stroke="white" strokeWidth="0.55175" strokeDasharray="1.1 1.1"/>
                <rect x="714.033" y="178.215" width="14.3962" height="1.65525" rx="0.827625"
                      transform="rotate(-34.9642 714.033 178.215)" fill="#D9D9D9"/>
                <line x1="739.532" y1="167.452" x2="753.27" y2="172.942" stroke="white" strokeWidth="0.55175"
                      strokeDasharray="1.1 1.1"/>
                <path d="M753.027 172.961V172.961C752.992 175.976 750.537 178.402 747.522 178.401L746.177 178.401"
                      stroke="white" strokeWidth="0.55175" strokeDasharray="1.1 1.1"/>
                <rect x="740.464" y="166.556" width="14.3962" height="1.65525" rx="0.827625"
                      transform="rotate(62.4832 740.464 166.556)" fill="#D9D9D9"/>
                <line x1="291.743" y1="162.633" x2="289.199" y2="148.06" stroke="white" strokeWidth="0.55175"
                      strokeDasharray="1.1 1.1"/>
                <path d="M289.343 148.257V148.257C291.927 146.703 295.281 147.518 296.863 150.084L297.57 151.229"
                      stroke="white" strokeWidth="0.55175" strokeDasharray="1.1 1.1"/>
                <rect x="290.491" y="162.312" width="14.3962" height="1.65525" rx="0.827625"
                      transform="rotate(-59.2018 290.491 162.312)" fill="#D9D9D9"/>
                <line x1="515.781" y1="148.396" x2="515.863" y2="133.602" stroke="white" strokeWidth="0.55175"
                      strokeDasharray="1.1 1.1"/>
                <path d="M515.971 133.822V133.822C518.789 132.751 521.945 134.148 523.047 136.954L523.539 138.207"
                      stroke="white" strokeWidth="0.55175" strokeDasharray="1.1 1.1"/>
                <rect x="514.606" y="147.857" width="14.3962" height="1.65525" rx="0.827625"
                      transform="rotate(-48.9802 514.606 147.857)" fill="#D9D9D9"/>
                <line x1="303.292" y1="134.28" x2="317.845" y2="131.618" stroke="white" strokeWidth="0.55175"
                      strokeDasharray="1.1 1.1"/>
                <path d="M317.649 131.765V131.765C319.224 134.336 318.436 137.696 315.883 139.299L314.743 140.015"
                      stroke="white" strokeWidth="0.55175" strokeDasharray="1.1 1.1"/>
                <rect x="303.604" y="133.025" width="14.3962" height="1.65525" rx="0.827625"
                      transform="rotate(30.3389 303.604 133.025)" fill="#D9D9D9"/>
                <line x1="528.462" y1="119.41" x2="543.12" y2="121.415" stroke="white" strokeWidth="0.55175"
                      strokeDasharray="1.1 1.1"/>
                <path d="M542.889 121.492V121.492C543.584 124.426 541.788 127.373 538.863 128.102L537.557 128.426"
                      stroke="white" strokeWidth="0.55175" strokeDasharray="1.1 1.1"/>
                <rect x="529.149" y="118.315" width="14.3962" height="1.65525" rx="0.827625"
                      transform="rotate(48.4908 529.149 118.315)" fill="#D9D9D9"/>
                <line x1="351.292" y1="125.28" x2="365.845" y2="122.618" stroke="white" strokeWidth="0.55175"
                      strokeDasharray="1.1 1.1"/>
                <path d="M365.649 122.765V122.765C367.224 125.336 366.436 128.696 363.883 130.299L362.743 131.015"
                      stroke="white" strokeWidth="0.55175" strokeDasharray="1.1 1.1"/>
                <rect x="351.604" y="124.025" width="14.3962" height="1.65525" rx="0.827625"
                      transform="rotate(30.3389 351.604 124.025)" fill="#D9D9D9"/>
                <line x1="582.466" y1="126.353" x2="597.108" y2="128.474" stroke="white" strokeWidth="0.55175"
                      strokeDasharray="1.1 1.1"/>
                <path d="M596.876 128.55V128.55C597.547 131.489 595.729 134.422 592.797 135.127L591.489 135.441"
                      stroke="white" strokeWidth="0.55175" strokeDasharray="1.1 1.1"/>
                <rect x="583.162" y="125.263" width="14.3962" height="1.65525" rx="0.827625"
                      transform="rotate(48.9443 583.162 125.263)" fill="#D9D9D9"/>
                <line x1="379.103" y1="101.887" x2="379.399" y2="116.678" stroke="white" strokeWidth="0.55175"
                      strokeDasharray="1.1 1.1"/>
                <path d="M379.286 116.462V116.462C376.495 117.604 373.305 116.288 372.131 113.511L371.608 112.272"
                      stroke="white" strokeWidth="0.55175" strokeDasharray="1.1 1.1"/>
                <rect x="380.292" y="102.396" width="14.3962" height="1.65525" rx="0.827625"
                      transform="rotate(129.559 380.292 102.396)" fill="#D9D9D9"/>
                <line x1="617.949" y1="113.958" x2="616.105" y2="128.637" stroke="white" strokeWidth="0.55175"
                      strokeDasharray="1.1 1.1"/>
                <path d="M616.025 128.406V128.406C613.099 129.134 610.132 127.371 609.372 124.453L609.033 123.151"
                      stroke="white" strokeWidth="0.55175" strokeDasharray="1.1 1.1"/>
                <rect x="619.052" y="114.633" width="14.3962" height="1.65525" rx="0.827625"
                      transform="rotate(137.862 619.052 114.633)" fill="#D9D9D9"/>
                <line x1="382.103" y1="135.887" x2="382.399" y2="150.678" stroke="white" strokeWidth="0.55175"
                      strokeDasharray="1.1 1.1"/>
                <path d="M382.286 150.462V150.462C379.495 151.604 376.305 150.288 375.131 147.511L374.608 146.272"
                      stroke="white" strokeWidth="0.55175" strokeDasharray="1.1 1.1"/>
                <rect x="383.292" y="136.396" width="14.3962" height="1.65525" rx="0.827625"
                      transform="rotate(129.559 383.292 136.396)" fill="#D9D9D9"/>
                <line x1="604.966" y1="148.813" x2="601.876" y2="163.281" stroke="white" strokeWidth="0.55175"
                      strokeDasharray="1.1 1.1"/>
                <path d="M601.815 163.045V163.045C598.838 163.52 596.033 161.51 595.524 158.538L595.297 157.212"
                      stroke="white" strokeWidth="0.55175" strokeDasharray="1.1 1.1"/>
                <rect x="606.006" y="149.581" width="14.3962" height="1.65525" rx="0.827625"
                      transform="rotate(142.757 606.006 149.581)" fill="#D9D9D9"/>
                <line x1="166.348" y1="150.606" x2="164.973" y2="135.876" stroke="white" strokeWidth="0.55175"
                      strokeDasharray="1.1 1.1"/>
                <path d="M165.101 136.083V136.083C167.8 134.74 171.078 135.82 172.451 138.504L173.064 139.702"
                      stroke="white" strokeWidth="0.55175" strokeDasharray="1.1 1.1"/>
                <rect x="165.125" y="150.185" width="14.3962" height="1.65525" rx="0.827625"
                      transform="rotate(-54.6306 165.125 150.185)" fill="#D9D9D9"/>
                <line x1="198.266" y1="202.449" x2="212.704" y2="199.223" stroke="white" strokeWidth="0.55175"
                      strokeDasharray="1.1 1.1"/>
                <path d="M212.514 199.377V199.377C214.188 201.885 213.531 205.273 211.042 206.975L209.931 207.734"
                      stroke="white" strokeWidth="0.55175" strokeDasharray="1.1 1.1"/>
                <rect x="198.529" y="201.183" width="14.3962" height="1.65525" rx="0.827625"
                      transform="rotate(28.1102 198.529 201.183)" fill="#D9D9D9"/>
                <line x1="949.033" y1="259.53" x2="962.495" y2="265.666" stroke="white" strokeWidth="0.55175"
                      strokeDasharray="1.1 1.1"/>
                <path d="M962.251 265.674V265.674C962.073 268.683 959.506 270.99 956.494 270.846L955.151 270.781"
                      stroke="white" strokeWidth="0.55175" strokeDasharray="1.1 1.1"/>
                <rect x="950.006" y="258.679" width="14.3962" height="1.65525" rx="0.827625"
                      transform="rotate(65.2038 950.006 258.679)" fill="#D9D9D9"/>
                <line x1="1035.13" y1="228.095" x2="1044.81" y2="242.974" stroke="white" strokeWidth="0.55175"
                      strokeDasharray="1.1 1.1"/>
                <path d="M1044.6 242.792V242.792C1042.49 245.726 1038.4 246.408 1035.44 244.324L1034.12 243.394"
                      stroke="white" strokeWidth="0.55175" strokeDasharray="1.1 1.1"/>
                <rect x="1036.7" y="227.829" width="17.2741" height="1.98615" rx="0.993074"
                      transform="rotate(97.6513 1036.7 227.829)" fill="#D9D9D9"/>
                <line x1="1045.98" y1="247.232" x2="1053.55" y2="263.29" stroke="white" strokeWidth="0.55175"
                      strokeDasharray="1.1 1.1"/>
                <path d="M1053.37 263.083V263.083C1050.87 265.701 1046.74 265.822 1044.09 263.354L1042.91 262.253"
                      stroke="white" strokeWidth="0.55175" strokeDasharray="1.1 1.1"/>
                <rect x="1047.58" y="247.184" width="17.2741" height="1.98615" rx="0.993074"
                      transform="rotate(105.47 1047.58 247.184)" fill="#D9D9D9"/>
                <path d="M893.5 245.5L773 216L753.5 266C804.71 288.8 835.345 297.167 893.5 304" stroke="#6A8090"
                      strokeWidth="3"/>
                <path
                    d="M786.5 176.5C827.656 192.627 851.099 198.29 893.5 203M808 112C827.375 120.181 839.523 122.533 858.5 128L850 195"
                    stroke="#6A8090" strokeWidth="3"/>
            </svg>

        </>
    )
};

export default RenderFloorTwo;
