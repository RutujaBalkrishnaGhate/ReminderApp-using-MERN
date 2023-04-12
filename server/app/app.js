import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import routes from "./routes/index.js";
import model from "./models/index.js";

const app = express();

// Connect application with database mongoose
mongoose.connect('mongodb://localhost:27017/reminderListDb');

// to get hold on connection
const con = mongoose.connection;

con.on('open', () => {
  console.log("connected.......");
})



app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());


routes(app);
export default app;