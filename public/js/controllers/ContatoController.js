angular.module('contatooh').controller('ContatoController', function($scope, $routeParams, $resource) {
  var Contato = $resource('/contatos/:id');

  function buscaContato() {
    Contato.get({id: $routeParams.contatoId},
      function(contato){
        $scope.contato = contato;
      },
      function(erro){
        console.log(erro);
        $scope.mensagem= {
          texto: 'Não foi possível obter o contato'
        };
      }
    );
  }

  buscaContato();
});
