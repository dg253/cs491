var app = angular.module("calendar", []);

app.directive("calendar", function() {
    return {
        restrict: "E",
        templateUrl: "js/components/calendar/calendar.html",
        scope: {
            selected: "=",
            callback: "="
        },
        link: function(scope) {
            scope.selected = _removeTime(scope.selected || moment());
            scope.month = scope.selected.clone();

            var start = scope.selected.clone();
            start.date(1);
            _removeTime(start.day(0));

            _buildMonth(scope, start, scope.month);

            scope.select = function(day) {
                scope.selected = day.date;
                console.log(scope.selected.format('MMM Do'))
                var activities = scope.activityInDay(day);
                // if(activities.length > 0 ){
                //   scope.callback(activities);
                // }
                scope.callback(activities);
            };

            scope.next = function() {
                var next = scope.month.clone();
                _removeTime(next.month(next.month()+1)).date(1);
                scope.month.month(scope.month.month()+1);
                _buildMonth(scope, next, scope.month);
            };

            scope.previous = function() {
                var previous = scope.month.clone();
                _removeTime(previous.month(previous.month()-1).date(1));
                scope.month.month(scope.month.month()-1);
                _buildMonth(scope, previous, scope.month);
            };

            scope.activities = [
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

            scope.activityInDay = function(day){
              var activities = [];
              for (act in scope.activities){
                var dave = scope.activities[act].date;
                if(day.date.format('MMM Do') == scope.activities[act].date){
                  var obj = angular.copy(scope.activities[act]);
                  activities.push(obj);
                }
              }
              return activities;
            }
        }
    };

    function _removeTime(date) {
        return date.day(0).hour(0).minute(0).second(0).millisecond(0);
    }

    function _buildMonth(scope, start, month) {
        scope.weeks = [];
        var done = false, date = start.clone(), monthIndex = date.month(), count = 0;
        while (!done) {
            scope.weeks.push({ days: _buildWeek(date.clone(), month) });
            date.add(1, "w");
            done = count++ > 2 && monthIndex !== date.month();
            monthIndex = date.month();
        }
    }

    function _buildWeek(date, month) {
        var days = [];
        for (var i = 0; i < 7; i++) {
            days.push({
                name: date.format("dd").substring(0, 1),
                number: date.date(),
                isCurrentMonth: date.month() === month.month(),
                isToday: date.isSame(new Date(), "day"),
                date: date
            });
            date = date.clone();
            date.add(1, "d");
        }
        return days;
    }

});
