require('dotenv').config()
import Express from "express";
const router = Express.Router()
import squareClient from '../squareClient'
import { getAllShopItems } from "../helpers/shop";

router.get('/', async (req, res, next) => {
    try {
        const response = await squareClient.catalog.list({ types: 'ITEM' })
        //returns an array of objs with categoryObjId and price
        const shopItems = getAllShopItems(response)
        res.send(shopItems)
    } catch (err) {
        next(err)
    }
})

export default router