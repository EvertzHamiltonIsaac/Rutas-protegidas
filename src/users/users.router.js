const router = require('express').Router()
const JwtPassport = require('../middleware/auth.middleware')
const userServices = require('./users.services')


router.get("/",JwtPassport.authenticate('jwt', {session: false}) , userServices.getAllUsers) //? /api/v1/users
router.post("/",JwtPassport.authenticate('jwt', {session: false}) ,userServices.postUser) //? /api/v1/users

router.get("/:id", JwtPassport.authenticate('jwt', {session: false}) ,userServices.getUserById) //? /api/v1/users/:id
router.patch('/:id',JwtPassport.authenticate('jwt', {session: false})  ,userServices.patchUser) //? /api/v1/users/:id
router.delete('/:id',JwtPassport.authenticate('jwt', {session: false})  ,userServices.deleteUser) //? /api/v1/users/:id

module.exports = router