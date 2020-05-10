import React from "react";
import {connect} from "react-redux";
import {isDetailedListener} from "../../redux/loaderReducer";
import DetailedBar from "./DetailedBar";

class DetailedBarApi extends React.Component {

	render() {
		return <DetailedBar {...this.props} isDetailedListener={this.props.isDetailedListener}/>
	}
}

// state from redux-store (detailed info about poke, isDetailed - checker)
const mapStateToProps = (state) => {
	return {
		pokemonDetailed: state.loader.pokemonDetailed,
		isDetailed: state.loader.isDetailed,
	}
}

//AC - (Checker for detailedView info)
const mapDispatchToProps = {
	isDetailedListener
}

//connecting state and AC's
const DetailedBarContainer = connect(mapStateToProps, mapDispatchToProps)(DetailedBarApi)

export default DetailedBarContainer
