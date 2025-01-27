import express, { NextFunction, Request, Response } from 'express';
import path from 'path';
import image from './routes/image'
import topSeller from './routes/topSeller'
import squareErrorHandler from './middleware/squareErrorHandler';

const app = express();
const port = 3001;

app.use(express.static(path.join(__dirname, '..', 'public')))
app.use(squareErrorHandler)
app.use('/api/image', image)
app.use('/api/topSeller', topSeller)

app.get('/', (req: Request, res: Response) => {
  res.send("Hello from TypeScript and Express!");
});

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack)
  res.status(500).json({ message: "Something went wrong" })
})

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});