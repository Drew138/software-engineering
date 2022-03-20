<<<<<<< HEAD
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
=======
const Sequelize = require("sequelize");
const db = require("../config/database");
const User = require("./user")
const Anuncio = require("./anuncio")
const Pregunta = require("./pregunta")

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
>>>>>>> bc89ade88faa1ceffb04f4da20496f838b4950f9
