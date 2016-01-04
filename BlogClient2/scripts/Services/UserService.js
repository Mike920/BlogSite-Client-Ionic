'use strict';

/* Services */

angular
    .module('app')
    .factory('UserService', UserService);

UserService.$inject = ['$resource', '$location', 'ApiEndpoint'];

function UserService($resource, $location, ApiEndpoint) {
    var resource = $resource(ApiEndpoint.url + '/CurrentUser', null,
      {
          'update': { method: 'PUT' }
      });

    var user = null;

    var get = function() {
        return resource.get(null,
            function(success) {
            },
            function (error) {
                $location.path("/Login");
/*                $('#errorModal').modal({
                    backdrop: 'static',
                    keyboard: false
                });*/
            });
    };

    var getCurrentUser = function() {
        if (user === null) {
            user = get();
        }
        return user;
    }

    return {
        user: getCurrentUser(),
        resource: resource,
        refresh: function() {
            user = get();
        },
        set: function(u) {
            user = u;
        }
    };
};
