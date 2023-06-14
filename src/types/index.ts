export type PokemonResult = {
    name: string
    url: string
}
// Define a type for the slice state
export interface PokemonState {
    currentPokemonPage: PokemonResult[],
    selectedPokemonImageUrl: string,
    isLoading: boolean
    pokemonDetail: Pokemon
}
interface PokemonType {
    slot: number;
    type: {
        name: string;
        url: string;
    };
}

interface Stat {
    base_stat: number;
    effort: number;
    stat: {
        name: string;
        url: string;
    };
}
interface Ability {
    ability: {
        name: string;
        url: string;
    };
    is_hidden: boolean;
    slot: number;
}


export interface Pokemon {
    abilities: Ability[];
    base_experience: number;
    forms: {
        name: string;
        url: string;
    }[];
    height: number;
    id: number;
    is_default: boolean;
    location_area_encounters: string;
    moves: {
        move: {
            name: string;
            url: string;
        };
    }[];
    name: string;
    order: number;
    species: {
        name: string;
        url: string;
    };
    sprites: {
        back_default: string;
        back_female: string;
        back_shiny: string;
        back_shiny_female: string;
        front_default: string;
        // Include other sprite properties as needed
    };
    stats: Stat[];
    types: PokemonType[];
    weight: number;
}