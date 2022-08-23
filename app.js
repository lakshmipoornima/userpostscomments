const express=require('express')
//const { json } = require('sequelize/types')
const {sequelize,User,Post,Comment}=require('./models')


const app=express()
const routes=require('./routes/index')
const morgan=require('morgan')

app.use(express.json())
app.use(morgan('common'))
app.use('/api/v1',routes)

app.listen({port:5000},async()=>{
    console.log("Server started listening at port 5000...");
    await sequelize.authenticate()
    console.log("Database synced..");
})


