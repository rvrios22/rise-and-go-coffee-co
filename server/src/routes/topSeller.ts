import Express from "express";
const router = Express.Router()
import squareClient from '../squareClient'
import { findItemQuantaties, getMostPopularItems } from "../helpers/topSellers";

router.get('/', async (req, res, next) => {
    try {

        const response = await squareClient.orders.search({
            locationIds: [
                // rise and go coffee local id
                'DVTPR8QN487NE',
                // 'LTSX6G4NH851C'
            ],
            // returnEntries: true
        })
        const orders = response.orders
        const itemTotals = findItemQuantaties(orders)
        const popularItems = getMostPopularItems(itemTotals)
        res.json(popularItems)
    } catch (err) {
        next(err)
    }
})

export default router