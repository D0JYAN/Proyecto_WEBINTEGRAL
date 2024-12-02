const mysql = require('mysql2');//Instalar el modulo de MySql2

//Configuracion de la conexion
//host, username, password, db

const connection = mysql.createConnection({
    host: 'bneujvh7ctxzoxczhj2b-mysql.services.clever-cloud.com',
    user: 'u5hs0b0byp2fhxoo',
    password: 'BFWD7h4YFovylDaFaYgj',
    database: 'bneujvh7ctxzoxczhj2b'
})

//Conectar a la base de datos
connection.connect((err) => {
    if (err) throw err;
    console.log('Conectado a la base de datos');
})

module.exports = connection;