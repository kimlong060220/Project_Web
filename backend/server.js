import express from 'express';
import mongoose from 'mongoose';
import productRouter from './routers/productRouter.js';
import userRouter from './routers/userRouter.js';
import orderRouter from './routers/orderRouter.js';
import cors from 'cors'
import path from 'path';
import dotenv from 'dotenv';

dotenv.config();
const __dirname = path.resolve();

const app = express();
app.use(express.static(path.join(__dirname, '/frontend/build')))
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(process.env.MONGODB_URI||'mongodb+srv://Nghia:Tanlenghia06032000@cluster0.w36ht.mongodb.net/Cluster0?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

app.use('/api/users', userRouter);
app.use('/api/products', productRouter);
app.use('/api/orders', orderRouter);


app.get('/', (req, res) => {
  res.send('Server is ready');
});

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});
// if(process.env.NODE_ENV === 'production') {
app.get('*',(req,res) =>{
    res.sendFile(path.join(__dirname + '/frontend/build/index.html'))
})
// }

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`);
});
