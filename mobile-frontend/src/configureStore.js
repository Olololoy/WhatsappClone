// import {persistStore, persistReducer} from 'redux-persist';
// import {createStore, applyMiddleware, combineReducers, compose} from 'redux';
// import logger from 'redux-logger';
// import storage from '@react-native-async-storage/async-storage';
// import {batchedSubscribe} from 'redux-batched-subscribe';
// import {debounce} from 'lodash';

// import createSagaMiddleware from 'redux-saga';
// import rootReducers from './appReducers';

// // eslint-disable-next-line import/no-cycle
// import rootSaga from './rootSaga';

// const debounceNotify = debounce(notify => notify());

// const biometryPersistConfig = {
//   key: 'biometry',
//   storage,
//   blacklist: ['showBiometryPopup'],
//   timeout: null,
// };

// const liveFeedPersistConfig = {
//   key: 'liveFeeds',
//   storage,
//   whitelist: ['liveFeeds1', 'liveFeeds2'],
//   timeout: null,
// };

// const appreducer = combineReducers(rootReducers, {
//   biometry: persistReducer(biometryPersistConfig, rootReducers.biometry),
//   liveFeeds: persistReducer(liveFeedPersistConfig, rootReducers.liveFeeds),
// });

// const persistConfig = {
//   key: 'root',
//   storage,
//   whitelist: [
//     'auth',
//     'biometry',
//     'learnPersistedData',
//     'settings',
//     'landing',
//     'calculatorFundList',
//     'overall',
//     'mfCourses',
//     'collections',
//     'learnLanding',
//     'nfo',
//     'articles',
//     'fundList',
//     'inspiration',
//     'master',
//     'filter',
//     'localData',
//     'profile',
//     'recentSearch',
//     'liveFeeds',
//     'IndicesReducer',
//     'watchListReducer',
//     'stocksMetaData',
//     'trendingReducer',
//     'preDefinedWatchListReducer',
//   ], // Names of reducers which will be persisted.
//   timeout: null,
// };

// const sagaMiddleware = createSagaMiddleware();

// const persistedReducer = persistReducer(persistConfig, appreducer);
// const middleWare = [sagaMiddleware];
// if (__DEV__) {
//   middleWare.push(logger);
// }
// const enhancer = compose(
//   applyMiddleware(...middleWare),
//   batchedSubscribe(debounceNotify),
// );

// export const store = createStore(
//   persistedReducer,

//   enhancer,
// );

// sagaMiddleware.run(rootSaga);

// export const persistor = persistStore(store);
