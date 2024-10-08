import {combineReducers, configureStore} from '@reduxjs/toolkit';
import userReducer from './user/userSlice';
import {persistReducer,persistStore} from 'redux-persist';
import storage from 'redux-persist/lib/storage'

const rootReducer = combineReducers({user:userReducer});

const persistConfig = {
   ket: 'root',
   version: 1,
   storage,

}
const persistReducer = persistReducer(persistConfig,rootReducer);

export const store = configureStore({
    reducer: persistReducer,
    middleware: (getDefaultMiddleWare) =>
         getDefaultMiddleWare({
        serializableCheck: false,
    }),
});


export const persistor = persistStore(store);