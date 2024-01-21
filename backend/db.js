const mongoose = require('mongoose');
require('dotenv').config();

const mongoDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://Sushrut:sushrut123@sushutdabholkar.ck34njj.mongodb.net/Tech_Crew", { useNewUrlParser: true, useUnifiedTopology: true });

    const collection = mongoose.connection.db.collection("Sample");
    const collection1 = mongoose.connection.db.collection("categories");
    const collection2 = mongoose.connection.db.collection("types");
    global.food_sample = await collection.find({}).toArray();
    global.food_categories = await collection1.find({}).toArray();
    global.food_types = await collection2.find({}).toArray();

    // Uncomment the following lines if you want to log the fetched data
    // if (global.food_sample.length > 0) {
    //   console.log('Fetched Data:', global.food_sample);
    // } else {
    //   console.log('No data found in the "Sample" collection.');
    // }
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
  // Remove the following line if you want to keep the connection open
  // await mongoose.connection.close();
};

module.exports = mongoDB;