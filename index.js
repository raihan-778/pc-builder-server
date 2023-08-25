require("dotenv").config();
const express = require("express");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const app = express();
const port = process.env.PORT || 5000;

const cors = require("cors");

app.use(cors());

 const uri = "mongodb+srv://pc-builder:MJger64Z2HKQx6xL@cluster0.wlin7fq.mongodb.net/?retryWrites=true&w=majority";
 
 // Create a MongoClient with a MongoClientOptions object to set the Stable API version
 const client = new MongoClient(uri, {
   serverApi: {
     version: ServerApiVersion.v1,
     strict: true,
     deprecationErrors: true,
   }
 });
 
 async function run(req,res,) {
  
   try {
     // Connect the client to the server	(optional starting in v4.7)
     await client.connect();
     console.log("PC Builder Server is Running")
     const pcComponents=client.db("pc-builder").collection("components");
     console.log("Pinged your deployment. You successfully connected to MongoDB!");
 
  
 
 
     app.get('/products', async(req,res)=>{
        const query={}
       const products = await pcComponents.find(query).toArray();

       res.send({ message: "success", status: 2000, data: products });
     })
       
    
   } finally {
     // Ensures that the client will close when you finish/error
    
   }


 }

 run().catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("PC Builder Server is Running");
});

app.listen(port, () => {
  console.log(`PC Builder app listening on port ${port}`);
});


 
 
 
 
 