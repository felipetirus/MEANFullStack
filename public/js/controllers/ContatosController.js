angular.module('contatooh').controller('ContatosController', function(Contato, $scope) {

  $scope.contatos = [];
  $scope.total =0;
  $scope.filtro = '';
  $scope.mensagem = {texto: ''};

  function buscaContatos() {
    Contato.query(
      function(contatos){
        $scope.contatos = contatos;
      },
      function(erro){
        console.log(erro);
        $scope.mensagem= {
          texto: 'Não foi possível obter a lista de contatos'
        };
      }
    );
  }

  buscaContatos();

  $scope.remove = function(contato){
    var promise = Contato.delete({id : contato._id},
      buscaContatos,
      function(erro){
        console.log(erro);
        $scope.mensagem= {
          texto: 'Não foi possível remover o contato'
        };
      }
    );
  };
});
