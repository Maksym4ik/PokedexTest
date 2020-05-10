import React from "react"
import s from "./ContentBar.module.scss"
import "./itemsColor.css"

const ItemBar = (props) => {
	//title for image and type
	const title= "click to see detailed info"
	const typeTitle="click for filter by this type"

	//method for view detailed info (dispatch in state info and view panel with info)
	const detailedMode = () => {
		props.detailedView(props.pokemon)
		props.isDetailedListener(true)
	}

	//out - (image with name and id, types with className for styling)
	return <div className={s.itemContainer}>
		<img title={title} onClick={detailedMode} className={s.img} src={props.pokemon.img} alt=""/>
		<p className={s.name}>{props.pokemon.name}</p>
		<div className={s.types}>
			{props.pokemon.types.map(type => <p key={type}
																					title={typeTitle}
																					onClick={() => {props.changeFilter(type)}}
																					className={type}>{`${type}`}</p>)}
		</div>
	</div>

}

//exports for ContentBar
export default ItemBar
