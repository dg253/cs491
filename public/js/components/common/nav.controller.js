(function () {
    angular
        .module('savery')
        .controller('navCtrl', navCtrl)
        .controller('walletController', walletController)
        .controller('addCardController', addCardController);

    navCtrl.$inject = ['$scope', '$rootScope', '$location', '$state'];
    walletController.$inject = ['$scope', '$rootScope', '$timeout'];
    addCardController.$inject = ['$scope', '$rootScope', '$timeout'];

    function navCtrl ($scope, $rootScope, $location, $state) {
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
                if (!(toState.name === 'login' || toState.name === 'register' || toState.name === 'forgotPw')) {
                    $location.path('/login');
                }
            } else {
                if (toState.name === 'login' || toState.name === 'register' || toState.name === 'forgotPw') {
                    $location.path('/');
                }
            }

            if (toState.name === 'register' && fromState.name === 'login') {
                localStorage.removeItem('reloaded');
            }
        });

        $scope.logout = function () {
            localStorage.removeItem('loggedIn');
            location.reload();
        }

        $scope.displayNewFeed = function(newFeed){
          if(newFeed.length <= 1){
            $scope.activityFeed = $scope.recentActivities;
          }else{
            $scope.activityFeed = newFeed;
          }
        }

        $scope.displayNewFeed($scope.recentActivities)

        $scope.isFilteredActivities = function(){
          var feed = $scope.activityFeed;
          if(feed[feed.length - 1] == "filter"){
            return true;
          }else{
            return false;
          }
        }
    }

    function walletController ($scope, $rootScope, $timeout) {
      $rootScope.cardIndex = 0;

      $scope.index = function(id) {
        $timeout(function() {
          $rootScope.cardIndex = id;
        }, 1000);
        console.log(id);
      }

      $rootScope.cards = [{
        id: 0,
        cardNumber: '1234 5678 9876 5432',
        expiryDate: '07/19',
        cardHolder: 'J Thomson',
        type: 'visa-curved-64px',
        transactions: [{
          date: '01/02/2016',
          merchant: 'Apple',
          price: '205.25'
        }, {
          date: '05/02/2016',
          merchant: 'Jack & Jones',
          price: '32.95'
        }, {
          date: '12/02/2016',
          merchant: 'F&B',
          price: '47.22'
        }, {
          date: '14/02/2016',
          merchant: 'Swarovski',
          price: '325'
        }]
      }, {
        id: 1,
        cardNumber: '5432 9876 5678 1234',
        expiryDate: '01/22',
        cardHolder: 'T Konten',
        type: 'mastercard-curved-64px',
        transactions: [{
          date: '01/02/2016',
          merchant: 'Hugo Boss',
          price: '19.99'
        }, {
          date: '05/02/2016',
          merchant: 'Amazon UK',
          price: '59.95'
        }]
      }, {
        id: 2,
        cardNumber: '5678 5433 2254 3476',
        expiryDate: '01/22',
        cardHolder: 'C David',
        type: 'discover-curved-64px',
        transactions: [{
          date: '01/02/2016',
          merchant: 'Steam',
          price: '19.99'
        }, {
          date: '05/02/2016',
          merchant: 'Tesco',
          price: '10'
        }, {
          date: '05/02/2016',
          merchant: 'Tesco',
          price: '122.50'
        }, {
          date: '05/02/2016',
          merchant: 'Game',
          price: '22.50'
        }, {
          date: '05/02/2016',
          merchant: 'Steam',
          price: '9'
        }, {
          date: '05/02/2016',
          merchant: 'IKEA',
          price: '12.17'
        }, {
          date: '05/02/2016',
          merchant: 'Apple',
          price: '1.50'
        }, {
          date: '05/02/2016',
          merchant: 'Tesco',
          price: '7.95'
        }]
      }]
    }

    function addCardController ($scope, $rootScope, $timeout) {
      $scope.choice = "visa-curved-64px";
      $scope.choose = function(card) {
        $scope.choice = card;
      }
      $scope.number;
      $rootScope.name;
      $scope.expiry;

      $scope.addCard = function(number, name, expiry) {
        $timeout(function() {
          $rootScope.cards.push({
            id: $rootScope.cards.length + 1,
            cardNumber: number,
            cardHolder: name,
            expiryDate: expiry,
            type: $scope.choice,
            transactions: [{
              date: '10/02/2016',
              merchant: 'Jack & Jones',
              price: '79.87'
            }, {
              date: '12/02/2016',
              merchant: 'Cadwalders',
              price: '7.25'
            }, {
              date: '15/02/2016',
              merchant: 'Bella Italia',
              price: '62.70'
            }, {
              date: '15/02/2016',
              merchant: 'Odeon',
              price: '24.99'
            }]
          });
          }, 700);
      console.log($rootScope.cards);
    }
}
}());

/* functions for accounts modal*/
function changeCard() {
  setTimeout(function() {
    $("main").find(".list").css({
      'transform': 'scale(0.95)',
      'transition': 'all ease-in-out .25s',
      'opacity': '0',
      '-webkit-filter': 'blur(10px)'
    });
  });
  setTimeout(function() {
    $("main").find(".list").css({
      'transform': 'scale(1)',
      'transition': 'all ease-in-out .25s',
      'opacity': '1',
      '-webkit-filter': 'blur(0)'
    });
  }, 1000);
}

function close() {
  $(".create").css({
    'opacity': '0',
    'pointer-events': 'none'
  });
}

function addCard() {
  $(".create").css({
    'opacity': '1',
    'pointer-events': 'auto'
  })
}

$(".choose_a_card").on("click", "img", function() {
  $(this).addClass("selected").siblings().removeClass("selected");
});

$(".wallet").on("click", ".card", function() {
  changeCard();
  setTimeout(function() {
    close();
  }, 300);
  $(this).css({
    'background': '#2ECC71',
    'transition': 'all ease .25s'
  }).siblings().css({
    'background': 'rgba(0, 0, 0, 0.2)',
    'transition': 'all ease .25s'
  })
});

$(".add_a_card").click(function() {
  addCard();
});

$("form").find("i").click(function() {
  close();
});

$("input.number").keydown(function(e) {
  if (e.keyCode === 8) {
    $(this).val().length + 100;
  } else if ($(this).val().length === 19) {
    e.preventDefault();
  } else {
    var $this = $(this);
    if ((($this.val().length + 1) % 5) === 0) {
      $this.val($this.val() + " ");
    }
  }
});

$("input.expiry").keydown(function(e) {
  if (e.keyCode === 8) {
    $(this).val().length + 100;
  } else if (e.keyCode === 32) {
    return false;
  } else if (e.keyCode === 191) {
    return false
  } else if (e.keyCode === 189) {
    return false
  } else if ($(this).val().length > 6) {
    e.preventDefault();
  } else {
    var $this = $(this);
    if ((($this.val().length + 1) % 3) === 0) {
      $this.val($this.val() + " / ");
    }
  }
});

$("input[type='submit']").click(function() {
  setTimeout(function() {
    $(".wallet").find(".holder").css({
      'opacity': '0',
      'padding-top': '100px',
      'transition': 'all ease .25s',
    });
  }, 0);
  setTimeout(function() {
    $(".wallet").find(".card").css({
      'transform': 'scale(0)'
    });
  }, 700);
  setTimeout(function() {
    $(".wallet").find(".holder").css({
      'opacity': '1',
      'padding-top': '0',
      'transition': 'all ease .25s',
    });
  }, 1000);
  setTimeout(function() {
    $(".wallet").find(".card").css({
      'transform': 'scale(1)'
    });
  }, 1450);
});
