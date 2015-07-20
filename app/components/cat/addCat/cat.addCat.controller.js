"use strict";

angular
    .module("cat")
    .controller("addCatController", addCatController);

function addCatController($scope, catService, $location) {

    $scope.cancel = function () {
        $location.url("/cats");
    };

    $scope.submitted = false;

    $scope.save = function (form) {

        $scope.submitted = true;

        if (form.$invalid) {
            return;
        }
        var newCat = {
            'name': form.name.$modelValue,
            'image': form.image.$modelValue
        }
        catService.addCat(newCat);
        $location.url("/cats");
    };




}