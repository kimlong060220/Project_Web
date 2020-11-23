// import jwt from 'jsonwebtoken';
const jwt = require('jsonwebtoken')

function generateToken(user) {
    return jwt.sign({
        id:user.id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin
    }, process.env.JWT_SECRET, {
        expiresIn: '10d'
    })
}
module.exports.generateToken = generateToken;