const mysql = require('mysql');

exports.connect = function () {
    var connection = mysql.createConnection(process.env.JAWSDB_URL);
    connection.connect();

    connection.query("SELECT 1 + 1 AS solution", function(err, rows, fields) {
        if (err) throw err;

        console.log("The solution is " + rows[0].solution);
    });

    connection.end();
}

exports.printMsg = function() {
    console.log("This is a message from the demo package");
}

exports.task = function() {
    return {
        hello: () => "Hello"
    };
}