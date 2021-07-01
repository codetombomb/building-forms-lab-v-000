export default function manageBand(state = {
  bands: [],
}, action) {

  switch(action.type){
    case 'ADD_BAND':
      return {
        ...state, bands: [...state.bands, action.payload.payload]
      }
    default:  
      return state;
  }
}
