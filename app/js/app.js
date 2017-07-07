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
        $scope.showUserDetails = false;
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

    $scope.selectUser = function(user){
        console.log(user);
        $http({method: 'GET', url: 'https://api.github.com/users/'+ user}).
        then(function(response) {
            $scope.showDetails = true;
            $scope.userSelected = response.data;
            console.log($scope.userSelected);
        }, function(response) {
            $scope.userSelected = response.data || 'Request failed';
        });
    }

    $scope.hideDetails = function(){
        $scope.userSelected = {};
        $scope.showDetails = false;
    }

    init();
});

app.component("gitHubFollowers",{
      templateUrl: "../views/gitFollowers.html",
      bindings: { name: '@' },
      controller: 'mainCtrl'
});