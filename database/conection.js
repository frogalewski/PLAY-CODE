const sequelize = require('sequelize')

const connection = new sequelize('cadastro usuario','root',''{
	host: 'localhost',
	dialect:'mysql'
})

module.exports = connection