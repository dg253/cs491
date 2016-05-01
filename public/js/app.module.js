(function () {
    angular
        .module('savery', ['ui.router', 'chart.js', 'ngAnimate', 'calendar', 'ngclipboard']);

    Chart.defaults.global.responsive = false;
    Chart.defaults.global.colours = ['#1f96ef', '#2ecc71', '#3471b0', '#FFD400', '#f0b499', '#40557d'];
}());
