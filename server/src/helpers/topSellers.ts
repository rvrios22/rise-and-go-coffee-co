export const findItemQuantaties = (orders: any) => {
    const itemInfo: Record<string, {id: string, quantity: number}> = {}

    orders.forEach((order: any) => {
        const lineItems = order.lineItems[0]
        if (!lineItems) return

        const itemName: string = lineItems.name
        const itemQuantity: string = lineItems.quantity
        const catalogObjectId: string = lineItems.catalogObjectId

        if(itemInfo[itemName]) {
            itemInfo[itemName].quantity += parseInt(itemQuantity)
        } else {
            itemInfo[itemName] = {id: catalogObjectId, quantity: parseInt(itemQuantity)}
        }
    })
    return itemInfo
}

 export const getMostPopularItems = (
    itemInfo: Record<string, {id: string, quantity: number}>
) => {
    return Object.entries(itemInfo)
        .sort(([, a], [, b]) => b.quantity - a.quantity)
        .map(([name, {id, quantity}]) => ({ name, catalogObjectId: id, quantity }))
}