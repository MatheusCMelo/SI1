angular.module('Series', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {

	$stateProvider
	.state('series', {
		url: '/series',
		templateUrl: 'partials/series.html',
		controller: 'SeriesController'
	})
	.state('series.search', {
		templateUrl: 'partials/series/search.html'
	})
	.state('series.myseries', {
		templateUrl: 'partials/series/myseries.html'
	})
	.state('series.watchlist', {
		templateUrl: 'partials/series/watchlist.html'
	})
	.state('register', {
		url:'/register',
		templateUrl: 'partials/register.html',
		controller: 'RegisterController'
	})
	.state('login', {
		url:'/',
		templateUrl: 'partials/login.html',
		controller: 'LoginController'
	});
	
	$urlRouterProvider.otherwise('/');
	
	$locationProvider.html5Mode({ enabled: true, requireBase: false });
});
