import { Request, Response, NextFunction } from "express";
import { SquareError } from "square";


const squareErrorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof SquareError) {
        err.errors.forEach((err) => {
            console.error("Square Error:");
            console.error("Category:", err.category);
            console.error("Code:", err.code);
            console.error("Detail:", err.detail);
        })
        res.json({
            message: 'A Square API error has occured',
            error: err.errors
        })
    } else {
        console.error('Something went wrong', err)
        next(err)
    }

}

export default squareErrorHandler