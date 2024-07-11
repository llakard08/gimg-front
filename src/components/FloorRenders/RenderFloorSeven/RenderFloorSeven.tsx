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

    const [duplexSecondPartHovered, setDuplexSecondPartHovered] = useState<boolean>(false);
    const [duplexSecondPartColor, setDuplexSecondPartColor] = useState<string>("#10324C")

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
            <svg width="902" height="421" viewBox="0 0 902 421" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M0 388.905L58.5922 149.981L101.663 160.283L91.9625 170.189L170.344 180.49C170.344 180.49 218.972 182.333 249.89 177.321C287.187 172.996 307.545 172.44 344.474 171.433L346.509 171.377C346.509 171.377 404.44 175.33 441.575 179.698C478.74 186.39 499.387 190.531 535.866 201.49C573.953 214.139 594.036 222.363 627.829 238.736L665.467 251.415C704.622 258.513 726.564 256.768 765.19 246.264L762.086 241.905L790.024 229.622L901 328.679C877.814 346.807 864.072 355.541 838.916 368.302L845.512 387.321C772.025 417.4 730.838 425.218 656.931 411.887C656.931 411.887 606.725 399.556 576.221 385.339C552.131 376.699 540.743 369.032 513.36 361.962C471.375 350.55 447.973 345.838 406.653 342.547C357.996 339.472 330.552 340.651 281.708 349.283C243.732 355.908 223.579 362.136 189.745 376.622C158.388 387.56 139.752 392.445 103.215 397.226C59.5288 400.419 37.4558 397.656 0 388.905Z"
                    fill="#001525"/>
                <path

                    d="M900.612 328.679C874.929 348.365 861.072 357.498 838.916 368.302L845.512 387.321C767.019 418.829 723.154 425.593 645.29 408.717L649.17 384.151L692.629 390.49L693.276 351.66V343.736M790.8 229.623L762.086 242.302L765.19 246.66C725.98 259.608 704.674 259.89 665.467 251.415"
                    stroke="#6A8090" strokeWidth="3"/>
                <path
                    className={styles.flatCover}
                    onClick={() => {
                        displaySelectedFlat(4, props)
                    }}
                    d="M429.158 324.321L441.187 179.698C487.446 180.506 599.506 222.999 627.829 238.34L606.099 300.547L585.534 292.623L563.416 356.811L520.733 343.736L475.722 331.453L462.917 328.679L429.158 324.321Z"
                    fill="#10324C"/>
                <path
                    className={styles.flatCover}
                    onClick={() => {
                        displaySelectedFlat(3, props)
                    }}
                    d="M314.302 321.153L297.229 173.363C335.644 169.8 404.428 175.305 441.575 179.701V180.889L429.158 323.927L400.444 320.361H385.311L371.342 319.965L356.985 320.361L314.302 321.153Z"
                    fill="#142837"/>
                <path
                    className={styles.flatCover}
                    onClick={() => {
                        displaySelectedFlat(2, props)
                    }}
                    onMouseEnter={() => {
                        setDuplexSecondPartHovered(true)
                        setDuplexSecondPartColor(getFillColorBasedOnCondition(2,"#10324C"))
                    }}
                    onMouseLeave={() => {
                        setDuplexSecondPartHovered(false)
                    }}
                    d="M169.568 199.113L170.732 180.491C190.745 180.972 221.615 179.448 249.89 177.717C269.679 175.34 285.665 174.218 297.617 173.755L299.557 192.774L305.378 240.321L308.87 271.623L314.302 321.944L233.205 337.396L223.504 340.566L191.298 352.057L184.701 317.981L172.672 256.962L171.508 247.453L169.568 199.113Z"
                    fill={getFillColorBasedOnCondition(2,"#10324C")}/>
                <path
                    className={styles.flatCover}
                    onClick={() => {
                        displaySelectedFlat(1, props)
                    }}
                    onMouseEnter={() => {
                        setDuplexSecondPartHovered(true)
                        setDuplexSecondPartColor(getFillColorBasedOnCondition(1,"#10324C"))
                    }}
                    onMouseLeave={() => {
                        setDuplexSecondPartHovered(false)
                    }}
                    d="M73.7253 282.321L92.3507 169.792C119.901 174.547 134.646 175.736 170.344 180.491L169.18 199.113L171.508 250.226L181.597 301.736L191.298 352.057L150.555 367.113L100.111 377.415L101.275 292.226L73.7253 282.321Z"
                    fill={getFillColorBasedOnCondition(1,"#142837")}/>
                <path d="M86.5302 287.075L74.1133 282.321L92.3506 169.396" stroke="#6A8090" strokeWidth="3"/>
                <path

                    d="M97.783 290.641L101.275 292.226L99.7231 377.811L150.943 366.717L191.298 352.056L172.672 256.17L171.508 250.226L169.568 198.321L170.732 180.094"
                    stroke="#6A8090" strokeWidth="3"/>
                <path
                    d="M170.344 199.509L180.918 199.212L194.014 198.766M254.546 195.943L232.816 197.132M272.007 329.472L228.548 338.981L210.505 345.123M191.297 351.66L198.282 349.283M207.352 198.469L212.639 198.321L216.519 197.726"
                    stroke="#6A8090" strokeWidth="3"/>
                <path
                    d="M170.344 199.509L180.918 199.212L194.014 198.766M252.994 195.943L232.816 197.132M272.007 329.472L228.548 338.981L210.505 345.123M191.297 351.66L198.282 349.283M207.352 198.469L212.639 198.321L216.519 197.726"
                    stroke="#6A8090" strokeWidth="3"/>
                <path
                    d="M297.617 173.358L299.842 192.773M314.69 322.34L299.842 192.773M299.842 192.773C335.992 188.791 356.48 189.333 392.684 194.358"
                    stroke="#6A8090" strokeWidth="3"/>
                <path d="M222.34 254.981L225.444 266.868L261.143 258.547" stroke="#6A8090" strokeWidth="1.5"/>
                <path d="M212.639 199.113L220.4 243.491" stroke="#6A8090" strokeWidth="1.5"/>
                <path
                    d="M252.994 195.943L261.725 262.509M270.455 329.075L266.09 295.792M263.907 279.151L262.816 270.83M263.907 279.151L308.87 273.208M263.907 279.151L265.023 286.283"
                    stroke="#6A8090" strokeWidth="1.5"/>
                <path
                    d="M253.77 195.943L272.589 194.755M271.231 329.472L308.7 322.913C310.878 322.531 313.014 321.941 315.078 321.151V321.151M286.704 193.863L291.409 193.566L300.333 192.773"
                    stroke="#6A8090" strokeWidth="3"/>
                <path d="M162.972 291.83L166.464 307.679L165.3 307.91M138.526 313.226L154.047 310.145L164.136 361.962"
                      stroke="#6A8090" strokeWidth="1.5"/>
                <path
                    d="M89.6343 187.227L109.812 190.396M170.732 199.51L150.361 196.538M124.945 192.774L129.989 193.566L135.082 194.309"
                    stroke="#6A8090" strokeWidth="3"/>
                <path d="M129.989 194.755L128.049 229.623" stroke="#6A8090" strokeWidth="1.5"/>
                <path d="M127.273 243.094L128.049 256.566L170.732 247.453" stroke="#6A8090" strokeWidth="1.5"/>
                <path d="M128.049 256.962L128.34 259.439M129.213 266.868L135.422 297.377L178.105 288.264"
                      stroke="#6A8090" strokeWidth="1.5"/>
                <path
                    d="M439.635 198.717L429.158 323.925L403.184 321.169C400.583 320.893 397.978 320.719 395.363 320.648C389.49 320.488 378.234 320.182 370.178 319.962M439.635 198.717L441.575 179.698M439.635 198.717L416.353 196.34L410.533 195.745M439.635 198.717C450.525 199.879 459.953 201.149 468.765 202.679M357.761 319.962H348.449L314.302 321.547M387.251 193.566L393.072 193.962L398.892 194.557M532.762 220.113C523.947 217.118 516.086 214.545 508.704 212.309M482.706 205.425C486.85 206.342 490.955 207.343 495.123 208.444"
                    stroke="#6A8090" strokeWidth="3"/>
                <path
                    d="M475.722 277.566L476.498 271.623M475.722 277.566L433.815 274.396M475.722 277.566L475.131 281.925M478.05 260.925L479.342 253.396M487.363 206.642L479.342 253.396M468.737 329.076L473.68 292.623M479.342 253.396L513.749 264.151M544.015 226.057L530.046 269.245L524.613 267.547"
                    stroke="#6A8090" strokeWidth="1.5"/>
                <path
                    d="M393.072 193.566L391.132 227.245L390.744 239.132V243.49L390.356 254.189M388.028 319.962L388.804 287.472M389.576 276.377L389.773 270.83M389.97 265.283L389.773 270.83M389.773 270.83L433.427 274.396"
                    stroke="#6A8090" strokeWidth="1.5"/>
                <path d="M348.061 190.396V243.094L353.493 243.447M390.744 245.868L365.134 244.204" stroke="#6A8090"
                      strokeWidth="1.5"/>
                <path
                    d="M531.986 219.717L554.2 228.632L559.754 230.861L576.415 237.547L584.757 240.895M620.844 255.377L606.099 300.943L585.534 292.226L563.804 357.207L529.27 346.158C526.667 345.314 524.141 344.508 521.679 343.736M620.844 255.377L598.629 246.462M620.844 255.377L627.829 237.547M429.158 324.321C454.867 327.59 473.13 330.558 493.183 335.603M512.972 341.07C515.792 341.911 518.687 342.798 521.679 343.736M512.972 341.07L521.679 343.736M512.972 341.07C510.323 340.279 507.742 339.53 505.212 338.817"
                    stroke="#6A8090" strokeWidth="3"/>
                <path d="M511.42 340.17L520.345 312.434" stroke="#6A8090" strokeWidth="1.5"/>
                <line y1="-0.275875" x2="11.607" y2="-0.275875"
                      transform="matrix(0.041488 -1.00916 0.988959 0.0423937 127.139 243.709)" stroke="white"
                      strokeWidth="0.55175" strokeDasharray="1.1 1.1"/>
                <path d="M127.484 232.164V232.164C129.699 231.397 132.107 232.594 132.882 234.845L133.229 235.854"
                      stroke="white" strokeWidth="0.55175" strokeDasharray="1.1 1.1"/>
                <rect width="11.3078" height="1.29625" rx="0.648126"
                      transform="matrix(0.67516 -0.73657 0.723502 0.691504 126.029 243.239)" fill="#D9D9D9"/>
                <line y1="-0.275875" x2="11.618" y2="-0.275875"
                      transform="matrix(-0.169978 -0.99406 0.976002 -0.174017 222.74 255.049)" stroke="white"
                      strokeWidth="0.55175" strokeDasharray="1.1 1.1"/>
                <path d="M220.666 243.694V243.694C222.668 242.465 225.273 243.107 226.496 245.132L227.05 246.049"
                      stroke="white" strokeWidth="0.55175" strokeDasharray="1.1 1.1"/>
                <rect width="11.3546" height="1.29083" rx="0.645417"
                      transform="matrix(0.503791 -0.863035 0.854804 0.520296 221.557 254.832)" fill="#D9D9D9"/>
                <line y1="-0.275875" x2="11.6067" y2="-0.275875"
                      transform="matrix(0.0474461 -1.00892 0.988663 0.048479 389.803 265.882)" stroke="white"
                      strokeWidth="0.55175" strokeDasharray="1.1 1.1"/>
                <path d="M390.216 254.338V254.338C392.436 253.586 394.837 254.797 395.599 257.053L395.94 258.064"
                      stroke="white" strokeWidth="0.55175" strokeDasharray="1.1 1.1"/>
                <rect width="11.3064" height="1.29641" rx="0.648207"
                      transform="matrix(0.679581 -0.732492 0.719317 0.695858 388.696 265.404)" fill="#D9D9D9"/>
                <line y1="-0.275875" x2="11.6002" y2="-0.275875"
                      transform="matrix(-0.987775 -0.0635385 0.0621934 -1.00815 365.676 243.819)" stroke="white"
                      strokeWidth="0.55175" strokeDasharray="1.1 1.1"/>
                <path d="M354.379 243.225V243.225C353.675 240.946 354.898 238.514 357.123 237.768L358.113 237.437"
                      stroke="white" strokeWidth="0.55175" strokeDasharray="1.1 1.1"/>
                <rect width="11.2788" height="1.2996" rx="0.649799"
                      transform="matrix(-0.708845 -0.706525 0.690425 -0.722274 365.192 244.942)" fill="#D9D9D9"/>
                <line y1="-0.275875" x2="11.6067" y2="-0.275875"
                      transform="matrix(0.0474461 -1.00892 0.988663 0.048479 389.027 288.07)" stroke="white"
                      strokeWidth="0.55175" strokeDasharray="1.1 1.1"/>
                <path d="M389.44 276.527V276.527C391.66 275.774 394.061 276.985 394.823 279.242L395.164 280.253"
                      stroke="white" strokeWidth="0.55175" strokeDasharray="1.1 1.1"/>
                <rect width="11.3064" height="1.29641" rx="0.648207"
                      transform="matrix(0.679581 -0.732492 0.719317 0.695858 387.92 287.593)" fill="#D9D9D9"/>
                <line y1="-0.275875" x2="9.84072" y2="-0.275875"
                      transform="matrix(-0.104725 -1.00269 0.961249 -0.241877 262.802 271.802)" stroke="white"
                      strokeWidth="0.55175" strokeDasharray="1.1 1.1"/>
                <path d="M261.683 262.107V262.107C263.308 260.971 265.39 261.359 266.225 262.955L266.678 263.822"
                      stroke="white" strokeWidth="0.55175" strokeDasharray="1.1 1.1"/>
                <rect width="10.0954" height="0.998804" rx="0.499402"
                      transform="matrix(0.499455 -0.865654 0.851786 0.525419 261.866 271.674)" fill="#D9D9D9"/>
                <line y1="-0.275875" x2="9.84072" y2="-0.275875"
                      transform="matrix(-0.104725 -1.00269 0.961249 -0.241877 266.491 296.362)" stroke="white"
                      strokeWidth="0.55175" strokeDasharray="1.1 1.1"/>
                <path d="M265.372 286.667V286.667C266.998 285.531 269.079 285.92 269.914 287.515L270.367 288.382"
                      stroke="white" strokeWidth="0.55175" strokeDasharray="1.1 1.1"/>
                <rect width="10.0954" height="0.998804" rx="0.499402"
                      transform="matrix(0.499455 -0.865654 0.851786 0.525419 265.555 296.233)" fill="#D9D9D9"/>
                <line y1="-0.275875" x2="11.6025" y2="-0.275875"
                      transform="matrix(-0.123331 1.00257 -0.981727 -0.125924 478.185 260.071)" stroke="white"
                      strokeWidth="0.55175" strokeDasharray="1.1 1.1"/>
                <path d="M476.904 271.548V271.548C474.633 272.125 472.331 270.728 471.741 268.415L471.478 267.384"
                      stroke="white" strokeWidth="0.55175" strokeDasharray="1.1 1.1"/>
                <rect width="11.2884" height="1.29849" rx="0.649247"
                      transform="matrix(-0.733903 0.678042 -0.663719 -0.74908 479.253 260.634)" fill="#D9D9D9"/>
                <line y1="-0.275875" x2="11.6135" y2="-0.275875"
                      transform="matrix(-0.941786 -0.306976 0.301166 -0.963417 525.084 267.36)" stroke="white"
                      strokeWidth="0.55175" strokeDasharray="1.1 1.1"/>
                <path d="M514.269 263.974V263.974C514.13 261.592 515.895 259.534 518.222 259.365L519.271 259.289"
                      stroke="white" strokeWidth="0.55175" strokeDasharray="1.1 1.1"/>
                <rect width="11.3354" height="1.29306" rx="0.646532"
                      transform="matrix(-0.516353 -0.857257 0.846184 -0.53145 524.347 268.33)" fill="#D9D9D9"/>
                <line y1="-0.275875" x2="11.6025" y2="-0.275875"
                      transform="matrix(-0.123331 1.00257 -0.981727 -0.125924 475.081 281.468)" stroke="white"
                      strokeWidth="0.55175" strokeDasharray="1.1 1.1"/>
                <path d="M473.8 292.944V292.944C471.529 293.521 469.227 292.124 468.637 289.811L468.374 288.78"
                      stroke="white" strokeWidth="0.55175" strokeDasharray="1.1 1.1"/>
                <rect width="11.2884" height="1.29849" rx="0.649247"
                      transform="matrix(-0.733903 0.678042 -0.663719 -0.74908 476.149 282.03)" fill="#D9D9D9"/>
                <line y1="-0.275875" x2="11.6141" y2="-0.275875"
                      transform="matrix(-0.0918833 -1.00506 0.986151 -0.0940042 129.308 269.309)" stroke="white"
                      strokeWidth="0.55175" strokeDasharray="1.1 1.1"/>
                <path d="M128.127 257.821V257.821C130.22 256.758 132.766 257.611 133.828 259.731L134.307 260.688"
                      stroke="white" strokeWidth="0.55175" strokeDasharray="1.1 1.1"/>
                <rect width="11.3382" height="1.29274" rx="0.646371"
                      transform="matrix(0.570372 -0.820477 0.810279 0.587338 128.146 268.995)" fill="#D9D9D9"/>
                <line y1="-0.275875" x2="11.586" y2="-0.275875"
                      transform="matrix(0.967112 -0.220606 0.215407 0.984649 153.912 310.625)" stroke="white"
                      strokeWidth="0.55175" strokeDasharray="1.1 1.1"/>
                <path d="M164.923 307.978V307.978C166.224 309.97 165.711 312.652 163.769 314.007L162.918 314.601"
                      stroke="white" strokeWidth="0.55175" strokeDasharray="1.1 1.1"/>
                <rect width="11.2177" height="1.30656" rx="0.653282"
                      transform="matrix(0.878466 0.479172 -0.463235 0.885516 154.07 309.409)" fill="#D9D9D9"/>
                <path d="M693.405 344.528L599.891 321.151L584.758 360.774C624.5 378.841 648.273 385.472 693.405 390.887"
                      stroke="#6A8090" strokeWidth="3"/>
                <path d="M627.052 238.736C642.088 245.219 651.516 247.083 666.243 251.415L659.647 304.509"
                      stroke="#6A8090" strokeWidth="3"/>
                <path
                    className={duplexSecondPartHovered ? styles.duplexOn : styles.duplexOff}
                    d="M101.663 125.019L118.737 7.33965C190.544 15.8038 230.592 13.8718 301.498 1.79248L314.69 79.4529L285.976 84.2076L289.469 113.925L209.923 123.038L190.522 120.66L181.597 165.038L145.898 159.094L151.719 130.962L101.663 125.019Z"
                    fill={duplexSecondPartColor}/>
                <path
                    d="M107.096 88.5659L171.12 98.0754M183.925 96.8867L211.863 94.3976M241.741 91.7358L211.863 94.3976M253.382 90.5471H259.979L253.382 33.0942M259.979 103.226L261.531 116.302M267.739 102.038L287.917 100.453M207.983 36.6603L211.863 94.3976"
                    stroke="#6A8090" strokeWidth="1.5"/>
                <path
                    d="M301.109 1L305.272 25.1698M305.272 25.1698L314.69 79.8491L285.588 84.6038L289.469 113.925L209.923 123.038L190.522 121.057L181.597 165.038L145.898 159.491L152.107 130.962L101.663 125.019L115.244 31.5094M305.272 25.1698L295.43 26.3559M115.244 31.5094L118.737 6.9434M115.244 31.5094L156.375 33.7471M167.628 34.3593L209.923 36.6604L221.176 35.3043M230.1 34.2288L285.588 27.5419"
                    stroke="#6A8090" strokeWidth="3"/>
                <line y1="-0.275875" x2="11.5879" y2="-0.275875"
                      transform="matrix(-0.975384 0.177681 -0.173552 -0.993401 183.601 96.936)" stroke="white"
                      strokeWidth="0.55175" strokeDasharray="1.1 1.1"/>
                <path d="M172.488 99.0946V99.0946C171.273 97.0482 171.899 94.3911 173.895 93.1236L174.771 92.5671"
                      stroke="white" strokeWidth="0.55175" strokeDasharray="1.1 1.1"/>
                <rect width="11.226" height="1.30562" rx="0.652811"
                      transform="matrix(-0.856726 -0.517118 0.50065 -0.864865 183.392 98.1445)" fill="#D9D9D9"/>
                <line y1="-0.275875" x2="11.5879" y2="-0.275875"
                      transform="matrix(-0.975384 0.177681 -0.173552 -0.993401 253.446 90.5962)" stroke="white"
                      strokeWidth="0.55175" strokeDasharray="1.1 1.1"/>
                <path d="M242.333 92.7553V92.7553C241.118 90.7088 241.744 88.0518 243.74 86.7842L244.616 86.2277"
                      stroke="white" strokeWidth="0.55175" strokeDasharray="1.1 1.1"/>
                <rect width="11.226" height="1.30562" rx="0.652811"
                      transform="matrix(-0.856726 -0.517118 0.50065 -0.864865 253.237 91.8047)" fill="#D9D9D9"/>
                <line y1="-0.275875" x2="11.6172" y2="-0.275875"
                      transform="matrix(-0.153668 -0.996894 0.978652 -0.157298 260.318 103.699)" stroke="white"
                      strokeWidth="0.55175" strokeDasharray="1.1 1.1"/>
                <path d="M258.431 92.3099V92.3099C260.453 91.1148 263.047 91.8017 264.237 93.8474L264.776 94.7739"
                      stroke="white" strokeWidth="0.55175" strokeDasharray="1.1 1.1"/>
                <rect width="11.3513" height="1.29122" rx="0.645611"
                      transform="matrix(0.518021 -0.854552 0.845901 0.534675 259.139 103.461)" fill="#D9D9D9"/>
            </svg>
        </>
    )
};

export default RenderFloorSeven;
