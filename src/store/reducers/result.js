import * as actionTypes from './../actions/actionTypes'
const initialState = {
  results: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.STORE_RESULT:
      return {
        ...state,
        results: state.results.concat({
          id: new Date(),//todo add some hash for prevent id repeat when button clicked fast
          value: action.result *2
        })
      }
    case actionTypes.DELETE_RESULT:
      const updatedArray = state
        .results
        .filter((result) => result.id !== action.resultId);
      return {
        ...state,
        results: updatedArray
      }
    default:
      return state
  }
}
export default reducer