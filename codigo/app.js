angular
  .module("Reproductor", [])
  .controller("ControladorReproductor", function ($scope, $http) {
    $scope.artistas = [];
    $scope.canciones = [];

    //Carga de datos, es solo posible medieante servicios
    $http.get("datos/Musiteca.json").then(function (datos) {
      $scope.artistas = datos.data.Artistas;
      console.log($scope.artistas)
    });
    $scope.SeleccionarArtista = function (artista) {
      window.alert(artista.Nombre)
    }
    $scope.SelecionarCancion = function(cancion) {
      window.alert(cancion)
    }
  });
