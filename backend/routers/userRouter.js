const express = require('express')
const data = require ('../data')
const User = require('../models/userModels')
const { generateToken } = require('../token/token')
const userRouter = express.Router();
// console.log(User)
// const User = sequelize.import(__dirname + "Project_Web/backend/models/userModels.js");
userRouter.get('/seed',async (req,res) => {
    const createdUsers = await User.bulkCreate(
        data.users,
    )
    res.send({createdUsers})
})
userRouter.post('/signin',async (req,res) => {
    console.log(req.body.email)
    const user = await User.findOne({where: {email: req.body.email}});
    console.log(user)
    if(user) {
        if(req.body.password == user.password){
            res.send({
                id:user.id,
                name: user.name,
                email:user.email,
                isAdmin: user.isAdmin,
                token: "generateToken(user)",
            })
            return;
        }  
    } else {
        res.status(401).send({message: 'Invalid email or password'});
    }



})

module.exports = userRouter;
