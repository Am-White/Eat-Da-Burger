const orm = require('../config/orm')

//Database functions
const burger = {
 
  selectAll: cb => {
    orm.selectAll('burgers', result => {
      cb(result);
    });
  },
  addOneBurger: (column, value, cb) => {
    orm.insertOne('burgers', column, value, function (result) {
      cb(result);
    });
  },
  updateOne: function (value, condition, cb) {
    orm.updateOne("burgers", value, condition, function (res) {
      cb(res);
    });
  },
  deleteOne: function (condition, cb) {
    orm.deleteOne("burgers", condition, function (res) {
      cb(res);
    });
  }

};

//Export the database functions for the controller
module.exports = burger;