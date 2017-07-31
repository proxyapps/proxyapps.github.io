angular.module('app', [])
    .controller('gitHubDataController', ['$scope', '$http', function($scope, $http) {
        $scope.reposLoaded = false;
        $scope.userLoaded = false;
        $scope.username = "llnl";

        $scope.repoData = [];
        $scope.init = function(f) {
          $http.get(f).then(function(data) {
            console.log(data.data.length);
            for(var i = 0; i < data.data.length; i++) {
              var obj = data.data[i];
              $scope.repoData = $scope.repoData.concat(obj);
              console.log(obj);
            }
          });
        }

        $scope.predicate = '-stargazers_count';
    }]);
