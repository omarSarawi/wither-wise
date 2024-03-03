
const {MongoClient}=require('mongodb')

var connection="mongodb+srv://Osama-Subani:osamasubani@cluster0.iqjg8p6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

const client=new MongoClient(connection)

const mydb= client.db('weatherWise')  

const collection= mydb.collection('profileInformation') 


const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

app.get('/', function(req,res)
{
    res.send("start my server")
})

app.get("/users",async(req,res)=>{
    //find  =>{}=>all
    const users= await collection.find({}).toArray() 
    res.json(users)
})

app.get("/user/:name",async(req,res)=>{
    //find  =>{}=>all
    const users= await collection.findOne({'name':req.params.name}) 
    res.send(users)
})

app.get('/getData',function(req,res){
    var data={name:"osama",age:20,field:"SE"}
    res.json(data)
})

app.get('/getPrice',function(req,res){
    var prices={price1:"10 JD",price2:"20 JD",price3:"12 JD"}
    res.json(prices)
})

var server= app.listen(9000, function()
{
    var host = server.address().address
    var port= server.address().port
})