import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './counter/counterSlice'
import pokemonSlice from './pokemon/pokemonSlice'

export const store = configureStore({
    reducer: {
        counter: counterSlice,
        pokemon: pokemonSlice
    }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch