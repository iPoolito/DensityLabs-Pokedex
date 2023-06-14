import { Outlet } from "react-router-dom";
import { useAppSelector } from '../hooks'
import pokeLogo from '../images/poke-api.png'

export const Root = () => {
    const { isLoading, selectedPokemonImageUrl } = useAppSelector(state => state.pokemon)
    return (
        <div id="root">
            <section className='current-pokemon'>
                <img src={pokeLogo} className='pokeapi-logo'
                    alt='pokeapi-logo' />
                {!isLoading && selectedPokemonImageUrl && (
                    <img src={selectedPokemonImageUrl} alt='pokemon-image' className='pokemon-selected' />

                )}
                {isLoading && (
                    <h4>Loading...</h4>
                )}
            </section>


            <Outlet />

        </div>
    );

}   