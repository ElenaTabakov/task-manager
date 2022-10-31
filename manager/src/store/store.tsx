import { configureStore, combineReducers } from "@reduxjs/toolkit";
import tasksReducer from './slices/tasksSlice';
import userReducer from "./slices/usersSlice";
import storage from "redux-persist/lib/storage";
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import thunk from "redux-thunk";


const persistConfig = {
  key: "root",
  storage,
  whitelist: ['userSlice']
};

const authPersistConfig = {
  key: 'userSlice',
  storage: storage,
  whitelist: ['isAuth']
}
// const persistedReducer = persistReducer(persistConfig, rootReducer);

const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, userReducer),
  taskSlice: tasksReducer,
  userSlice: userReducer,
});

export const store = configureStore({
  // auth: persistReducer(authPersistConfig, userReducer),
  // other: tasksReducer,
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: false
  }),
});

export const persistor = persistStore(store);
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
