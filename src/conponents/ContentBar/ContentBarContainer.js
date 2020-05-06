import React from "react";
import ContentBar from "./ContentBar";
import {connect} from "react-redux";
import {chunkLoader, detailedView} from "../../redux/loaderReducer";

class ContentBarApi extends React.Component {

	componentDidMount() {
		this.props.chunkLoader(this.props.nextUrl)
	}

	render() {
		return <ContentBar {...this.props}/>
	}
}

const mapStateToProps = (state) => {
	return {
		pokemons: state.loader.pokemons,
		nextUrl: state.loader.nextUrl,
		isFetching: state.loader.isFetching
	}
}

const mapDispatchToProps = {
	chunkLoader,
	detailedView
}


const ContentBarContainer = connect(mapStateToProps, mapDispatchToProps)(ContentBarApi)
export default ContentBarContainer
