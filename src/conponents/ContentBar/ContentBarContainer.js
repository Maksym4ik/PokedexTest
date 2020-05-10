import React from "react";
import ContentBar from "./ContentBar";
import {connect} from "react-redux";
import {chunkLoader, detailedView, isDetailedListener} from "../../redux/loaderReducer";

class ContentBarApi extends React.Component {
	//loading first chunk of poke
	componentDidMount() {
		this.props.chunkLoader(this.props.nextUrl)
	}

	render() {
		return <ContentBar {...this.props}/>
	}
}
//state from redux-store (pokemons body, loadUrl, loadingChecking, detailedChecking)
const mapStateToProps = (state) => {
	return {
		pokemons: state.loader.pokemons,
		nextUrl: state.loader.nextUrl,
		isFetching: state.loader.isFetching,
		isDetailed: state.loader.isDetailed,
	}
}

// AC - (PokemonsLoader, detailed info in state, detailedCheckerChanger)
const mapDispatchToProps = {
	chunkLoader,
	detailedView,
	isDetailedListener,
}

//connecting state and AC's
const ContentBarContainer = connect(mapStateToProps, mapDispatchToProps)(ContentBarApi)
//exports for App
export default ContentBarContainer
