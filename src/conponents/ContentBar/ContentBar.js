import React from "react";
import ItemBar from "./ItemBar";
import s from "./ContentBar.module.scss"


const ContentBar = (props) => {
	//onClick dispatcher for loading new pokemons
	const loadMore = () => {
		props.chunkLoader(props.nextUrl)
	}
	//mapping stated pokemons for output
	const outputItem = props.pokemons.map(pokemon => <ItemBar key={pokemon.id}
																														detailedView={props.detailedView}
																														pokemon={pokemon}/>)

	return <div className={s.mainContainer}>
		<div className={s.container}>
			{outputItem}
		</div>
		<button className={s.btnLoadMore} onClick={loadMore}>
			{props.isFetching ? "Loading..." : "Load More"}
		</button>
	</div>
}

export default ContentBar
