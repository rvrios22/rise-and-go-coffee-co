import express, { Request, Response } from 'express';
import path from 'path';
import image from './routes/image'

const app = express();
const port = 3001;

app.use(express.static(path.join(__dirname, '..', 'public')))
app.use('/api/image', image)

app.get('/', (req: Request, res: Response) => {
  res.send("Hello from TypeScript and Express!");
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});