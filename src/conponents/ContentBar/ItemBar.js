import React from "react"
import s from "./ContentBar.module.scss"
import "./itemsColor.css"

const ItemBar = (props) => {
	return <div className={s.itemContainer}>
		<img onClick={() => {props.detailedView(props.pokemon)}} className={s.img} src={props.pokemon.img} alt=""/>
		<p className={s.name}>{props.pokemon.name}</p>
		<div className={s.types}>
			{props.pokemon.types.map(type => <p key={type} className={type}>{`${type}`}</p>)}
		</div>
	</div>

}

export default ItemBar
