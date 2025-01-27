require('dotenv').config()
import { SquareClient, SquareEnvironment } from "square";

const client = new SquareClient({ token: process.env.TOKEN, environment: SquareEnvironment.Production })

export default client