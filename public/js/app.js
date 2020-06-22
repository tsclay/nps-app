const app = angular.module("NationalParksService", []);

app.controller('NationalParksServiceController', ['$http', function($http) {
  const controller = this;

  // User
  this.signup = function() {
    $http(
      {
        method: 'POST',
        url: '/nps',
        data: {
          username: ,// TODO: create input
          password: ,// TODO: create input
          email: ,// TODO: create input
          phoneNum: ,// TODO: create input
          firstName: ,// TODO: create input
          lastName: ,// TODO: create input
          premiumUser: // TODO: create input
        }
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
        url: '/session',
        data: {
          username: ,// TODO: create input
          password: // TODO: create input
        }
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
        url: '/nps',
        data: {
          username: ,// TODO: create input
          password: ,// TODO: create input
          email: ,// TODO: create input
          phoneNum: ,// TODO: create input
          firstName: ,// TODO: create input
          lastName: ,// TODO: create input
          premiumUser: // TODO: create input
        }
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
        url: '/session'
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
        url: '/nps',
        data: {
          name: ,// TODO: create input
          parkId: ,// TODO: create input
          parkImage: // TODO: create input
        }
      }
    ).then(
      function(response) {
        console.log(response);
      }
    )
  }

  //////////////////////////////////////
  //////////////////////////////////////
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
  //////////////////////////////////////
  //////////////////////////////////////

  this.updateSavedPark = function() {
    $http(
      {
        method: 'PUT',
        url: '/nps',
        data: {
          parkNotes: // TODO: create input
        }
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
        url: '/nps'
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
