const express = require('express')
const mongoose = require('mongoose')
cors = require("cors")
require('dotenv').config()

//importing routes


//middleware
const app = express()
app.use(express.json())
app.use((req, res, next) => {
	console.log(req.path, req.method)
	next()
})

//models



//using routes




//connecting with db

mongoose
	.connect(
		process.env.MONGO_URI,
		{ useNewUrlParser: true, useUnifiedTopology: true }
	)
	.then(() => {
		app.listen(4000, () => {
            console.log('Listening on port ',process.env.PORT)
        })
	})
	.catch((err) => {
		console.log('Error')
		console.log(err)
	})



