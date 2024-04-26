const express = require("express")
const router = require("./routes/index")


const port = process.env.PORT || 3000
const app = express();
app.set('view engine', 'ejs')
app.use('/student', router)

app.get('/', (req, res) =>{
    res.send("Hello World Baba  Bhaanoo is Back wirh full potential")
    res.render("index.html")
})


app.listen(port, () => {
    console.log(`Server is running @ ${port}`);
})


















// import {MongoClient} from "mongodb";

// const uri = 'mongodb://localhost:27017';
// const myDataBase = "StdBase"

// const dbConnect = new MongoClient(uri);

// async function makeConnection(){

//     try {
//         await dbConnect.connect();
//         console.log("connecting to DataBase");
        
//         const dataBase = dbConnect.db(myDataBase)
//         console.log(`now Selecting myDataBase : ${myDataBase}`);
        
//         const myColl = dataBase.collection("stdCollection")
//         console.log(`now Selecting myCollection : stdCollection`);

//         const result = await myColl.insertOne({name: "Ritu", age: 26, email: "ritulal@gmail.com", rollno: 821106})
//         console.log(result);
        
//     } catch (error) {
//         console.log("Something went wrong while connecting to DataBase");
//     } finally{
//         await dbConnect.close()
//         console.log("now disconnected from DataBase");
//     }

// }

// makeConnection();

// import { MongoClient } from "mongodb";

// const url = "mongodb://localhost:27017";
// const myDataBase = "ftDataBase";

// const dbConnect = new MongoClient(url)

// function makeConnection(){
//     dbConnect.connect()
//         .then(() => {
//             console.log("Connecting to Database");

//             const dbBase = dbConnect.db(myDataBase)
//             console.log("Now Selecting faculty DataBase");

//             const fcoll = dbBase.collection("fCOllection");
//             console.log("now selecting faculty COllection to perform operation");

//             return fcoll.insertOne({name: "GFC", id: 36, email: "gfc@gmail.com"})
//         })
//         .then((result) =>{

//             console.log(result);
//             console.log("Data Entry Successful");
//         }).catch((error) => {
//             console.log("Something went wrong: ", error);
//         })
//         .finally( () => {
//             console.log("now closing the connection");
//             dbConnect.close()
//         })
// }

// makeConnection();


//++++++++++ Promise ++++++++ //
// const promiseOne = new Promise( (resolve, rejected) => {

//     setTimeout( () => { 
//         console.log("I am doing this on the Basis");
//         resolve()
//     },  3000)
// }).then( () => {
//     console.log("Promise one is consumed Here");
// })

// const promiseTwo = new Promise( (resolve, rejected) => {

//     setTimeout( () => {
//         console.log("I am promise Two");
//         // resolve({name: "Bhaanoo"})
//         rejected("Promise Is rejected")
//      }, 3000)
// })

// async function consumingPromiseTwo(){
//     try {
//         const respone  = await promiseTwo;
//         console.log(respone);        
//     } catch (error) {
//         console.log("Something Went wrong", error);
//     }
// }

// consumingPromiseTwo()