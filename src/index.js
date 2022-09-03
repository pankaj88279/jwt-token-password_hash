const express=require('express');
const { adminRoute } = require('./Route/admin/adminRoutes');
const { loginRoute } = require('./Route/admin/loginRoute');
const { teacherRoute } = require('./Route/teacherRoute');
const app=express();

require('dotenv').config();

app.use(express.json());

app.use(adminRoute)
app.use(loginRoute)
app.use(teacherRoute)
const port=process.env.PORT

app.listen(port,()=>{
    console.log('running port',port)
})