(function () {
    angular
        .module('savery', ['ui.router', 'chart.js', 'ngAnimate', 'calendar']);

    Chart.defaults.global.responsive = false;
    Chart.defaults.global.colours = ['#1f96ef', '#2ecc71', '#ffa52f', '#FFD400', '#f0b499', '#40557d'];
}());
