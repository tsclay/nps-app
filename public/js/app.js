const states = [
  { name: 'Alabama', stateCode: 'AL' },
  { name: 'Alaska', stateCode: 'AK' },
  { name: 'Arizona', stateCode: 'AZ' },
  { name: 'Arkansas', stateCode: 'AR' },
  { name: 'California', stateCode: 'CA' },
  { name: 'Colorado', stateCode: 'CO' },
  { name: 'Connecticut', stateCode: 'CT' },
  { name: 'Delaware', stateCode: 'DE' },
  { name: 'Florida', stateCode: 'FL' },
  { name: 'Georgia', stateCode: 'GA' },
  { name: 'Hawaii', stateCode: 'HI' },
  { name: 'Idaho', stateCode: 'ID' },
  { name: 'Illinois', stateCode: 'IL' },
  { name: 'Indiana', stateCode: 'IN' },
  { name: 'Iowa', stateCode: 'IA' },
  { name: 'Kansas', stateCode: 'KS' },
  { name: 'Kentucky', stateCode: 'KY' },
  { name: 'Louisiana', stateCode: 'LA' },
  { name: 'Maine', stateCode: 'ME' },
  { name: 'Maryland', stateCode: 'MD' },
  { name: 'Massachusetts', stateCode: 'MA' },
  { name: 'Michigan', stateCode: 'MI' },
  { name: 'Minnesota', stateCode: 'MN' },
  { name: 'Mississippi', stateCode: 'MS' },
  { name: 'Missouri', stateCode: 'MO' },
  { name: 'Montana', stateCode: 'MT' },
  { name: 'Nebraska', stateCode: 'NE' },
  { name: 'Nevada', stateCode: 'NV' },
  { name: 'New Hampshire', stateCode: 'NH' },
  { name: 'New Jersey', stateCode: 'NJ' },
  { name: 'New Mexico', stateCode: 'NM' },
  { name: 'New York', stateCode: 'NY' },
  { name: 'North Carolina', stateCode: 'NC' },
  { name: 'North Dakota', stateCode: 'ND' },
  { name: 'Ohio', stateCode: 'OH' },
  { name: 'Oklahoma', stateCode: 'OK' },
  { name: 'Oregon', stateCode: 'OR' },
  { name: 'Pennsylvania', stateCode: 'PA' },
  { name: 'Rhode Island', stateCode: 'RI' },
  { name: 'South Carolina', stateCode: 'SC' },
  { name: 'South Dakota', stateCode: 'SD' },
  { name: 'Tennessee', stateCode: 'TN' },
  { name: 'Texas', stateCode: 'TX' },
  { name: 'Utah', stateCode: 'UT' },
  { name: 'Vermont', stateCode: 'VT' },
  { name: 'Virginia', stateCode: 'VA' },
  { name: 'Washington', stateCode: 'WA' },
  { name: 'West Virginia', stateCode: 'WV' },
  { name: 'Wisconsin', stateCode: 'WI' },
  { name: 'Wyoming', stateCode: 'WY' }
]

const app = angular.module('App', [])

app.controller('mainController', [
  '$http',
  function ($http) {
    this.hello = 'hello world'
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
      }
    ]
    this.type = 'q'
    this.route = null
    this.query = null
    // GET from NPS API
    this.hitNPS = (route, type, query) => {
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

    // this.getPark('parks', 'stateCode', 'AL')
  }
])
