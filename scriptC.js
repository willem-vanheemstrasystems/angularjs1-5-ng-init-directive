var myApp = angular
    .module("myModule", [])
    .controller("myController", function($scope) {
        // Create a model
        var countries = [
            { name: "India", cities: [
                { name: "Hyderabad" },
                { name: "Chennai" }
            ] },
            { name: "USA", cities: [
                { name: "Los Angeles" },
                { name: "Chicago" }
            ] }
        ];
        // Attach the model to the scope
        $scope.countries = countries;

    });
