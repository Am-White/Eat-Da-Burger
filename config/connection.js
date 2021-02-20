
// Dependencies
var mysql = require("mysql");
var connection;

// Set up MySQL connection
if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: "d6rii63wp64rsfb5.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
        port: 3306,
        user: "a6zekygwk8p3afw7",
        password: "pf0160wgwfvh2sk3",
        database: "ub7urmo990w2f5ke"
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