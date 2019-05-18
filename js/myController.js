angular.module('app', [
	// 'ngRoute'
]);

// angular.config( function ($routeProvider) {
// 	$routeProvider
// 	.when("/", {
// 		template:"<h1>Home Page</h1>"
// 	})
// 	.otherwise({redirectTo: '/'});
// });

angular.module('app').controller('myController', [
	'$scope',
	'$http',
	function($scope, $http){


		// Diretica HTTP para chamar a API e consumi-la

		// $http.get('https://taco-food-api.herokuapp.com/api/v1/food')
		// .then( function(response) {
		// 	console.log(response);
		// });


		//definindo variaveis e lista dos produtos
		$scope.editando = null;
		$scope.index = null; 

		$scope.titulo = "Lista de Compras";
		$scope.aviso = '';
		$scope.lista = [
			{produto: 'Cerveja', quantidade: 12, comprado: false}
		];


		// Função que adiciona e edita o produto da lista
		$scope.addEditItem = function () {

			//Limpa a mensagem de avisos
			$scope.aviso = '';
			if ($scope.editando) {
				$scope.lista[$scope.index] = JSON.parse(JSON.stringify($scope.item));;
				$scope.editando = false;
			} else {
				if ($scope.item.produto != '') {
					if ($scope.lista.indexOf() == -1) {
						$scope.lista.push({produto: $scope.item.produto, quantidade: $scope.item.quantidade, comprado: false});
					} else {
						// Verifica se o produto ja existe e avisa ao usuario
						$scope.aviso = "Produto já adicionado";
					}

				} else {
					// Verifica se os campos estão vazios e informa o usuario para preenche-los
					$scope.aviso = "Os campos de informações sobre o produto precisam estar preenchidos";
				}
			}	

			// Limpando os campos de produto e quantidade após serem inseridos na lista
			$scope.item.produto = '';
			$scope.item.quantidade = '';		
		}

		// Função que remove o produto da lista
		$scope.removeItem = function (x) {
			$scope.aviso = '';
			$scope.lista.splice(x, 1);
		}


		//Função que edita o produto
		$scope.editar = function (index) {
			$scope.editando = true;
			$scope.item = JSON.parse(JSON.stringify($scope.lista[index]));
			$scope.index = index;
		}
	}
]);