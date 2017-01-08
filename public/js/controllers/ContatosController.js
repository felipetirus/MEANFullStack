angular.module('contatooh').controller('ContatosController', function($scope, $resource) {

  $scope.contatos = [];
  $scope.total =0;
  $scope.filtro = '';

  $scope.incrementa = function() {
    $scope.total++;
  };

  var Contato = $resource('/contatos/:id');

  function buscaContatos() {
    Contato.query(
      function(contatos){
        $scope.contatos = contatos;
      },
      function(erro){
        console.log('Não foi possível obter a lista de contatos');
        console.log(erro);
      }
    );
  }

  buscaContatos();

  $scope.remove = function(contato){
    var promise = Contato.delete({id : contato._id},
      buscaContatos,
      function(erro){
        console.log('Não foi possível remover o contato');
        console.log(erro);
      }
    );
  };
});
