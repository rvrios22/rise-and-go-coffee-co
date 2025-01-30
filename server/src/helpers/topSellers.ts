export const findItemQuantaties = (orders: any) => {
    const itemInfo: Record<string, { id: string, quantity: number }> = {}

    orders.forEach((order: any) => {
        const lineItems = order.lineItems[0]
        //removes items from orders array if they dont have line item object or catalog object id
        if (!lineItems || !lineItems.catalogObjectId) return

        const itemName: string = lineItems.name
        const itemQuantity: string = lineItems.quantity
        const catalogObjectId: string = lineItems.catalogObjectId

        if (itemInfo[itemName]) {
            itemInfo[itemName].quantity += parseInt(itemQuantity)
        } else {
            itemInfo[itemName] = { id: catalogObjectId, quantity: parseInt(itemQuantity) }
        }
    })
    return itemInfo
}

export const sortMostPopularItems = (
    itemInfo: Record<string, { id: string, quantity: number }>
) => {
    return Object.entries(itemInfo)
        .sort(([, a], [, b]) => b.quantity - a.quantity)
        .map(([name, { id, quantity }]) => ({ name, catalogObjectId: id, quantity }))
}

export const formatPrice = (priceMoney?: { amount: bigint, currency: string }) => {
    if (!priceMoney) return null
    const formattedAmount = (Number(priceMoney.amount) / 100).toFixed(2)
    return {
        amount: formattedAmount,
        currency: priceMoney.currency
    }
}