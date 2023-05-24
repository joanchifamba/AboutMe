const mysql = require('mysql2');

exports.db = mysql.createConnection({
    host: "localhost",
    user: "joan",
    password: "Joan@123$",
    database: "entries"
});