angular.module('DopplerEffect', ['rzModule'])

.controller('DopplerController', function($scope) {
  $scope.velocityCheck = function () {
    var velocity = document.getElementById('velocity');
    var slider = $scope.slider;
    var ceiling = slider.options.ceil;
    var floor = slider.options.floor;
    if (velocity.value > ceiling) {
      slider.options.ceil = ceiling;
      velocity.value = ceiling;
      // $scope.velocity.$setvalidity('velocity', false);
    } else if (velocity.value < floor) {
      slider.options.floor = floor;
      velocity.value = floor;
      console.log(velocity.value);
    }
  };

  $scope.slider = {
    value: 0.0,
    options: {
      floor: -100.00,
      ceil: 100.00,
      step: 0.1,
      showTicksValues: false,
      showTicks: false,
      precision: 1,
      customValueToPosition: function(val, minVal, maxVal) {
        console.log(val);
        if (val > minVal && val < maxVal) {
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
          console.log('range stuff'+val);
          return (val - minVal) / range;
        } else {

          return 0;
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
