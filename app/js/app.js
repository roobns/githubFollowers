'use strict'

var app = angular.module('followersApp', ['ui.router', 'ui.bootstrap'])

app.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/');
    
    $stateProvider
        
        .state('main', {
            url: '/',
            templateUrl: '../views/main.html',
            controller: 'mainCtrl'
        })
        .state('about', {
            url: '/',
            templateUrl: '../views/about.html',
            controller: 'aboutCtrl'
        })
        
        
});

app.controller('mainCtrl', function($http, $scope) {


    function init(){
        getUsers();
        $scope.showModal = false;
    };
    
    function getUsers(){
        $http({method: 'GET', url: 'https://api.github.com/users'}).
        then(function(response) {
            $scope.users = response.data;
            console.log($scope.users);
        }, function(response) {
            $scope.users = response.data || 'Request failed';
        });
    }

    init();
});

app.component("gitHubFollowers",{
      templateUrl: "../views/gitFollowers.html",
      bindings: { name: '@' },
      controller: 'mainCtrl'
});