const Sequelize = require("sequelize");
const db = require("../config/database");
const Clase = require("./clase")
const Anuncio = require("./anuncio")

const User = db.define("user", {
        name: {
            type: Sequelize.STRING
        },
        age: {
            type: Sequelize.INTEGER
        }
    },  
    {
    timestamps: false
    }
);

User.belongsToMany(Clase, {through: "registro",});
User.belongTo(Anuncio);

module.exports = User;
