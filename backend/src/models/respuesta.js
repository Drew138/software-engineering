const Sequelize = require("sequelize");
const db = require("../config/database");
const Pregunta = require("./pregunta");
const User = require("./user");

const Respuesta = db.define("respuesta", {
        cuerpo: {
            type: Sequelize.TEXT,
            allowNull: false,
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

Respuesta.belongsTo(Pregunta)
Respuesta.hasOne(User, {as: "profesor"}) //default foreign key: userId

module.exports = Respuesta;