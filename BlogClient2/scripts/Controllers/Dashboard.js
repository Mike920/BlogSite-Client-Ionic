'use strict';

angular
    .module('app')
    .controller('DashboardCtrl', DashboardCtrl);

DashboardCtrl.$inject = ['$scope', '$stateParams', 'BlogService'];


function DashboardCtrl($scope, $stateParams, BlogService) {
        BlogService.query({ forCurrentUser: true }, function (blogList) {
            $scope.blogs = blogList;
        });

 /*       $scope.submit = function ($event) {
            if($($event.currentTarget).valid())
                BlogService.update({ id: $scope.model.Id }, $scope.model);
    };*/
}
