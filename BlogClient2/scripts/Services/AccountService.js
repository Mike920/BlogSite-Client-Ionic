'use strict';

/* Services */

angular
    .module('app')
    .factory('AccountService', AccountService);

AccountService.$inject = ['$resource', 'ApiEndpoint'];

function AccountService($resource, ApiEndpoint) {
    return $resource(ApiEndpoint.url + '/accounts/:id', null,
            {
                'update': { method: 'PUT' }
            });
      };
