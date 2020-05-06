import React from "react";
import DetailedBar from "./DetailedBar";

class DetailedBarApi extends React.Component {
	render() {
		return <DetailedBar />
	}
}

const mapStateToProps = (state) => {
	return{

	}
}

const mapDispatchToProps = {

}


const DetailedBarContainer = conntect(mapStateToProps, mapDispatchToProps)(DetailedBarApi)
export default DetailedBarContainer
