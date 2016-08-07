var myApp = angular
    .module("myModule", [])
    .controller("myController", function($scope) {
        // Create a model
        var employees = [
            { name: "Ben", gender: "Male", city: "London" },
            { name: "Sara", gender: "Female", city: "Chennai" },
            { name: "Mark", gender: "Male", city: "London" },
            { name: "Pam", gender: "Female", city: "Chennai" },
            { name: "Todd", gender: "Male", city: "London" }
        ];
        // Attach the model to the scope
        $scope.employees = employees;

    });
