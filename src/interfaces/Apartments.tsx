export interface Building {
    minPrice: number,
    maxPrice: number,
    floors: Floor[]
}

export interface Floor {
    floorNumber: number,
    numberOfApartments: number,
    apartments: Apartment[]
}

export interface Apartment {
    apartmentNumber: number,
    apartmentArea: number,
    balcony: number,
    type: string,
    sold: boolean,
    floorNumber: number
    price: number
    entranceArea: number,
    kitchenArea: number,
    bathroomArea: number,
    loungeArea: number,
    bedrooms: [
        {
            area: number
        }
    ],
    outerSpaces: [
        {
            area: number
        }
    ],
    pictureName: string
    benefits: [
        {
            languageKey: string
        }
    ]
    linkedApartment: LinkedApartment | undefined
}

export interface LinkedApartment {
    apartmentArea: number,
    balcony: number,
    pictureName: string
}