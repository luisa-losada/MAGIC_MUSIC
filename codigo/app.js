angular
  .module("Reproductor", [])
  .controller("ControladorReproductor", function ($scope, $http) {
    $scope.artistas = [];
    $scope.canciones = [];
    $scope.artistasSeleccionado = "";
    $scope.cancionSeleccionada = "";
    $scope.rutaCancion = "";
    $scope.reproductor = new Audio();
    //Carga de datos, es solo posible medieante servicios
    $http.get("datos/Musiteca.json").then(function (datos) {
      $scope.artistas = datos.data.Artistas;
    });
    $scope.SeleccionarArtista = function (artista) {
      $scope.canciones = artista.Canciones;
      $scope.artistasSeleccionado = artista.Nombre;
    };
    $scope.SeleccionarCancion = function (cancion) {
      $scope.cancionSeleccionada =
        cancion.Titulo + " - " + $scope.artistasSeleccionado;
      $scope.rutaCancion =
        "canciones/" +
        $scope.artistasSeleccionado +
        " - " +
        cancion.Titulo +
        ".mp3";
    };
    $scope.reproducir = function () {
      $scope.reproductor.src = $scope.rutaCancion;
      $scope.reproductor.play();
    }
  });
