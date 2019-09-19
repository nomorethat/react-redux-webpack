import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducer';
import { DevTools } from './utils/index';

function _applyMiddleware() {
    const middleware = [

    ];

    return applyMiddleware(...middleware);
}

export default function configureStore(initialState) {
    const store = compose(
        _applyMiddleware(),
        DevTools.instrument()
    )(createStore)(rootReducer, initialState);

    return store;
}
