'use strict'

var app = angular.module('followersApp', ['ui.router'])

app.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/');
    
    $stateProvider
        
        .state('main', {
            url: '/',
            templateUrl: '../views/main.html',
            controller: 'mainCtrl'
        })
        
        
});

app.controller('mainCtrl', function($scope) {
    
   console.log("aaaa");
    
});