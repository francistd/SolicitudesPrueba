const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'contactos'
});

mysqlConnection.connect(function (err){
	if (err) {
		console.log(err);
		return;
	}else {
		console.log('Conectado a la Base de Datos');
	}

});

module.exports = mysqlConnection;