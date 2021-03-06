(function () {
    angular
        .module('savery')
        .config(routeConfig);

    routeConfig.$inject = ['$locationProvider', '$urlRouterProvider', '$stateProvider'];

    function routeConfig ($locationProvider, $urlRouterProvider, $stateProvider) {
        $stateProvider
            .state('overview', {
                url: '/',
                templateUrl: 'js/components/overview/overview.html',
                controller: 'overviewCtrl'
            })

            .state('expenses', {
                url: '/expenses',
                templateUrl: 'js/components/expenses/expenses.html',
                controller: 'expensesCtrl'
            })

            .state('savings', {
                url: '/savings',
                templateUrl: 'js/components/savings/savings.html',
                controller: 'savingsCtrl'

            })

            .state('transactions', {
                url: '/transactions',
                templateUrl: 'js/components/transactions/transactions.html',
                controller: 'transactionsCtrl'
            })

            .state('wishlist', {
                url: '/wishlist',
                templateUrl: 'js/components/wishlist/wishlist.html',
                controller: 'wishlistCtrl'
            })

            .state('login', {
                url: '/login',
                templateUrl: 'js/components/login/login.html',
                controller: 'loginCtrl'
            })

            .state('register', {
                url: '/register',
                templateUrl: 'js/components/register/register.html',
                controller: 'registerCtrl'
            })

            .state('forgotPw', {
                url: '/forgot',
                templateUrl: 'js/components/forgotPw/forgotPw.html',
                controller: 'forgotCtrl'
            })

            .state('test', {
                url: '/test',
                templateUrl: 'js/components/test/test.html'
            })

        $urlRouterProvider.otherwise('/login');
        $locationProvider.html5Mode(true);
    }
}());