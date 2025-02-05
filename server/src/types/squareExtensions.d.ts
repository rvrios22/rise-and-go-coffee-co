import 'square'
import { Square } from 'square'
import { Variation } from './variation'
import { Category } from './category'

export type ExtendedCatalogObject = Square.CatalogObject & {
    itemVariationData?: {
        itemId: string;
        name: string;
        ordinal: number;
        pricingType: 'FIXED_PRICING' | 'VARIABLE_PRICING';
        priceMoney: {
            amount: bigint;
            currency: string;
        };
    }
    itemData?: {
        name: string;
        description: string;
        isTaxable: boolean;
        variations: Variation[];
        productType: 'FOOD_AND_BEV' | string;
        skipModifierScreen: boolean;
        ecom_uri: string;
        ecom_available: boolean;
        ecom_visibility: 'VISIBLE' | string;
        categories: Category[];
        descriptionHtml: string;
        descriptionPlaintext: string;
        channels: string[];
        isArchived: boolean;
        reportingCategory: Category;
    }
}