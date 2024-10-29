import { configureStore } from '@reduxjs/toolkit'
// import logger from 'redux-logger'

import rootReducer from './store/slices'

const store = configureStore({
    reducer: rootReducer,
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    devTools: process.env.NODE_ENV !== 'production',
  });

export default store;