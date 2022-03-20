<<<<<<< HEAD
const Sequelize = require("sequelize");
const db = require("../config/database");
const Clase = require("./clase")
const User = require("./user")

const Entrega = db.define("entrega", {
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
        },
        fecha_entrega: {
            type: Sequelize.STRING
        },
        procentaje: {
            type: Sequelize.INTEGER,
            allowNull: false,
            defaultValue: 0,
            validate: {
                min: 0,
                max: 100
            }
        }
    },  
    {
    timestamps: false
    }
);

Entrega.belongsTo(Clase)
Entrega.hasOne(User, {as: "profesor"})

module.exports = Entrega;
=======
const Sequelize = require("sequelize");
const db = require("../config/database");
const Clase = require("./clase")
const User = require("./user")

const Entrega = db.define("entrega", {
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
        },
        fecha_entrega: {
            type: Sequelize.STRING
        },
        procentaje: {
            type: Sequelize.INTEGER,
            allowNull: false,
            defaultValue: 0,
            validate: {
                min: 0,
                max: 100
            }
        }
    },  
    {
    timestamps: false
    }
);

Entrega.belongsTo(Clase)
Entrega.hasOne(User, {as: "profesor"})

module.exports = Entrega;
>>>>>>> bc89ade88faa1ceffb04f4da20496f838b4950f9
