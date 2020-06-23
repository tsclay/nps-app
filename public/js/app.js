const app = angular.module('App', [])

app.controller('mainController', [
  '$http',
  function ($http) {
    const controller = this
    this.includePath = [
      'partials/help.html',
      'partials/about_site.html',
      'partials/search.html',
      'partials/login.html',
      'partials/signup.html',
      'partials/favorites.html',
      'partials/account.html'
    ]
    this.displayedPartial = this.includePath[1]
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

    //   // User
    this.loggedInUser = false

    this.signup = (event) => {
      $http({
        method: 'POST',
        url: '/nps',
        data: this.createForm
      })
        .then((response) => {
          this.displayedPartial = this.includePath[3]
        })
        .catch((error) => {
          event.preventDefault()
          console.log('Catch !!! ', error)
        })
    }

    this.login = () => {
      $http({
        method: 'POST',
        url: '/session',
        data: {
          username: this.loginUsername,
          password: this.loginPassword
        }
      }).then((response) => {
        if (response.data.username) {
          console.log(response.data)
          controller.loggedInUser = response.data
          controller.displayedPartial = controller.includePath[0]
        } else {
          controller.loginUsername = null
          controller.loginPassword = null
        }
      })
    }
    // this.updateUser = function() {
    //   $http(
    //     {
    //       method: 'PUT',
    //       url: '/nps',
    //       data: {
    //         username: ,// TODO: create input
    //         password: ,// TODO: create input
    //         email: ,// TODO: create input
    //         phoneNum: ,// TODO: create input
    //         firstName: ,// TODO: create input
    //         lastName: ,// TODO: create input
    //         premiumUser: // TODO: create input
    //       }
    //     }
    //   ).then(
    //     function(response) {
    //       console.log(response);
    //     }
    //   )
    // }
    this.logout = () => {
      $http({
        method: 'DELETE',
        url: '/session'
      }).then((response) => {
        this.displayedPartial = this.includePath[3]
        this.loggedInUser = false
        console.log(response)
      })
    }
    // // Parks
    // this.addPark = function() {
    //   $http(
    //     {
    //       method: 'POST',
    //       url: '/nps',
    //       data: {
    //         name: ,// TODO: create input
    //         parkId: ,// TODO: create input
    //         parkImage: // TODO: create input
    //       }
    //     }
    //   ).then(
    //     function(response) {
    //       console.log(response);
    //     }
    //   )
    // }

    // //////////////////////////////////////
    // //////////////////////////////////////
    // this.getAllParks = function() {
    //   $http(
    //     {
    //       method: 'GET',
    //       url: // TODO: add route
    //     }
    //   ).then(
    //     function(response) {
    //       console.log(response);
    //     }
    //   )
    // }
    this.getSavedParks = () => {
      $http({
        method: 'GET',
        url: `/nps/${this.loggedInUser._id} `
      })
        .then((response) => {
          controller.displayedPartial = controller.includePath[5]
          this.ourParks = response.data.favoriteParks
        })
        .catch((error) => {
          console.log(error)
        })
    }
    // //////////////////////////////////////
    // //////////////////////////////////////
    // this.updateSavedPark = function() {
    //   $http(
    //     {
    //       method: 'PUT',
    //       url: '/nps',
    //       data: {
    //         parkNotes: // TODO: create input
    //       }
    //     }
    //   ).then(
    //     function(response) {
    //       console.log(response);
    //     }
    //   )
    // }
    // this.unsavePark = function() {
    //   $http(
    //     {
    //       method: 'DELETE',
    //       url: '/nps'
    //     }
    //   ).then(
    //     function(response) {
    //       console.log(response);
    //     }
    //   )
    // }
    // this.getAllParks();
    // this.getSavedParks();

    // $http(
    //   {
    //     method: 'GET',
    //     url: '/session'
    //   }
    // ).then(
    //   function(response) {
    //     if (true) {
    //       return
    //     }
    //   }
    // );
  }
])
