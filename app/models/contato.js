var mongoose = require('mongoose');
var findOrCreate = require('mongoose-findorcreate');

module.exports = function () {
  var schema = mongoose.Schema({
    nome: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
      index: {
        unique: true
      }
    },
    emergencia: {
      type: mongoose.Schema.ObjectId,
      ref: 'Contato'
    }
  });
  schema.plugin(findOrCreate);
  return mongoose.model('Contato', schema);
};
