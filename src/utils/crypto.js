const bcrypt = require('bcrypt') 

const hashPassword = (plainpassword) => {
    return bcrypt.hashSync(plainpassword,10)
}

const comparePassword = (plainPassword, hashedPassword) => {
    return bcrypt.compareSync(plainPassword,hashedPassword)
}

module.exports = {
    hashPassword,
    comparePassword
}