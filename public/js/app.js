const app = angular.module('App', [])

app.controller('mainController', [
  '$http',
  function ($http) {
    this.hello = 'hello world'
    // GET from NPS API
    this.getPark = (searchQuery) => {
      $http({
        method: 'GET',
        url: `developer.nps.gov/api/v1/parks/?q=${searchQuery}&api_key=`
      })
    }
  }
])
