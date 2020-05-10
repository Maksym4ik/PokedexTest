import React, {useState} from "react";
import ItemBar from "./ItemBar";
import s from "./ContentBar.module.scss"
import {withGetScreen} from 'react-getscreen'


const ContentBar = (props) => {
	//local state for checking filter type
	const [filterT, setFilterT] = useState(null);

	//activate filter mapping by type of pokemon
	const changeFilter = (filter) => {
		setFilterT(filter)
	}

	//onClick dispatcher for loading new pokemons
	const loadMore = () => {
		props.chunkLoader(props.nextUrl)
		props.isDetailedListener(false)
	}


	//mapping stated pokemons for output  --- first if ByFilter --- second if noFilter
	let counter = 0;
	let outputItem = null;
	if (filterT) {

		outputItem = props.pokemons.map(pokemon => {
			return pokemon.types.map(type => {
				if (type === filterT) {
					counter += 1;
					return <ItemBar changeFilter={changeFilter}
													key={pokemon.id}
													detailedView={props.detailedView}
													pokemon={pokemon}
													isDetailedListener={props.isDetailedListener}/>
				} else {
					return undefined
				}
			})
		})
	} else {
		outputItem = props.pokemons.map(pokemon => {
			return <ItemBar changeFilter={changeFilter}
											key={pokemon.id}
											detailedView={props.detailedView}
											pokemon={pokemon}
											isDetailedListener={props.isDetailedListener}/>
		})
	}

	//filter type button to clear filter
	const filterType = filterT ? <div className={s.filterType}>
		<p>{`${counter} ${filterT}`}</p>
		<div onClick={() => {
			setFilterT(null)
		}} className={s.close}><span>x</span></div>
	</div> : <></>

	//check for mobile
	let body = null, btn = null;
	if (!props.isMobile() || !props.isDetailed) {
		body = <div className={s.container}>
			{outputItem}
		</div>
		btn=<button disabled={props.isFetching} className={s.btnLoadMore} onClick={loadMore}>
			{props.isFetching ? "Loading..." : "Load More"}
		</button>
	}

	//output content from api
	return <div className={s.mainContainer}>
		{filterType}
		{btn}
		{body}
	</div>
}


//HOC for checking type of device by screen  // export for ContentBarContainer
export default withGetScreen(ContentBar)
