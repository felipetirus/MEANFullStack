var passport = require('passport');
var GitHubStrategy = require('passport-github').Strategy;
var mongoose = require('mongoose');

module.exports = function() {

  var Usuario = mongoose.model('Usuario');

  passport.use(new GitHubStrategy({
    clientID: '1e08d9ae6f474a82df62',
    clientSecret: 'b1f92c830aaf160d11208c56f670000c86b62c57',
    callbackURL: 'http://localhost:3000/auth/github/callback'
  }, function(accessToken, refreshToken, profile, done) {
      Usuario.findOrCreate(
        {"login": profile.username},
        {"nome": profile.username},
        function(erro, usuario) {
          if (erro) {
            console.log(erro);
            return done(erro);
          }
          return done(null, usuario);
        }
      );
  }));

  passport.serializeUser(function (usuario, done){
    done(null, usuario._id);
  })

  passport.deserializeUser(function(id, done) {
    Usuario.findById(id).exec()
    then(function(usuario) {
      done(null, usuario);
    });
  });
};
