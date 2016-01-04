'use strict';

angular
    .module('app')
    .controller('AccountCtrl', AccountCtrl);

AccountCtrl.$inject = ['$scope', '$location', '$stateParams', 'AccountService', 'UserService'];


function AccountCtrl($scope, $location, $stateParams,  AccountService, UserService) {

    $scope.loading = false;
    $scope.model = {};


    $scope.submit = function () {
        if ($('#upload-form').valid()) {
            $scope.loading = true;
            AccountService.save({ id: 'login' }, $scope.model,
                function (success) {
                    UserService.set($scope.model); //.refresh(); //set($scope.model);
                    $location.path("/Dashboard");
                    $scope.loading = false;
                },
                function(error) {
                    if (error.status === 400) { //validation error
                        var ms = error.data.ModelState;
                        // Display validation errors
                        $(Object.keys(ms)).each(function(index, key) {
                            var val = key.split('.').pop();
                            var errorSpan = $("span[data-valmsg-for='" + val + "']");
                            errorSpan.html("<span style='color:#b94a48'>" + ms[key][0] + "</span>");
                            errorSpan.show();
                        });
                    } else {
                        $scope.status = { msg: "Connection error.", clas: "alert-error" };
                    }

                    $scope.loading = false;
                });
            
        }
    };

    $scope.logout = function () {
            $scope.loading = true;
            AccountService.save({ id: 'logout' }, null,
                function (success) {
                    $location.path("/Login");
                    $scope.loading = false;
                },
                function (error) {
                    if (error.status === 400) { //validation error
                        var ms = error.data.ModelState;
                        // Display validation errors
                        $(Object.keys(ms)).each(function (index, key) {
                            var val = key.split('.').pop();
                            var errorSpan = $("span[data-valmsg-for='" + val + "']");
                            errorSpan.html("<span style='color:#b94a48'>" + ms[key][0] + "</span>");
                            errorSpan.show();
                        });
                    } else {
                        $scope.status = { msg: "Connection error.", clas: "alert-error" };
                    }

                    $scope.loading = false;
                });
    };
}
