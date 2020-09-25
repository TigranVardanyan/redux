const initialState = {
  counter: 0,
  results: []
}
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        counter: state.counter + 1
      }
    case 'DECREMENT':
      return {
        ...state,
        counter: state.counter - 1
      }
    case 'ADD':
      return {
        ...state,
        counter: state.counter + action.val
      }
    case 'SUBTRACT':
      return {
        ...state,
        counter: state.counter - action.val
      }
    case 'STORE_RESULT':
      return {
        ...state,
        results: state.results.concat({
          id: new Date(),//todo add some hash for prevent id repeat when button clicked fast
          value: state.counter
        })
      }
    case 'DELETE_RESULT':
      //const id = 2;     // way first
      //const newArray = [...state.results];
      //newArray.splice(id, 1)
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
  //if (action.type === "INCREMENT") {
  //  return {
  //    counter: state.counter + 1
  //  }
  //}
  //if (action.type === "DECREMENT") {
  //  return {
  //    counter: state.counter - 1
  //  }
  //}
  //if (action.type === "ADD") {
  //  return {
  //    counter: state.counter + action.payload.val
  //  }
  //}
  //if (action.type === "SUBTRACT") {
  //  return {
  //    counter: state.counter - action.val
  //  }
  //}
  //return state
}
export default reducer