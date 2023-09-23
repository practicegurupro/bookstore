import express, { request, response } from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import { Book } from "./models/bookmodel.js";
import booksRoute from "./routes/booksRoute.js";
import cors from 'cors';

const app = express();

app.use(express.json());

app.use(cors());

// app.use(cors({

// origin: 'http://localhost:5555',
// methods: ['GET', 'POST', 'PUT', 'DELETE'],
// allowheaders: ['Content-Type'],    

// }));





app.listen(process.env.PORT || 5555, () => {
    console.log(`App is listening to port: ${process.env.PORT || 5555}`);
});



app.get('/', (request, response) =>{
console.log(request)
return response.status(234).send('Welcome to my first MERN Project')
})


app.use('/books',booksRoute);


mongoose.connect(mongoDBURL)
.then(() => {
    console.log('I connected to MongoDB');
    

})
.catch((error) =>{
    console.log('Error connecting to MongoDB:', error.message);

})