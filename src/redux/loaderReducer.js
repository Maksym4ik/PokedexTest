const initialState = {
	pokemons: [
		{
			id: 1,
			name: 'bulba',
			types: ["poison", "flying"],
			detailed: {
				speed:1,
				attack: 2,
				defense: 3,
				spAttack: 4,
				spDefense: 5,
				hp: 6,
				weight: 7,
				totalMoves: 8
			}
		}
	],
	pokemonDetailed: {
		id: 1,
		name: 'bulba',
		types: ["poison", "flying"],
		detailed: {
			speed:1,
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

}

let loaderReducer = (state = initialState, action) => {

	switch (action.type) {

		default:
			return state
	}
}

export default loaderReducer
