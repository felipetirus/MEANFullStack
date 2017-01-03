var controller = require('../controllers/home')();
module.exports = function(app) {
  console.log('Controller do capeta');
  console.log(controller);
  console.log(controller.toString());
   app.get('/index', controller.index);
   app.get('/', controller.index);
}
