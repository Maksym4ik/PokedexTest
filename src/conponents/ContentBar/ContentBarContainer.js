import React from "react";
import ContentBar from "./ContentBar";

class ContentBarApi extends React.Component {
	render() {
		return <ContentBar />
	}
}

const mapStateToProps = (state) => {
	return{

	}
}

const mapDispatchToProps = {

}


const ContentBarContainer = conntect(mapStateToProps, mapDispatchToProps)(ContentBarApi)
export default ContentBarContainer
