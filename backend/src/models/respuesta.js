<<<<<<< HEAD
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

=======
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

>>>>>>> bc89ade88faa1ceffb04f4da20496f838b4950f9
module.exports = Respuesta;