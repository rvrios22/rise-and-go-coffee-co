import Express from "express";
const router = Express.Router()
import squareClient from '../squareClient'
import { findItemQuantaties, formatPrice, sortMostPopularItems } from "../helpers/topSellers";
import { ExtendedCatalogObject } from "../types/squareExtensions";

router.get('/', async (req, res, next) => {
    try {
        const response = await squareClient.orders.search({
            locationIds: [
                // rise and go coffee local id
                'DVTPR8QN487NE',
            ],
            // returnEntries: true
        })
        const orders = response.orders
        const itemTotals = findItemQuantaties(orders)
        const popularItems = sortMostPopularItems(itemTotals)


        const searchResults = await squareClient.catalog.batchGet({
            objectIds: [
                popularItems[0].catalogObjectId,
                popularItems[1].catalogObjectId,
                popularItems[2].catalogObjectId,
                popularItems[3].catalogObjectId,
            ],
        })
        const popularItemsAndPricing = searchResults.objects?.map((obj, idx) => {
            const extendedObj = obj as ExtendedCatalogObject
            const formattedPrice = formatPrice(extendedObj.itemVariationData?.priceMoney)
            return {
                formattedPrice,
                popularItems: popularItems[idx]
                
            }
        })

        res.json(popularItemsAndPricing)
    } catch (err) {
        next(err)
    }
})

export default router