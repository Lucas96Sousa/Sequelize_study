const express = require('express')
require('dotenv').config()
const morgan = require('morgan')


/*
 * Middlewares imports 
*/

const routes = require('./routes/index')


const app = express();

app.use(express.json())
app.use(morgan('tiny'))
app.use(routes)

app.listen(process.env.PORT, ()=> console.log(`Server access - http://localhost:${process.env.PORT}`))
