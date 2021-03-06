const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const cors = require("cors")
const dotenv = require("dotenv");
require("dotenv").config();

/*---------------------------------------Set Up Server-------------------------------------------*/
const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin:["http://localhost:3000"],
    credentials:true
}));
dotenv.config({ path: './config.env' });

const PORT = process.env.PORT||5000;
app.listen(PORT,()=>{
    console.log(`Server start on port : ${PORT}`)
})



/*---------------------------------------connect to mongoDB-------------------------------------------*/
//Type 01
const URL= process.env.DATABASE;

mongoose
    .connect(URL,{
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    })
    .then(() => console.log('DB connection successful!'));

/*---------------------------------------Create Routes-------------------------------------------*/



// Employee manager routes
app.use("/payment", require("./Routes/GetwayRouter"));
// app.use("/salary", require("./routes/employee-manager/salaryRout"));






