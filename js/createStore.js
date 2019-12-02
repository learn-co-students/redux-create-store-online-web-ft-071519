

let button = document.getElementById('button');

const createStore = (reducer) =>{
  
    let state;

    const dispatch = action => {
      state = reducer(state, action);
      render();
    };

    const getState = () => state;

    return {
      dispatch,
      getState
    }; //to store outside the function. sort od similar way to export

}

const reducer = (state = {count: 0}, action) => {
  switch (action.type) {
    case 'INCREASE_COUNT':
      return { count: state.count + 1 };
    default:
      return state; 
  }
} 


const render = () => {
  let container = document.getElementById("container");
  container.textContent = store.getState().count;
}

let store = createStore(reducer);
store.dispatch({type: "@@INIT"});
console.log(store.getState().count);

button.addEventListener("click", () => {store.dispatch({ type: 'INCREASE_COUNT' })});


