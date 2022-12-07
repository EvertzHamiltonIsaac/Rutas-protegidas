const passport = require('passport')
const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt
const {findUserById} = require('../users/users.controllers')
const config = require('../../config')

const options = {
    jwtFromRequest : ExtractJwt.fromAuthHeaderWithScheme('jwt'),
    secretOrKey: config.api.jwtSecret
}

passport.use(
    new JwtStrategy(options, async (tokenDecoded, done) => {
        try {
            const user = await findUserById(tokenDecoded.id)
            if(user){
                return done(null, tokenDecoded)
            }else {
                return done(null, false)
            }
        }
        catch(err) {
            return done(err, false)
        }
    }) 
)

module.exports = passport