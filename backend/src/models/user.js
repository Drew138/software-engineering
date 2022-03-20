<<<<<<< HEAD
const Sequelize = require("sequelize");
const db = require("../config/database");
const Clase = require("./clase")
const Anuncio = require("./anuncio")
const Pregunta = require("./pregunta")
const Entrega = require("./entrega")

const User = db.define("user", {
        google_id: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        rol: {
            type: Sequelize.ENUM("Estudiante", "Profesor"),
            allowNull: false,
        }
    },  
    {
    timestamps: false
    }
);

User.belongsToMany(Clase, {through: "registro",});
User.belongTo(Anuncio);
User.belongTo(Pregunta);
User.belongTo(Entrega);

module.exports = User;
=======
const Sequelize = require("sequelize");
const db = require("../config/database");
const Clase = require("./clase")
const Anuncio = require("./anuncio")
const Pregunta = require("./pregunta")
const Entrega = require("./entrega")

const User = db.define("user", {
        google_id: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        rol: {
            type: Sequelize.ENUM("Estudiante", "Profesor"),
            allowNull: false,
        }
    },  
    {
    timestamps: false
    }
);

User.belongsToMany(Clase, {through: "registro",});
User.belongTo(Anuncio);
User.belongTo(Pregunta);
User.belongTo(Entrega);

module.exports = User;
>>>>>>> bc89ade88faa1ceffb04f4da20496f838b4950f9
