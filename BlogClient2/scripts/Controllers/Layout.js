'use strict';

angular
    .module('app')
    .controller('LayoutCtrl', LayoutCtrl);

LayoutCtrl.$inject = ['$scope', '$stateParams', 'PostService', 'PostCategoryService'];


function LayoutCtrl($scope, $stateParams, PostService, PostCategoryService) {

    $scope.loading = true;
    $scope.widgets = ['Author', 'Categories', 'RecentPosts'];

}
