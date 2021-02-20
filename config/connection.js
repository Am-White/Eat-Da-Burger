
// Dependencies
var mysql = require("mysql");
var connection;

// Set up MySQL connection
if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: "hwr4wkxs079mtb19.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
        port: 3306,
        user: "xffrwiiy26yt7aqn",
        password: "siq7vcoocdfv15ih",
        database: "ntdi7cfy9yd3je4q"
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