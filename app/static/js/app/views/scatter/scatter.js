

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
            text: 'Marker values per sample',
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
                text: 'Value'
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
  name: "UDX001",
color: 'rgba(119, 152, 191, .5)',
    data: [
      0.2997464559,
      0.1250191459,
      0.0467836257,
      0.2564102564,
      0.139178618,
      0.2062781821,
      0.0353758686,
      0.5472557745,
      0.2680724764,
      0.2324840764,
      0.1574074074,
      0.5543939793,
      0.3421069362,
      0.6079856438,
      0.0669581853,
      0.219160105,
      0.3074248313,
      0.0590536278
    ]
},

{
  name: "UDX002",
    color: 'rgba(223, 83, 83, .5)',
  data:
    [
      0.4499574342,
      0.1801140399,
      0.1228070175,
      0.1378205128,
      0.1527596697,
      0.3296960288,
      0.0341124447,
      0.3823903369,
      0.3329500249,
      0.2452229299,
      0.0648148148,
      0.0364285923,
      0.1160873228,
      0.0935845671,
      0.0661382892,
      0.1002624672,
      0.0944978523,
      0.0082018927
    ]

  }
 ]



      });




    }
  }
});