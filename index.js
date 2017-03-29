var chaiApp = angular.module("chaiApp", ['ui.router']);
chaiApp.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/Home");

    $stateProvider
    .state('Home', {
        url: '/Home',
        templateUrl: 'Application/Chai/chai.html'
    })
    .state('Chai', {
        url: '/Chai',
        templateUrl: 'Application/Chai/chai.html'
    })
    .state('Mocha', {
        url: '/Mocha',
        templateUrl: 'Application/Mocha/Mocha.html'
    })
    .state('App', {
        url: '/App',
        templateUrl: 'Application/App/App.html'
    })
});