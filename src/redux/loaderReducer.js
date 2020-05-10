import * as axios from "axios"

//Action Types
const URL_SAVER = "URL_SAVER"
const POKEMONS_SAVER = "POKEMONS_SAVER"
const DETAILED_VIEW = "DETAILED_VIEW"
const IS_FETCHING = "IS_FETCHING"
const IS_DETAILED = "IS_DETAILED"

//preload state for correct working mapping and spread
const initialState = {
	pokemons: [],
	pokemonDetailed: {},
	isFetching: false,
	isDetailed: false,
	nextUrl: "http://pokeapi.co/api/v2/pokemon/?limit=12"

}

//reducer body with state actions
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
		case IS_DETAILED:
			return {
				...state,
				isDetailed: action.bool
			}
		default:
			return state
	}
}

//export for redux-store
export default loaderReducer

//isFetching loader information (true/false)
const isFetching = (bool) => ({type: IS_FETCHING, bool})
//url saver for button load more from api response
const urlSaver = (url) => ({type: URL_SAVER, url})
//pokemonsSaver to state from api response
const pokemonsSaver = (chunk) => ({type: POKEMONS_SAVER, chunk})
//detailedBar component listener
export const isDetailedListener = (bool) => ({type: IS_DETAILED, bool})
// onClick action create for showing detailed info about pokemon
export const detailedView = (pokemon) => ({type: DETAILED_VIEW, pokemon})

//request detailed info about pokemons, sorted info and dispatch to state
export const detailedLoader = (pokemons) => {
	return (dispatch) => {
		let outMass = [];
		axios.all([...pokemons])
			.then(axios.spread((...responses) => {
				responses.forEach(response => {
					outMass = [...outMass, {
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
					}]
				})
				dispatch(pokemonsSaver(outMass))
				dispatch(isFetching(false))
			}))

	}
}

//loading chunk of 12 pokemons
export const chunkLoader = (url) => {
	return (dispatch) => {
		let outMass = []
		dispatch(isFetching(true))
		axios.get(url)
			.then(response => {
				dispatch(urlSaver(response.data.next))
				response.data.results.forEach(result => {
					outMass = [...outMass, axios.get(result.url)]
				})
				dispatch(detailedLoader(outMass))
			})
	}
}

