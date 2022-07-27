import { configureStore } from '@reduxjs/toolkit'
import tasksReducer from './slices/tasksSlice';
import userReducer from './slices/usersSlice'

export const store = configureStore({
  reducer: {
    taskSlice: tasksReducer,
    userSlice: userReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch