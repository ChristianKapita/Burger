// Dependencies
const orm = require("../config/orm.js");

// Burger Model
const burgers = {

    // SelectAll method to call orm.selectAll
    selectAll: (callback) => {

        orm.selectAll("burgers", (res) => {
            callback(res);
        });
    },

    // Insert method to call orm.insert
    insert: (burgerNAme, devoured, callback) => {

        orm.insertOne("burgers", "burger_name", "devoured", burgerNAme, devoured, (res) => {
            callback(res);
        });
    },

    // Update method to call orm.updateOne
    update: (id, devoured, callback) => {
        orm.updateOne("burgers", "devoured", devoured, "id", id, (res) => {
            callback(res);
        });
    },

    // Delete method to call orm.delete
    delete: (id, callback) => {
        orm.delete("burgers", "id", id, (res) => {
            callback(res);
        });
    }
};

// Export model for burgers_controller.js to use.
module.exports = burgers;