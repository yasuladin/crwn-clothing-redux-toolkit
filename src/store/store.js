/* eslint-disable no-undef */
// /* eslint-disable no-undef */
// import { compose, createStore, applyMiddleware } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
// import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
import logger from 'redux-logger';
// // import { thunk } from 'redux-thunk';
// import createSagaMiddleware from 'redux-saga';

// import { rootSaga } from './root-saga';

import { rootReducer } from './root-reducer';

// const persistConfig = {
//   key: 'root',
//   storage,
//   whitelist: ['cart'],
// };

// const sagaMiddleware = createSagaMiddleware();

// const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleWares = [process.env.NODE_ENV === 'development' && logger].filter(
  Boolean
); // NODE_ENVがdevelopmentでなかった時、[]にfalseが残るが、filter(Boolean)で取り除く

// const composeEnhancer =
//   (process.env.NODE_ENV !== 'production' &&
//     window &&
//     window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
//   compose;

// const composedEnhancers = composeEnhancer(applyMiddleware(...middleWares));

export const store = configureStore({
  reducer: rootReducer,
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware({
  //     serializableCheck: false,
  //   }).concat(middleWares),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middleWares),
});

// createStore(
//   // <-- createStore()の引数は、reducer, preloadedState, enhancerの３つ。
//   persistedReducer,
//   undefined, // <--わざわざundefinedを渡す必要は無いらしい。preloadedStateはオブジェクト、enhancerは関数なので、第２引数にenhancerを渡した場合reduxはpreloadedStateは渡されなかったと判断できるから。
//   composedEnhancers
// );

// sagaMiddleware.run(rootSaga);

// export const persistor = persistStore(store);
