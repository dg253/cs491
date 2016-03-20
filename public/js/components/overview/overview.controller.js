(function () {
    angular
        .module('savery')
        .controller('overviewCtrl', overview);

    function overview () {
        var ctx = document.getElementById('testChart').getContext('2d');

        var data = {
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
                    fillColor: "#32297D",
                    strokeColor: "#32297D",
                    pointColor: "#32297D",
                    pointStrokeColor: "#fff",
                    pointHighlightFill: "#fff",
                    pointHighlightStroke: "rgba(151,187,205,1)",
                    data: [600, 750, 910, 800, 600, 600, 470, 890, 590, 695, 694, 800]
                }
            ]
        };

        var options = {

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

        };

        var myNewChart = new Chart(ctx).Line(data, options);
    }
}());