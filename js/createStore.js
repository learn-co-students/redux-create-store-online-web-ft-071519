function createStore(reducer) {
    let state;

    function dispatch(action){
        state = reducer(state, action);
        render();
    };

    function getState() {
        return state
    }

    // Why is dispatch in curly braces?
    // "dispatch" is a JS object that has a dispatch method. Same goes for "getState".
    // createStore is returning the functions that it contains.
    return {dispatch, getState}
}

function reducer(state = { count: 0 }, action) {
  switch (action.type) {
    case 'INCREASE_COUNT':
      return { count: state.count + 1 };

    default:
      return state;
  }
};

// Call functions within the createStore function with the dot operator.
// store.getState().count is saying, retrieve the state with getState(), then use the count key's value.
function render() {
    let container = document.getElementById('container');
    container.textContent = store.getState().count;
};

// Store the function inside of a variable. 
// Now you can call the inner functions with the dot operator. 
let store = createStore();
store.dispatch({type:"@@INIT"})

// Make sure to use the anonymous function to call another function.
let button = document.getElementById('button');
button.addEventListener('click', function() {
    store.dispatch({ type: 'INCREASE_COUNT' });
})
