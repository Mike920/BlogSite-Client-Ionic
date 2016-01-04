'use strict';

/* Services */

angular
    .module('app')
    .factory('BlogService', BlogService); 

BlogService.$inject = ['$resource', 'ApiEndpoint'];

function BlogService($resource, ApiEndpoint) {
    return $resource(ApiEndpoint.url + '/blogs/:id', null,
            {
                'update': { method: 'PUT' }
            });
          /*return $resource('api/blogs/:blogId.json', {}, {
              query: { method: 'GET', params: { blogId: 'blogs' }, isArray: true }
          });*/
      };
