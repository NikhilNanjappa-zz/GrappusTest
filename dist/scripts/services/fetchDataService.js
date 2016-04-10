'use strict';

angular.module('grappusApp')
    .factory('fetchDataService', function ($http) {
        return {
            getData : function(){

                //Fetch the data
                var result = $http.get('/scripts/controllers/data.json').then(function(response) {
                    return response.data.master_data;
                });

                return result;
            }
        };
    });