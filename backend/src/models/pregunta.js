const Sequelize = require("sequelize");
const db = require("../config/database");
const Clase = require("./clase");
const User = require("./user");
const Respuesta = require("./respuesta");

const Pregunta = db.define("pregunta", {
        titulo: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        cuerpo: {
            type: Sequelize.TEXT
        },
        fecha_creacion: {
            type: Sequelize.DATEONLY,
            allowNull: false,
            defaultValue: Sequelize.NOW
        }
    },  
    {
    timestamps: false
    }
);

Pregunta.belongsTo(Clase)
Pregunta.hasOne(User, {as: "profesor"}) //default foreign key: userId
Pregunta.hasOne(Respuesta, {as: "respuesta"}) //default foreign key: userId

module.exports = Pregunta;