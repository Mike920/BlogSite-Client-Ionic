'use strict';

angular
    .module('app')
    .controller('UserCtrl', UserCtrl);

UserCtrl.$inject = ['$scope', 'UserService'];


function UserCtrl($scope, UserService) {
    $scope.user = UserService.user;
}
