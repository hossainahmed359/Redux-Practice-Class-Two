import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./rootReducer";


// Middleware
const myLogger = (store) => (next) => (action) => {
  console.log(`Action: ${JSON.stringify(action)}`);

  console.log(`Before: ${JSON.stringify(store.getState())}`);

  const upcomingState = [action].reduce(rootReducer, store.getState());

  console.log(`Upcoming State: ${JSON.stringify(upcomingState)}`);

  return next(action);
};

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(myLogger)));

export default store;
