(function () {
    angular
        .module('savery')
        .config(routeConfig);

    routeConfig.$inject = ['$locationProvider', '$urlRouterProvider', '$stateProvider'];

    function routeConfig ($locationProvider, $urlRouterProvider, $stateProvider) {
        $stateProvider
            .state('overview', {
                url: '/',
                templateUrl: 'js/components/overview/views/overview.html',
                controller: 'overviewCtrl'
            })

            .state('login', {
                url: '/login',
                templateUrl: 'js/components/login/views/login.html'
            })

            .state('register', {
                url: '/register',
                templateUrl: 'js/components/register/views/register.html'
            })

            .state('savings', {
                url: '/savings',
                templateUrl: 'js/components/savings/views/savings.html'
            })

            .state('expenses', {
                url: '/expenses',
                templateUrl: 'js/components/expenses/views/expenses.html',
                controller: 'expensesCtrl'
            })

            .state('profile', {
                url: '/profile',
                templateUrl: 'js/components/profile/views/profile.html'
            })

            .state('friends', {
                url: '/friends',
                templateUrl: 'js/components/friends/views/friends.html'
            })

        $urlRouterProvider.otherwise('/');
        $locationProvider.html5Mode(true);
    }
}());