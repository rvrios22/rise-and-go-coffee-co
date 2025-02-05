import { ItemVariationData } from "./itemVariationData";
export interface Variation {
    type: 'ITEM_VARIATION' | string; // if there are other variation types, add them here
    created_at: string; // ISO date string
    itemVariationData: ItemVariationData;
    id: string;
    updatedAt: string; // ISO date string
    version: bigint; // BigInt version number
    isDeleted: boolean;
    catalogV1Ids: string[]; // assuming these are strings; adjust if needed
    presentAtAllLocations: boolean;
    presentAtLocationIds: string[]; // assuming these are strings
}