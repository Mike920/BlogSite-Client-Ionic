'use strict';

/* Services */

angular
    .module('app')
    .factory('PostCategoryService', PostCategoryService);

PostCategoryService.$inject = ['$resource', 'ApiEndpoint'];

function PostCategoryService($resource, ApiEndpoint) {
    return $resource(ApiEndpoint.url + '/postcategories/', null,
            {
                'update': { method: 'PUT' }
            });
      };
