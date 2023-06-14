import { useAppDispatch } from "."
import { getEnvVariables } from "../helpers/getEnvVariables"
import { setLoading, setPokemonDetail, updatePagination, updateSelectedImage } from "../store/pokemon/pokemonSlice"


const { VITE_API_BASE } = getEnvVariables()


export const useFetchData = () => {
    const dispatch = useAppDispatch()

    const getPagination = async (offSet: number, limitOfPokemons: number) => {
        try {
            dispatch(setLoading())
            const response = await fetch(`${VITE_API_BASE}/?limit=${limitOfPokemons}&offset=${offSet}`)
            const data = await response.json()
            if (data.results) {
                dispatch(updatePagination(data.results))
            }
        } catch (error) {
            console.log(error)
        }

    }

    const getPokemonInformation = async (url: string) => {
        try {
            dispatch(setLoading())
            const response = await fetch(url)
            const data = await response.json()
            if (data.sprites) {
                dispatch(updateSelectedImage(data.sprites.front_default))
            }
        } catch (error) {
            console.log(error)
        }
    }

    const getPokemonByName = async (name: string) => {
        try {
            dispatch(setLoading())
            const response = await fetch(`${VITE_API_BASE}/${name}`)
            const data = await response.json()
            if (data) {
                dispatch(setPokemonDetail(data))
                dispatch(updateSelectedImage(data.sprites.front_default))
            }
        } catch (error) {
            console.log(error)
        }
    }
    return {
        getPagination,
        getPokemonByName,
        getPokemonInformation,
    }
}