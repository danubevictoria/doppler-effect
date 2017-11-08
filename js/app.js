var app = angular.module('DopplerEffect', ['rzModule']);

app.controller('DopplerController', function($scope) {
  $scope.velocityCheck = function () {
    var velocity = document.getElementById('velocity');
    var slider = $scope.slider;
    var min = slider.min;
    var max = slider.max;
    if (velocity.value < min) {
      $scope.slider.min = -100;
      velocity.value = $scope.slider.min;
    } else if (velocity.value > max) {
      $scope.slider.max = 100;
      velocity.value = $scope.slider.max;
    } else {
      $scope.slider.value = velocity.value;
    }
  };

  $scope.change = function() {
    var value = $scope.slider.value;
    $scope.colorChange(value);
    $scope.zoom(value);
  };

  $scope.colorChange = function(value) {
    if (value < 0) {
      $('#star').removeClass('red-tint');
      $('#star').addClass('blue-tint');
      $('#background').addClass('blue-tint');
    } else if (value > 0) {
      $('#star').removeClass('blue-tint');
      $('#star').addClass('red-tint');
    } else {
      $('#star').removeClass('blue-tint');
      $('#star').removeClass('red-tint');
      $('#star').addClass('normal');
    }
  };

  $scope.zoom = function(value) {
    var originalWidth = 420;
    if (value != 0) {
      $('#star').width(originalWidth + (2 * value));
    } else {
      $('#star').width(originalWidth);
    }
  };

  $scope.slider = {
    value: 0.0,
    min: -100,
    max: 100,
    options: {
      floor: -100.00,
      ceil: 100.00,
      step: 0.1,
      precision: 1,
      onChange: $scope.change,
      customValueToPosition: function(val, minVal, maxVal) {
        if (isNaN(val)) {
          val = 0;
          return (val - minVal) / range;
        }
        if (val >= minVal && val <= maxVal) {
          if (val < 0) {
            val = -Math.sqrt(Math.abs(val));
          } else {
            val = Math.sqrt(Math.abs(val));
          }

          if (minVal < 0) {
            minVal = -Math.sqrt(Math.abs(minVal));
          } else {
            minVal = Math.sqrt(Math.abs(minVal));
          }

          if (maxVal < 0) {
            maxVal = -Math.sqrt(Math.abs(maxVal));
          } else {
            maxVal = Math.sqrt(Math.abs(maxVal));
          }

          var range = maxVal - minVal;
          return (val - minVal) / range;
        }
      },
      customPositionToValue: function(percent, minVal, maxVal) {
        if (minVal < 0) {
          minVal = -Math.sqrt(Math.abs(minVal));
        } else {
          minVal = Math.sqrt(Math.abs(minVal));
        }

        if (maxVal < 0) {
          maxVal = -Math.sqrt(Math.abs(maxVal));
        } else {
          maxVal = Math.sqrt(Math.abs(maxVal));
        }

        if (minVal > 0) {
          var value = -(percent * (maxVal - minVal) + minVal);
        } else {
          var value = percent * (maxVal - minVal) + minVal;
        }

        if (value < 0) {
          return -Math.pow(value, 2);
        } else {
          return Math.pow(value, 2);
        }
      }
    }
  };
});
