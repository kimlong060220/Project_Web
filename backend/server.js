const express = require('express') 
const cors = require('cors')
const data = require('./data');
const userRouter = require('./routers/userRouter')

const dotenv = require('dotenv')
const app = express();
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended: true}))

const port = process.env.PORT || 5000;
const db = require('./config/database')

dotenv.config();

db.authenticate()
  .then(() => {
    console.log('Connection to DB has been established successfully.'); // eslint-disable-line no-console
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err); // eslint-disable-line no-console
  });
db.sync({force: false})
app.use('/api/users',userRouter)

app.get('/api/products',(req, res)=>{
    res.send(data.products)
})

app.get('/',(req,res) => {
    res.send('Server is ready');
});
app.use((err,req,res,next) => {
    res.status(500).send({message: err.message});
})

app.listen(port,() =>{
    console.log(`Server listening at http://localhost:${port}`)
})
