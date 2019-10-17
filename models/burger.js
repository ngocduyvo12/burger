
var orm = require("../config/orm.js")


var burger = {
    selectAll: function(data){
        orm.selectAll(function(res){
            cb(res)
        })
        console.log(data)
    },
    // The variables cols and vals are arrays.
  
    //.create(columns, values, cb)
    // cols = "name" "sleepy"
    insertOne: function(burgerName, devourState, cb) {
  
      //.create("cats", ["name", "sleepy"], [req.body.name, req.body.sleepy], cb])
      orm.insertOne(burgerName, devourState, function(res) {
        cb(res);
      });
    },
    
    // The variables cols and vals are arrays.
  
    //.create(columns, values, cb)
    // cols = "name" "sleepy"
    updateOne: function(devourState,burgerId, cb) {
  
      //.create("cats", ["name", "sleepy"], [req.body.name, req.body.sleepy], cb])
      orm.insertOne(devourState, burgerId, function(res) {
        cb(res);
      });
    },
}