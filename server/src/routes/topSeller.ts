require('dotenv').config()
import Express from "express";
const router = Express.Router()
import squareClient from '../squareClient'
import { findItemQuantaties, formatPrice, getPopularItemsAndPricing, sortMostPopularItems } from "../helpers/topSellers";

router.get('/', async (req, res, next) => {
    const riseAndGoLocalId = process.env.RISE_AND_GO_COFFEE_LOCAL
    if (!riseAndGoLocalId) {
        throw new Error("Location ID is not defined in the enviromement variables")
    }

    try {
        const response = await squareClient.orders.search({
            locationIds: [
                riseAndGoLocalId
            ],
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
        //itemsAndPricings takes in search results and popular items from above
        //calls formatPrice directly from helper file
        //formats pricing from bigint to strings, and matches the pricing with the correct item
        const itemsAndPricings = getPopularItemsAndPricing(searchResults, popularItems)
        res.json(itemsAndPricings)
    } catch (err) {
        next(err)
    }
})

export default router