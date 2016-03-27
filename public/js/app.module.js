(function () {
    angular
        .module('savery', ['ui.router', 'chart.js']);

    Chart.defaults.global.responsive = false;
    Chart.defaults.global.colours = ['#40557D', '#336FAF', '#FFD400', '#F0B499', '#72C4B9', '#289DF5'];
}());