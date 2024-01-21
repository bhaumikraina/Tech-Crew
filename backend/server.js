const express = require('express')
const mongoose = require('mongoose')
cors = require("cors")
const mongoDB=require("./db")
require('dotenv').config()
// const mongoDB=require("./db")
// const cartRoutes = require('./routes/Cart')
// const itemRoutes = require('./routes/Item')
//importing routes
const dataRoutes = require('./routes/Data')

//middleware
const app = express()
mongoDB();
app.use(cors());
app.use(express.json())
app.use((req, res, next) => {
	console.log(req.path, req.method)
	next()
})		

app.use('/data', dataRoutes)

app.listen(process.env.PORT, () => {
	            console.log('Listening on port ',process.env.PORT)
})


//using routes

// app.use('/items', itemRoutes)
// app.use('/add', cartRoutes)


//connecting with db


// mongoose
// 	.connect(
// 		process.env.MONGO_URI
		
// 	)
// 	.then(() => {
// 		app.listen(3000, () => {
//             console.log('Listening on port ',process.env.PORT)
// 			const fetched_data=mongoose.connection.db.collection("Sample")
// 			            fetched_data.find({}).toArray(function(e,data){
// 			                if(e) console.log(e)	
// 			                else console.log(data)})
//         })
		
// 	})
// 	.catch((err) => {
// 		console.log('Error')
// 		console.log(err)
// 	})


