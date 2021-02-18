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
  delete: function (condition, cb) {
    orm.delete("burgers", condition, function (res) {
      cb(res);
    });
  }

};

//Export the database functions for the controller
module.exports = burger;