
var orm = require("../config/orm.js")


var burger = {
    selectAll: function(cb){
        orm.selectAll(function(res){
            // console.log(`models burger.js:`)
            // console.log(res)
            cb(res)
        })

    },

    insertOne: function(burgerName, cb) {
      orm.insertOne(burgerName, function(res) {
        cb(res);
      });
    },
  
    updateOne: function(devourState,burgerId, cb) {
      orm.updateOne(devourState, burgerId, function(res) {
        cb(res);
      });
    },
}

module.exports = burger;