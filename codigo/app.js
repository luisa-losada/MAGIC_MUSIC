angular.module("Reproductor", [])
  .controller("ControladorReproductor", function ($scope, $http) {
    
    $scope.artistas = [];

    //Carga de datos, es solo posible medieante servicios
    $http.get("datos/Musiteca.json")
     .then(function(datos) {
        $scope.artistas=datos.data.Artistas;
     });
  });
