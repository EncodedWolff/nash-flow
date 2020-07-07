const express = require('express');
const MongoClient = require('mongodb').MongoClient;
require('dotenv').config();

const app = express();
const uri = process.env.MONGO_URI;
const client = new MongoClient(uri, { useNewUrlParser: true });


client.connect(err => {
    const collection = client.db("NASH_FLOW_DATA").collection("companies");
    // perform actions on the collection object
    client.close();
});
