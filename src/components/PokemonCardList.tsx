import { useNavigate } from 'react-router-dom'
import { useFetchData } from '../hooks/useFetchData'
import pokeball from '../images/poke-ball.png'
type PokemonCardProps = {
    name: string,
    url: string
}

export const PokemonCardList = ({ name, url }: PokemonCardProps) => {
    const navigate = useNavigate()
    const { getPokemonInformation } = useFetchData()

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        getPokemonInformation(url)
        if (event.detail == 2) {
            navigate(`/pokemon/${name}`);
        }
    }

    return (
        <div className='card-list' onClick={handleClick}>
            <p>{name}</p>
            <img src={pokeball} alt='pokeball'
                className='pokeball-in-card' />
        </div>
    )
}