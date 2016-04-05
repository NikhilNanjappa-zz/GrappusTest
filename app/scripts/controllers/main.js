'use strict';

/**
 * @ngdoc function
 * @name grappusApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the grappusApp
 */
angular.module('grappusApp')
  .controller('MainCtrl', function ($scope, fetchDataService) {
  	
  	fetchDataService.getData().then(function(response) {
    	$scope.careers_result = response[0].careers;
    	$scope.companies_result = response[0].companies;
    	$scope.jobs_result = response[0].jobs;
    	$scope.notifications_result = response[0].notifications;
    	$scope.plans_result = response[0].plans;
    	$scope.chart_legends = response[0].legends;
    });

    // Build the chart
    $('#container-chart').highcharts({
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: ''
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: false
                },
                showInLegend: true
            }
        },
        series: [{
            name: 'Brands',
            colorByPoint: true,
            data: [{
                name: 'OTHERS',
                y: 5
            }, {
                name: 'TECHNOLOGY',
                y: 65
            }, {
                name: 'MARKETTING',
                y: 15
            }, {
                name: 'MEDIA',
                y: 10
            }, {
                name: 'FINANCE',
                y: 5
            }]
        }],
        legend: {
        	enabled: false
        }
    });

  });
