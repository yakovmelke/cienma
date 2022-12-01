function reducer(state={
  users:[],
  movies:[],
  subscriptions:[],
  members:[],
  login:{
    admin:false,
    permissions:{
      viewSubscriptions:false, 
    createSubscriptions:false, 
    updateSubscriptions:false, 
    deleteSubscriptions:false, 
    viewMovies:false, 
    createMovies:false, 
    updateMovies :false,
    deleteMovies:false
    }
  }

},action) {
switch (action.type) {
  case "ADD ALL USERS DATA":
    return {...state,users:action.payload}
    
  case "ADD ALL MEMBERS DATA":
    return {...state,members:action.payload}
    
  case "LOGIN":
    return {...state,login:action.payload}
  case "ADD ALL MOVIES":
    return {...state,movies:action.payload}
  case "ADD ALL SUBSCRIPTIONS":
    return {...state,subscriptions:action.payload}

  default:
    return state
}

  
}

export default reducer