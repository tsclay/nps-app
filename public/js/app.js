const app = angular.module("NationalParksService", []);

app.controller('NationalParksServiceController', ['$http', function($http) {
  const controller = this;

  // User
  this.signup = function() {
    $http(
      {
        method: 'POST',
        url: // TODO: add route
      }
    ).then(
      function(response) {
        console.log(response);
      }
    )
  }

  this.login = function() {
    $http(
      {
        method: 'POST',
        url: // TODO: add route
      }
    ).then(
      function(response) {
        console.log(response);
      }
    )
  }

  this.updateUser = function() {
    $http(
      {
        method: 'PUT',
        url: // TODO: add route
      }
    ).then(
      function(response) {
        console.log(response);
      }
    )
  }

  this.logout = function() {
    $http(
      {
        method: 'DELETE',
        url: // TODO: add route
      }
    ).then(
      function(response) {
        console.log(response);
      }
    )
  }

  // Parks
  this.addPark = function() {
    $http(
      {
        method: 'POST',
        url: // TODO: add route
      }
    ).then(
      function(response) {
        console.log(response);
      }
    )
  }

  this.getAllParks = function() {
    $http(
      {
        method: 'GET',
        url: // TODO: add route
      }
    ).then(
      function(response) {
        console.log(response);
      }
    )
  }

  this.getSavedParks = function() {
    $http(
      {
        method: 'GET',
        url: // TODO: add route
      }
    ).then(
      function(response) {
        console.log(response);
      }
    )
  }

  this.updateSavedPark = function() {
    $http(
      {
        method: 'PUT',
        url: // TODO: add route
      }
    ).then(
      function(response) {
        console.log(response);
      }
    )
  }

  this.unsavePark = function() {
    $http(
      {
        method: 'DELETE',
        url: // TODO: add route
      }
    ).then(
      function(response) {
        console.log(response);
      }
    )
  }

  this.getAllParks();
  this.getSavedParks();

  $http(
    {
      method: 'GET',
      url: // TODO: add route
      // TODO: Setup url for session
    }
  ).then(
    function(response) {
      if (true) {
        return
      }
    }
  );
}]);
