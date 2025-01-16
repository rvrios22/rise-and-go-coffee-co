import Express from "express";
import path from "path";
const router = Express.Router()

router.get('/:img', (req, res, next) => {
    const imgName = req.params.img
    let options = {
        maxAge: 2592000000,
        root: path.join(__dirname, '..', '..', 'public')
    }

    res.sendFile(imgName, options, (err) => {
        if (err) {
            next(err)
        } else {
            console.log(`Sent ${imgName}`)
        }
    })
})

export default router