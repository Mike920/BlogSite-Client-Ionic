// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('app', ['ionic', 'ngResource', 'ui.sortable', 'ngLoadScript'])
    .constant('ApiEndpoint', {
        url: 'http://blogsite2.somee.com/api' /*'http://localhost:55941/api' *//*'http://blogsite2.somee.com/api'*/
    })
    .run(function($ionicPlatform) {
        $ionicPlatform.ready(function() {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            }
            if (window.StatusBar) {
                // org.apache.cordova.statusbar required
                StatusBar.styleHex('#BC5600');
            }
        });
    })

    .config(function ($stateProvider, $urlRouterProvider, $httpProvider) {
        $httpProvider.defaults.withCredentials = true;
        $urlRouterProvider.otherwise('/Dashboard');

    /*$stateProvider.state('Dashboard', {
        url: "/Dashboard",
        template: "<h1>sdfsdfdsfsdf</h1>"
    });
    $stateProvider.state('dupa', {
        url: "/dupa",
        template: "h1>dupa</h1>"
    });*/

        $stateProvider
            .state('Dashboard', {
            url: "/Dashboard",
            templateUrl: "templates/dashboard.html",
            controller: 'DashboardCtrl'
            })
        .state('BlogSettings', {
            url: "/BlogSettings/:id",
            templateUrl: "templates/editBlog.html",
            controller: 'BlogSettingsCtrl'
        })
        .state('Login', {
            url: "/Login",
            templateUrl: "templates/login.html",
            controller: 'AccountCtrl'
        })
        ;


    })
