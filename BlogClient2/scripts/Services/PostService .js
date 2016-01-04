'use strict';

/* Services */

angular
    .module('app')
    .factory('PostService', PostService);

PostService.$inject = ['$resource', 'ApiEndpoint'];

function PostService($resource, ApiEndpoint) {
    return $resource(ApiEndpoint.url + '/posts/:id', null,
            {
                'update': { method: 'PUT' }
            });
      };
