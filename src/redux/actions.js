
export const addListing = (listing) => {
  return {
    type: "ADD_LISTING",
    value: listing
    // the type and value keys are mandatory. value is also called payload in some repos
  }
}

export const removeListing = (index) => {
  return {
    type: "REMOVE_LISTING",
    value: index
  }
}

export const loginUser = (user) => {
  return {
    type: "LOGIN_USER",
    value: user
  }
}

export const logoutUser = (user) => {
  return {
    type: "LOGOUT_USER",
    value: user
  }
}

// change this to fetch coordinates from google maps API
export const fetchCoordinates = () => {
  return (dispatch) => {
      fetch('https://maps.googleapis.com/maps/api/js?key=AIzaSyDXK9DB5b6QFG2gFxA4ISprrHty1zvnSWc&callback=initMap&libraries=&v=weekly')
       .then(res => res.json())
       .then(response => {
           const action = {
              type: 'FETCH_COORDINATES',
              value: response.Results
           }
           dispatch(action)
       })
  }
}