

angular.module('udxApp.scatterView', ['ngRoute'])

//configure routing for view
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/scatter', {
    templateUrl: '/static/js/app/views/scatter/scatter.html',
    controller: 'scatterController'
  });
}]);

app.controller ('scatterController', function($scope, limitToFilter) {

});

app.directive('scatterPlot', function () {
  return {
    restrict: 'C',
    replace: true,
    scope: {
      items: '='
    },
    controller: function ($scope, $element, $attrs) {


    },
    template: '<div id="container" style="margin: 0 auto">not working</div>',
    link: function (scope, element, attrs) {

      var chart = new Highcharts.Chart({
        chart: {
          renderTo: 'container',
          plotBackgroundColor: null,
          plotBorderWidth: null,
          plotShadow: false,
            type: 'scatter',
            zoomType: 'xy'
        },

          title: {
            text: 'Marker1 value vs Age per Gender ',
            x: -20 //center
        },
        subtitle: {
            text: 'Source: Universal DX',
            x: -20
        },
        xAxis: {
            categories: ['M1', 'M2', 'M3', 'M4', 'M5', 'M6',
                'M7', 'M8', 'M9', 'M10', 'M11', 'M12', 'M13', 'M14', 'M15', 'M16', 'M17', 'M18']
        },
        yAxis: {
            title: {
                text: 'M1 value'
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        tooltip: {
            valueSuffix: ''
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
            borderWidth: 0
        },
        series: [{
  name: "Male",
color: 'rgba(119, 152, 191, .5)',
    data: [ [42, 0.2997], [42, 0.499], [46, 0.421], [47, 0.136], [48, 0.439], [50, 0.363]

    ]
},

{
  name: "Female",
    color: 'rgba(223, 83, 83, .5)',
  data:
    [
      [38, 0.321], [42, 0.238], [44, 0.5839], [44, 0.583], [47, 0.517]
    ]

  }
 ]



      });




    }
  }
});