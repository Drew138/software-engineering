const Sequelize = require("sequelize");
const db = require("../config/database");
const User = require("./user")
const Anuncio = require("./anuncio")
const Pregunta = require("./anuncio")

const Clase = db.define("clase", {
        nombre: {
            type: Sequelize.STRING
        },
    },  
    {
    timestamps: false
    }
);

Clase.belongsToMany(User, {
    through: "registro",
});

Clase.hasMany(Anuncio, {as: "anuncios"});
Clase.hasMany(Entrega, {as: "entregas"});
Clase.hasMany(Pregunta, {as: "preguntas"});

module.exports = Clase;
