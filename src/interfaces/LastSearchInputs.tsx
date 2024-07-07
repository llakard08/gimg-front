export interface LastSearchInputs {
    selectedPriceRange: PriceRange
    selectedType: string
    selectedAreas: boolean[]
    selectedFloors: boolean[]
    selectedFloorsQuantity: number
}

export interface PriceRange {
    low: number
    high: number
}

