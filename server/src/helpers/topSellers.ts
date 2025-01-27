export const findItemQuantaties = (orders: any) => {
    const itemTotals: Record<string, number> = {}

    orders.forEach((order: any) => {
        const lineItems = order.lineItems[0]
        console.log(lineItems)
        if (!lineItems) return

        const itemName: string = lineItems.name
        const itemQuantity: string = lineItems.quantity

        if(itemTotals[itemName]) {
            itemTotals[itemName] += parseInt(itemQuantity)
        } else {
            itemTotals[itemName] = parseInt(itemQuantity)
        }
    })
    return itemTotals
}

export const getMostPopularItems = (itemTotals: Record<string, number>) => {
    return Object.entries(itemTotals)
        .sort((a, b) => b[1] - a[1])
        .map(([name, quantity]) => ({ name, quantity }))
}