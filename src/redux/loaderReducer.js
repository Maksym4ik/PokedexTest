import * as axios from "axios"

const URL_SAVER = "URL_SAVER"
const POKEMONS_SAVER = "POKEMONS_SAVER"
const DETAILED_VIEW = "DETAILED_VIEW"
const IS_FETCHING = "IS_FETCHING"

const initialState = {
	pokemons: [],
	pokemonDetailed: {
		id: 1,
		name: "bulba",
		img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png",
		types: ["poison", "flying"],
		detailed: {
			speed: 1,
			attack: 2,
			defense: 3,
			spAttack: 4,
			spDefense: 5,
			hp: 6,
			weight: 7,
			totalMoves: 8
		}
	},
	isFetching: false,
	isDetailed: false,
	nextUrl: "http://pokeapi.co/api/v2/pokemon/?limit=12"

}

let loaderReducer = (state = initialState, action) => {

	switch (action.type) {
		case URL_SAVER:
			return {
				...state,
				nextUrl: action.url
			}
		case POKEMONS_SAVER:
			return {
				...state,
				pokemons: [...state.pokemons, ...action.chunk]
			}
		case DETAILED_VIEW:
			return {
				...state,
				pokemonDetailed: action.pokemon
			}
		case IS_FETCHING:
			return {
				...state,
				isFetching: action.bool
			}
		default:
			return state
	}
}

export default loaderReducer

//isFetching loader information (true/false)
export const isFetching = (bool) => ({type: IS_FETCHING, bool})

//pokemonsSaver to state from api response
export const pokemonsSaver = (chunk) => ({type: POKEMONS_SAVER, chunk})

// onClick action create for showing detailed info about pokemon
export const detailedView = (pokemon) => ({type: DETAILED_VIEW, pokemon})

//request detailed info about pokemons
export const detailedLoader = (pokemons) => {
	return (dispatch) => {
		let outMass = [];
		for (let i = 0; i < pokemons.length; i++) {
			axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemons[i].name}/`)
				.then(response => {

					return {
						id: response.data.id,
						img: response.data.sprites.front_default,
						name: response.data.name,
						types: response.data.types.map(type => type.type.name),
						detailed: {
							speed: response.data.stats[0].base_stat,
							attack: response.data.stats[4].base_stat,
							defense: response.data.stats[3].base_stat,
							spAttack: response.data.stats[2].base_stat,
							spDefense: response.data.stats[1].base_stat,
							hp: response.data.stats[5].base_stat,
							weight: response.data.weight,
							totalMoves: response.data.moves.length
						}
					}
				})
				.then(response => {
					outMass = [...outMass, response];
					if (pokemons.length === outMass.length) {
						dispatch(pokemonsSaver(outMass))
						dispatch(isFetching(false))
					}
				})
		}


	}
}

//url saver for button load more from api response
export const urlSaver = (url) => ({type: URL_SAVER, url})

//loading chunk of 12 pokemons
export const chunkLoader = (url) => {
	return (dispatch) => {
		dispatch(isFetching(true))
		axios.get(url)
			.then(response => {
				dispatch(urlSaver(response.data.next))
				dispatch(detailedLoader(response.data.results))
			})
	}
}
