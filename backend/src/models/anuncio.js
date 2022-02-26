const Sequelize = require("sequelize");
const db = require("../config/database");
const Clase = require("./clase");
const User = require("./user");

const Anuncio = db.define("anuncio", {
        titulo: {
            type: Sequelize.STRING
        },
        cuerpo: {
            type: Sequelize.TEXT
        }
    },  
    {
    timestamps: false
    }
);

Anuncio.belongsTo(Clase)
Anuncio.hasOne(User) //default foreign key: userId

module.exports = Anuncio;