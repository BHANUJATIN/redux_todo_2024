import {configureStore} from '@reduxjs/toolkit';
import todoReducer from '../features/todo/todoSlice';
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import {thunk} from 'redux-thunk';

const persistConfig = {
    key: "root",
    storage,
}


const persistedReducer = persistReducer(persistConfig, todoReducer)
// persist reducer is used to utilized localStorage
export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
      }).concat(thunk),
})

export const persistor = persistStore(store);