import * as React from 'react'
import { useAppSelector } from '../hooks'
import { useFetchData } from '../hooks/useFetchData'
import { PokemonCardList } from '../components/PokemonCardList'
import './styles.css'
export const HomePage = () => {
    const [offSet, setOffSet] = React.useState(0)
    const [limit] = React.useState(20)
    const { currentPokemonPage, isLoading } = useAppSelector(state => state.pokemon)
    const { getPagination } = useFetchData()

    React.useEffect(() => {
        getPagination(offSet, limit)
    }, [])

    const handlePagination = (isNext: boolean) => {
        if (isNext) {
            if (offSet == 140) {
                setOffSet(prev => prev + 10)
                getPagination(140, 10)
                return
            }
            const currentOffset = offSet + limit
            setOffSet(prev => prev + limit)
            getPagination(currentOffset, limit)
            return
        } else {
            if (offSet === 150) {
                getPagination(120, 20)
                setOffSet(prev => prev - 10)
                return
            }
            const currentOffset = offSet - limit
            setOffSet(prev => prev - limit)
            getPagination(currentOffset, limit)
        }
    }

    return (

        <section className='pokemon-list' >
            <div className='pokemon-list-container'>
                {currentPokemonPage.map((pokemon) => (
                    <PokemonCardList name={pokemon.name} url={pokemon.url} key={pokemon.name} />
                ))}
            </div>
            {isLoading && <h3>Loading...</h3>}
            <div className="buttons-container">
                {offSet >= 20 && (
                    <button onClick={() => handlePagination(false)}>Preview</button>
                )}
                {offSet >= 0 && offSet < 150 && (
                    <button onClick={() => handlePagination(true)}>Next</button>
                )}
            </div>
        </section>


    )
}