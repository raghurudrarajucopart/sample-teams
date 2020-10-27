import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import createReducer from './reducers'

const validDevTools = window.__REDUX_DEVTOOLS_EXTENSION__
  ? window.__REDUX_DEVTOOLS_EXTENSION__({ trace: true, traceLimit: 10 })
  : (f) => f

const initialState = {}
const store = createStore(
  createReducer(),
  initialState,
  compose(
    applyMiddleware(thunk),
    process.env.NODE_ENV === 'development' ? validDevTools : (f) => f
  )
)
store.asyncReducers = {}

export default store
