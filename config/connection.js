
// Dependencies
var mysql = require("mysql");

require('dotenv').config();

const util = require("util");
var connection;

// Set up MySQL connection
if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: "process.env.DB_PASS",
        database: "burger_db"
    });
}

// Make connection
connection.connect(function(err) {
    if (err) {
        console.error("err connecting: " + err.stack);
        return;
    }
    console.log("Connected as id: " + connection.threadId);
});

// Export connection for ORM to use
module.exports = connection;