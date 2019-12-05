// declare state
function createStore(reducer) {
  let state;

  // persists state changes
  function dispatch(action){
    state = reducer(state, action);
    render();
  };

  function getState() {
    return state;
  }

  return {
    dispatch,
    getState
  };
}

// reducer sets initial state in default argument; handles actions, but does not persist changes
function reducer(state = { count: 0 }, action) {
  switch (action.type) {
    // actions
    case 'INCREASE_COUNT':
      return { count: state.count + 1 };

    default:
      return state;
  }
};



// renders state count
function render() {
  let container = document.getElementById('container');
  container.textContent = store.getState().count;
};

let store = createStore(reducer);
// renders default state
store.dispatch({ type: '@@INIT' });
let button = document.getElementById('button');

// allows user to update state
button.addEventListener('click', function() {
    store.dispatch({ type: 'INCREASE_COUNT' });
})
