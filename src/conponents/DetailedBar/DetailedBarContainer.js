import React from "react";
import {connect} from "react-redux";
import DetailedItem from "./DetailedItem";

class DetailedBarApi extends React.Component {
	render() {
		return <DetailedItem {...this.props.pokemonDetailed}/>
	}
}

const mapStateToProps = (state) => {
	return{
		pokemonDetailed: state.loader.pokemonDetailed
	}
}

const mapDispatchToProps = {

}


const DetailedBarContainer = connect(mapStateToProps, mapDispatchToProps)(DetailedBarApi)
export default DetailedBarContainer
