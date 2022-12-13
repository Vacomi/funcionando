let app = angular.module('myApp', []);

app.controller('controlador', function($scope){
    $scope.tarifa = 10;
    $scope.horas = 0;
    $scope.descuento = 0;
    $scope.neto = 0;

    $scope.basico = function() {
        let bruto = $scope.tarifa * $scope.horas;
        if($scope.horas * $scope.tarifa < 500){
            $scope.descuento = 0;
            $scope.neto = bruto;
            return $scope.horas * $scope.tarifa;

        }else if(bruto <= 1000) {
            $scope.descuento = bruto * 0.02;
            $scope.neto = bruto * 0.98;
            return bruto;
        }else if(bruto <= 4000) {
            $scope.descuento = bruto * 0.08;
            $scope.neto =bruto * 0.92;
            return bruto;
        }else if(bruto <= 8000) {
            $scope.descuento = bruto * 0.15;
            
            $scope.neto=  bruto * 0.85;
            return bruto;
        }else if(bruto <= 10000) {
            $scope.descuento = bruto * 0.21;
            $scope.neto = bruto * 0.79 
            return bruto;
        } else {
            $scope.descuento = bruto * 0.3;
            $scope.neto = bruto * 0.7;
            return bruto;
        }
    }

})