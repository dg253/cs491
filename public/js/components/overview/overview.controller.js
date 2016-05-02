(function () {
    angular
        .module('savery')
        .controller('overviewCtrl', overview);

    overview.$inject = ['$scope'];

    function overview ($scope) {

      $scope.budgetDropText = "Past 6 Months";
      $scope.networthDropText = "Past 6 Months";


      $scope.labels = ["January", "February", "March", "April", "May", "June", "July"];
      $scope.series = ['Series A', 'Series B'];
      $scope.data = [
        [65, 59, 80, 81, 56, 55, 40],
        [28, 48, 40, 42, 86, 27, 90],
        [10, 0, 9, 19, 11, 74, 60]
      ];

      $scope.networthLabels = ["January", "February", "March", "April", "May", "June", "July"];
      $scope.series = ['Series A', 'Series B'];
      $scope.networthData = [
        [90, 75, 80, 81, 74, 69, 67],
        [55, 60, 65, 59, 80, 81, 56],
        [10, 0, 35, 19, 11, 74, 60]
      ];

      $scope.balanceTimeline = function(timeframe){
        if(timeframe == 3){
          $scope.budgetDropText = "Past 3 Months";
          $scope.labels = ["May", "June", "July"];
          $scope.series = ['Series A', 'Series B'];
          $scope.data = [
            [ 56, 55, 40],
            [86, 27, 90],
            [11, 74, 60]
          ];
        }
        else if (timeframe == 6){
          $scope.budgetDropText = "Past 6 Months";
          $scope.labels = ["January", "February", "March", "April", "May", "June", "July"];
          $scope.series = ['Series A', 'Series B'];
          $scope.data = [
            [65, 59, 80, 81, 56, 55, 40],
            [28, 48, 40, 42, 86, 27, 90],
            [10, 0, 9, 19, 11, 74, 60]
          ];
        }
        else if (timeframe == 12){
          $scope.budgetDropText = "Past Year";
          $scope.labels = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
          $scope.series = ['Series A', 'Series B'];
          $scope.data = [
            [65, 59, 80, 81, 56, 55, 40, 28, 48, 40, 42, 86, 27, 90],
            [28, 48, 40, 42, 86, 27, 90, 10, 0, 9, 19, 11, 74, 60],
            [10, 0, 9, 19, 11, 74, 60, 65, 59, 80, 81, 56, 55, 40]
          ];
        }
        else if (timeframe == 24){
          $scope.budgetDropText = "Past 2 Years";
          $scope.labels = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
          $scope.series = ['Series A', 'Series B'];
          $scope.data = [
            [65, 59, 80, 81, 80, 70, 80, 65, 59, 80, 81, 70, 60, 40, 50, 59, 80, 81, 56, 55, 60, 65, 59, 80, 81, 56, 55, 40],
            [28, 48, 40, 42, 30, 27, 30, 28, 48, 40, 42, 86, 60, 90, 28, 48, 40, 42, 0, 27, 60, 28, 48, 40, 42, 20, 27, 90],
            [10, 0, 9, 19, 11, 20, 20, 10, 0, 9, 19, 11, 39, 60, 10, 0, 9, 19, 11, 0, 60, 10, 0, 9, 19, 11, 0, 60]
          ];
        }
        else{

        }
      }

      $scope.networthTimeline = function(timeframe){
        if(timeframe == 3){
          $scope.networthLabels = ["May", "June", "July"];
          $scope.series = ['Series A', 'Series B'];
          $scope.networthData = [
            [ 56, 55, 40],
            [86, 27, 90],
            [11, 74, 60]
          ];
        }
        else if (timeframe == 6){
          $scope.networthLabels = ["January", "February", "March", "April", "May", "June", "July"];
          $scope.series = ['Series A', 'Series B'];
          $scope.networthData = [
            [90, 75, 80, 81, 74, 69, 67],
            [55, 60, 65, 59, 80, 81, 56],
            [10, 0, 9, 19, 11, 74, 60]
          ];
        }
        else if (timeframe == 12){
          $scope.networthLabels = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
          $scope.series = ['Series A', 'Series B'];
          $scope.networthData = [
            [90, 75, 80, 81, 74, 69, 67, 65, 59, 80, 81, 56, 55, 40],
            [28, 48, 40, 42, 86, 27, 90, 28, 48, 40, 42, 86, 27, 90],
            [10, 0, 9, 19, 11, 74, 60, 10, 0, 9, 19, 11, 74, 60]
          ];
        }
        else if (timeframe == 24){
          $scope.networthLabels = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
          $scope.series = ['Series A', 'Series B'];
          $scope.networthData = [
            [80, 81, 70, 60, 40, 50, 59, 80, 81, 80, 81, 56, 55, 40, 65, 59, 80, 81, 56, 55, 40, 65, 59, 80, 81, 56, 55, 40],
            [28, 48, 40, 42, 86, 27, 90, 28, 48, 40, 42, 86, 27, 90, 28, 48, 40, 42, 86, 27, 90, 28, 48, 40, 42, 86, 27, 90],
            [10, 0, 9, 19, 11, 74, 60, 10, 0, 9, 19, 11, 74, 60, 10, 0, 9, 19, 11, 74, 60, 10, 0, 9, 19, 11, 74, 60]
          ];
        }
        else{

        }
      }

      $scope.onClick = function (points, evt) {
        console.log(points, evt);
      };


        $scope.Line = {
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                datasets: [
                    {
                        label: "Total Account Balances",
                        fillColor: "#43B6DF",
                        strokeColor: "#43B6DF",
                        pointColor: "#43B6DF",
                        pointStrokeColor: "#fff",
                        pointHighlightFill: "#fff",
                        pointHighlightStroke: "rgba(220,220,220,1)",
                        data: [1958, 2100, 2034, 2044, 1985, 2184, 2152, 2100, 2150, 2240, 2600, 2800]
                    },
                    {
                        label: "Cumulative Savings",
                        fillColor: "#FCD580",
                        strokeColor: "#FCD580",
                        pointColor: "#FCD580",
                        pointStrokeColor: "#fff",
                        pointHighlightFill: "#fff",
                        pointHighlightStroke: "rgba(151,187,205,1)",
                        data: [2000, 2234, 2405, 2486, 2453, 3100, 3002, 2968, 3024, 3200, 3250, 3400]
                    },
                    {
                        label: "Monthly Expenses",
                        fillColor: "#ffa52f",
                        strokeColor: "#ffa52f",
                        pointColor: "#ffa52f",
                        pointStrokeColor: "#fff",
                        pointHighlightFill: "#fff",
                        pointHighlightStroke: "rgba(151,187,205,1)",
                        data: [200, 750, 910, 800, 600, 600, 470, 890, 590, 695, 694, 800]
                    }
                ]
            },
            options: {
                ///Boolean - Whether grid lines are shown across the chart
                scaleShowGridLines : true,

                //String - Colour of the grid lines
                scaleGridLineColor : "black",

                //Number - Width of the grid lines
                scaleGridLineWidth : 1,

                //Boolean - Whether to show horizontal lines (except X axis)
                scaleShowHorizontalLines: true,

                //Boolean - Whether to show vertical lines (except Y axis)
                scaleShowVerticalLines: false,

                //Boolean - Whether the line is curved between points
                bezierCurve : true,

                //Number - Tension of the bezier curve between points
                bezierCurveTension : 0.4,

                //Boolean - Whether to show a dot for each point
                pointDot : true,

                //Number - Radius of each point dot in pixels
                pointDotRadius : 4,

                //Number - Pixel width of point dot stroke
                pointDotStrokeWidth : 1,

                //Number - amount extra to add to the radius to cater for hit detection outside the drawn point
                pointHitDetectionRadius : 20,

                //Boolean - Whether to show a stroke for datasets
                datasetStroke : true,

                //Number - Pixel width of dataset stroke
                datasetStrokeWidth : 2,

                //Boolean - Whether to fill the dataset with a colour
                datasetFill : false,

                //String - A legend template
                legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].strokeColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>"
            }
        };


        $scope.HorizontalBar = {
            data: {
                labels: ["January", "February", "March", "April", "May", "June", "July"],
                datasets: [
                    {
                        label: "My First dataset",
                        fillColor: "rgba(220,220,220,0.5)",
                        strokeColor: "rgba(220,220,220,0.8)",
                        highlightFill: "rgba(220,220,220,0.75)",
                        highlightStroke: "rgba(220,220,220,1)",
                        data: [65, 59, 80, 81, 56, 55, 40]
                    },
                    {
                        label: "My Second dataset",
                        fillColor: "rgba(151,187,205,0.5)",
                        strokeColor: "rgba(151,187,205,0.8)",
                        highlightFill: "rgba(151,187,205,0.75)",
                        highlightStroke: "rgba(151,187,205,1)",
                        data: [28, 48, 40, 19, 86, 27, 90]
                    }
                ]
            },
            options: {
                //Boolean - Whether the scale should start at zero, or an order of magnitude down from the lowest value
                scaleBeginAtZero : true,

                //Boolean - Whether grid lines are shown across the chart
                scaleShowGridLines : true,

                //String - Colour of the grid lines
                scaleGridLineColor : "rgba(0,0,0,.05)",

                //Number - Width of the grid lines
                scaleGridLineWidth : 1,

                //Boolean - Whether to show horizontal lines (except X axis)
                scaleShowHorizontalLines: true,

                //Boolean - Whether to show vertical lines (except Y axis)
                scaleShowVerticalLines: true,

                //Boolean - If there is a stroke on each bar
                barShowStroke : true,

                //Number - Pixel width of the bar stroke
                barStrokeWidth : 2,

                //Number - Spacing between each of the X value sets
                barValueSpacing : 5,

                //Number - Spacing between data sets within X values
                barDatasetSpacing : 1,

                //String - A legend template
                legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].fillColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>"

            }
        };
    }
}());
