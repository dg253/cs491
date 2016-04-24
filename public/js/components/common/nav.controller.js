(function () {
    angular
        .module('savery')
        .controller('navCtrl', navCtrl);

    navCtrl.$inject = ['$scope', '$rootScope', '$location'];

    function navCtrl ($scope, $rootScope, $location) {
        $rootScope.loggedIn = localStorage.getItem('loggedIn');
        console.log($rootScope.loggedIn);

        $scope.activityFeed; // list to be displayed; changes on calander selection

        // TODO get recent activities from BE
        $scope.recentActivities = [
          {
            date: "Apr 23rd",              // date activity took place
            actionType: "Created Budget",   // saveryActions: created budget, added to wishlist, accountLevelActions: expense, credit
            category: "Groceries",          // savery category, api category (plaid)
            description: "",               // if available from api (plaid), or saverly "moved 29$ into wishlist: xbox"
            actionAmt: "",               // debit amt, credit amt, amt moved to savingsGoals/wishlist
            txCode: "new"              // pos: +$29 into checking, neg: -$29 from checking, new: create, mv: $29 into wishlist (for styling)
          },
          {
            date: "Apr 17nd",
            actionType: "Added to Wishlist",
            category: "Xbox",
            description: "Added $29 to wishlist: Xbox",
            actionAmt: "$29",
            txCode: "mv"
          },
          {
            date: "Apr 9th",
            actionType: "Account Expense",
            category: "Restaurants",
            description: "Mc Donalds",
            actionAmt: "$13",
            txCode: "neg"
          },
          {
            date: "Mar 30th",
            actionType: "Account Expense",
            category: "Bar",
            description: "Gyps Tevern",
            actionAmt: "$53",
            txCode: "neg"
          },
          {
            date: "Mar 29th",
            actionType: "Account Credit",
            category: "Deposit",
            description: "",
            actionAmt: "$459.97",
            txCode: "pos"
          },
          {
            date: "Mar 12th",
            actionType: "Account Expense",
            category: "Shops",
            description: "Chindo",
            actionAmt: "$43.24",
            txCode: "neg"
          }
        ];

        $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams, options) {
            if (!$rootScope.loggedIn) {
                if (!(toState.name === 'login' || toState.name === 'register')) {
                    $location.path('/login');
                }
            } else {
                if (toState.name === 'login' || toState.name === 'register') {
                    $location.path('/');
                }
            }
        });

        $scope.displayNewFeed = function(newFeed){
          if(newFeed.length <= 0){
            $scope.activityFeed = $scope.recentActivities;
          }else{
            $scope.activityFeed = newFeed;
          }
        }

        $scope.displayNewFeed($scope.recentActivities)
    }
}());
