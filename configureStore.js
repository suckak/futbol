import { createStore, applyMiddleware } from 'redux'
import app from './reducers'
import promise from 'redux-promise';

export default function configureStore() {
  let store = createStore(app, applyMiddleware(promise))
  return store
}
