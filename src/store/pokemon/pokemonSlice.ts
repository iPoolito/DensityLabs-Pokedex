import { createSlice } from '@reduxjs/toolkit'
import { PokemonState, PokemonResult, Pokemon } from '../../types'

// Define the initial state using that type
const initialState: PokemonState = {
    currentPokemonPage: <PokemonResult[]>[],
    selectedPokemonImageUrl: '',
    isLoading: false,
    pokemonDetail: {} as Pokemon
}

export const pokemonSlice = createSlice({
    name: 'pokemon',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        updatePagination: (state, action) => {
            state.currentPokemonPage = action.payload
            state.isLoading = false
        },
        setLoading: (state) => {
            state.isLoading = true
        },
        updateSelectedImage: (state, action) => {
            state.selectedPokemonImageUrl = action.payload
            state.isLoading = false
        },
        setPokemonDetail: (state, action) => {
            state.pokemonDetail = action.payload
            state.isLoading = false
        }


    }
})

export const { updatePagination, setLoading, updateSelectedImage, setPokemonDetail } = pokemonSlice.actions



export default pokemonSlice.reducer