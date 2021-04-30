var mongoose = require("mongoose");

Schema = mongoose.Schema;
mongoose.connect("mongodb://localhost:27017/users");

var PostSchema = new Schema({
    titulo: {type: String, required: true},
    descripcion: {type: String, required: true},
    categoria: {type: String, required: true},
    fecha: {type: Date},
    comentarios: [{
        autor: String,
        mensaje: String,
        fecha: Date
    }]
});

model = mongoose.model('contacts', PostSchema, 'contacts');
module.exports = model;
