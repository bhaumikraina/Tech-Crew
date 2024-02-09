const mongoose = require('mongoose');
require('dotenv').config();
const Review = require('./models/reviewModel');
const mongoDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://Sushrut:sushrut123@sushutdabholkar.ck34njj.mongodb.net/Tech_Crew", { useNewUrlParser: true, useUnifiedTopology: true });

    const collection = mongoose.connection.db.collection("Samples");
    const collection1 = mongoose.connection.db.collection("categories");
    const collection2 = mongoose.connection.db.collection("types");
    const collection3 = mongoose.connection.db.collection("users");
    global.food_sample = await collection.find({}).toArray();
    global.food_categories = await collection1.find({}).toArray();
    global.food_types = await collection2.find({}).toArray();


    

  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }

};

module.exports = mongoDB;
