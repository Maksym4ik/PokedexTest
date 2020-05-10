import React from "react"
import DetailedItem from "./DetailedItem";
import s from "./DetailedBar.module.scss"

const DetailedBar = (props) => {


	return <div className={s.mainContainer}>
		{props.isDetailed ? <DetailedItem isDetailedListener={props.isDetailedListener} {...props.pokemonDetailed} /> : <></>}
	</div>
}

//exports for DetailedBarContainer
export default DetailedBar
