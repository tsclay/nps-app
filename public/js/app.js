const app = angular.module('App', [])

app.controller('mainController', [
  '$http',
  function ($http) {
    this.hello = 'hello world'
    this.loading = false
    // GET from NPS API
    this.getPark = (route, type, query) => {
      this.loading = true
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
            // console.log(response.data.data)
          },
          (error) => {
            console.log('Error found: ', error)
          }
        )
        .catch((error) => {
          console.log('Catch: ', error)
        })
    }

    this.getPark('parks', 'stateCode', 'AL')
  }
])
