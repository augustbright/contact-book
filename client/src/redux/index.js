import {createStore, applyMiddleware, compose} from "redux";
import thunk from "redux-thunk";
import reducer from './reducer';
import {updatePhones} from "./actions";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default stateFromServer => {
    const store = createStore(reducer, stateFromServer, composeEnhancers(applyMiddleware(thunk)));
    store.dispatch(updatePhones());
    return store;
}
