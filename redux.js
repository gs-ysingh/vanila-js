const createStore = (reducer) => {
  let state = null;
  let listeners = [];
  
  const getState = () => state;

  const dispatch = (action) => {
    state = reducer(state, action);
    listeners.forEach((listener) => {
      listener();
    });
  }

  const subscribe = (fn) => {
    listeners.push(fn);
  }

  dispatch({});
  
  return {
    getState,
    dispatch,
    subscribe
  }
}

const counter = (state = 0, action) => {
  if(action.type === 'INCREMENT') {
    return state + 1;
  } else if(action.type === 'DECREMENT') {
    return state - 1;
  }
  return state;
}

const store = createStore(counter);
console.log(store.getState());

store.dispatch({
  type: 'INCREMENT'
})
console.log(store.getState());


const render = () => {
  console.log('I am rendering');
}
store.subscribe(() => render);

function createStore(fn) {
	let state = null;
	let reducer = fn;
	let listeners = [];

	const dispatch = function(action) {
		state = reducer(state, action);
		listeners.forEach((listener) => {
			listener();
		})
	}

	const subscribe = function(fn) {
		listeners.push(fn);
	}

	const getState = function() {
		return state;
	}

	dispatch({});

	return {
		getState: getState,
		dispatch: dispatch,
		subscribe: subscribe
	}
}



const store = createStore(fn);

store.dispatch(action);
store.getState();
store.subscribe({})


function createStore(reducer) {
	let state;
	let listeners = [];
	return {
		dispatch: function(action) {
			state = reducer(action);
			listeners.forEach((fn) => {
				fn();
			})
		},
		getState: function() {
			return state;
		},
		subscribe: function(fn) {
			listeners.push(fn);
		}
	}
}