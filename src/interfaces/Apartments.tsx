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
    reserved: boolean,
    floorNumber: number
    price: number
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