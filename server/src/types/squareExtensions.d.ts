import 'square'
import { Square } from 'square'

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
}