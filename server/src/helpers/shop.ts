import { CatalogObject } from "square/api";
import { Page } from "square/core";
import { ExtendedCatalogObject } from "../types/squareExtensions";
import { formatPrice } from "./topSellers";


export const getAllShopItems = (res: Page<CatalogObject>) => {
    return res.data.map((obj) => {
        const extendedObj = obj as ExtendedCatalogObject
        console.log(extendedObj.itemData)
        const name = extendedObj.itemData?.name
        const catagoryObjId = extendedObj.itemData?.variations[0].id
        //using formatPrice function from topSellers helpers
        const formattedPrice = formatPrice(extendedObj.itemData?.variations[0].itemVariationData.priceMoney)
        const price = formattedPrice?.amount

        return { name, catagoryObjId, price }
    })
}