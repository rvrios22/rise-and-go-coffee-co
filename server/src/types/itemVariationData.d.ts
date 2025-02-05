export interface ItemVariationData {
    itemId: string;
    name: string;
    sku: string;
    ordinal: number;
    pricingType: 'FIXED_PRICING' | string; // extend if there are other pricing types
    priceMoney: { amount: bigint; currency: string };
    locationOverrides: LocationOverride[];
    sellable: boolean;
    stockable: boolean;
    channels: string[]; // assuming these are strings
}