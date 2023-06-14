import * as React from 'react'
import { Link, useParams } from "react-router-dom"
import { useFetchData } from "../hooks/useFetchData"
import { useAppSelector } from '../hooks'
import './detailStyles.css'


export const PokemonDetailPage = () => {
    const { name } = useParams()
    const { getPokemonByName } = useFetchData()
    const { pokemonDetail, isLoading } = useAppSelector(state => state.pokemon)

    function isObjectNotEmpty(obj: object): boolean {
        return Object.keys(obj).length > 0;
    }

    React.useEffect(() => {
        if (name) {
            getPokemonByName(name)
        }
    }, [name])
    return (
        <section className='detail-page'>
            <Link to='/'>Go back</Link>
            {!isLoading && isObjectNotEmpty(pokemonDetail) && (
                <div className='pokemon-detail-container'>
                    <section className='type-section'>
                        <h3>Type</h3>
                        <div className='type-section-container'>
                            {pokemonDetail.types.map((element) => (
                                <p key={element.slot}>{element.type.name}</p>
                            ))}
                        </div>
                    </section>
                    <section className='details'>
                        <p>Number: {pokemonDetail.id}</p>
                        <p>Name: {pokemonDetail.name}</p>
                        <p>Height: {pokemonDetail.height}</p>
                        <p>Weight: {pokemonDetail.height}</p>
                    </section>
                    <div className='abilities-stats'>
                        <section className='stats'>
                            <h4>Stats</h4>
                            <div className='stats-container'>
                                {pokemonDetail.stats.map((stat) => (
                                    <>
                                        <p>{stat.stat.name}</p>
                                        <div className='stat-graph'>
                                            <p>{stat.base_stat}</p>
                                            <div className='graph-container'>
                                                <div style={{ width: `${stat.base_stat >= 100 ? '100%' : `${stat.base_stat}%`}` }} className='graph-number' />
                                            </div>
                                        </div>
                                    </>
                                ))}
                            </div>


                        </section>
                        <section>
                            <h4>Abilities</h4>
                            {pokemonDetail.abilities.map(({ ability }) => (
                                <p>{ability.name}</p>
                            ))}
                        </section>
                    </div>
                </div>
            )}
        </section>
    )

}