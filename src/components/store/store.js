// export const initialState = {
//     contacts: [],
//     filter: '',
// };
import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './ContactListSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
});


// import storage from 'redux-persist/lib/storage';
// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';

// const persistConfig = {
//   key: 'root',
//   storage,
//   whitelist: ['items', 'filter'],
// };

// const persistedReducer = persistReducer(persistConfig, contactsReducer);

// export const store = configureStore({
//   reducer: {
//     contacts: persistedReducer,
//   },
//   middleware: getDefaultMiddleware =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),
// });

// export default store;
// export const persistor = persistStore(store);


//change code to AsynkThunk
