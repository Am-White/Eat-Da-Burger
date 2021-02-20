var connection = require("../config/connection.js");

function printQuestionMarks(num) {
    var arr = [];

    for(var i = 0; i< num; i++) {
        arr.push("?");
    }
    return arr.toString();
}

function obToSql(ob) {
    var arr = [];

    for(var key in ob) {
        var value = ob[key];
        if (Object.hasOwnProperty.call(ob, key)) {
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }
            arr.push(key + "=" + value);
        }
    }
    return arr.toString();
}

var orm = {
    selectAll: function(tableINput, cb) {
        var queryString = "SELECT * FROM " + tableINput + ";";
        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
}