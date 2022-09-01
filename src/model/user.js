//var mongoose = require('mongoose');

const {mongoose } = require("../config/db");

 
 
 
 let userSchema= new mongoose.Schema({ 
                             name: {
                            type: String,
                            require:true,
                            uniqe:true
                            },
                    username:{
                        type: String,
                        require:true,
                        uniqe:true
                    },

                    email:{
                        type: String,
                        require:true,
                        uniqe:true
                    },

                    password_hash:{
                        type: String,
                        require:true,
                        uniqe:true
                    },
                    role:{
                        type: String,

                    }
                    },{
                        timestamps:true
                    });



 const User = mongoose.model('User', userSchema)

 exports.User=User