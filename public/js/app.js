const app = angular.module('App', [])

app.controller('mainController', [
  '$http',
  function ($http) {
    this.hello = 'Travel log'
    this.loading = false
    this.states = states
    this.showStates = false
    this.options = [
      {
        route: 'parks',
        name: 'Parks',
        searchTypes: [
          { name: 'State', type: 'stateCode' },
          { name: 'General', type: 'q' }
        ]
      },
      {
        route: 'activities/parks',
        name: 'Things To Do'
      },
      { route: 'topics/parks', name: 'Topics' }
    ]
    this.type = 'q'
    this.route = null
    this.query = null
    this.selected = []
    this.optionsSelected = []

    this.selectState = ($index, $event, stateCode) => {
      this.selected.push($event.currentTarget.innerText)
      $event.currentTarget.classList.add('hidden')
      this.optionsSelected.push(`stateCode=${stateCode}`)
      this.optionsSelected.push('&')
    }

    this.showChange = () => {
      console.log(this.optionsSelected)
    }

    this.unselectState = ($index) => {
      const deletedItem = this.selected.splice($index, 1)
      console.log(deletedItem[0])
      document.getElementById(`${deletedItem[0]}`).classList.remove('hidden')
      this.optionsSelected.splice($index * 2, 2)
    }

    // GET from NPS API
    this.hitNPS = (route, type, query) => {
      this.loading = true
      type = type.join('')
      if (query === null) {
        query = 'q='
      } else {
        query = `q=${query}`
      }

      $http({
        method: 'POST',
        url: '/getparks',
        data: {
          type,
          query,
          route
        }
      })
        .then(
          (response) => {
            this.loading = false
            this.parks = response.data.data
            if (this.parks.length === 1) {
              this.parks = response.data.data[0]
            }
            console.log(this.parks)
          },
          (error) => {
            console.log('Error found: ', error)
          }
        )
        .catch((error) => {
          console.log('Catch: ', error)
        })
    }

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

  }
])



