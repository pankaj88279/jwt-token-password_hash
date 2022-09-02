const express=require('express');
const { loginController } = require('../../controllers/loginControllers');


 const loginRoute=express.Router();

 loginRoute.post('/api/login_student2',loginController )
 
 exports.loginRoute=loginRoute