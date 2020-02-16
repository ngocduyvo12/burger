// Import MySQL connection.
var connection = require("../config/connection.js");

// Helper function for SQL syntax.
// Let's say we want to pass 3 values into the mySQL query.
// In order to write the query, we need 3 question marks.
// The above helper function loops through and creates an array of question marks - ["?", "?", "?"] - and turns it into a string.
// ["?", "?", "?"].toString() => "?,?,?";
function printQuestionMarks(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
}

// Helper function to convert object key/value pairs to SQL syntax
function objToSql(ob) {
  var arr = [];

  // loop through the keys and push the key/value as a string int arr
  for (var key in ob) {
    var value = ob[key];
    // check to skip hidden properties
    if (Object.hasOwnProperty.call(ob, key)) {
      // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = "'" + value + "'";
      }
      // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
      // e.g. {sleepy: true} => ["sleepy=true"]
      arr.push(key + "=" + value);
    }
  }

  // translate array of strings to a single comma-separated string
  return arr.toString();
}

// Object for all our SQL statement functions.
var orm = {
  selectAll: function(cb) {
    var queryString = "SELECT * FROM burgers";
    connection.query(queryString, function(err, results) {
      if (err) {
        throw err;
      }
      cb(results)
    });
  },

  insertOne: function(burgerName, cb) {
    var queryString = `INSERT INTO burgers (burger_name) VALUES ("${burgerName}")`
    console.log(queryString);
    connection.query(queryString, function(err, results) {
      if (err) {
        throw err;
      }
      console.log(results)
      cb(results)
    });
  },
  // An example of objColVals would be {name: panther, sleepy: true}

  updateOne: function(devourState, burgerId, cb) {
    var queryString = `UPDATE burgers SET devoured = ${devourState} WHERE id=${burgerId}`
    connection.query(queryString, function(err, results) {
      if (err) {
        throw err;
      }

      cb(results)
      console.log(results)
    });
  },

};

// Export the orm object for the model (cat.js).
module.exports = orm;
