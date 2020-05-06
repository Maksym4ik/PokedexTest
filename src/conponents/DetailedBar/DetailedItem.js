import React from "react";
import s from "./DetailedBar.module.scss"

const DetailedItem = (props) => {

	const outTypes = props.types.map(type => <p key={type}>{type}</p>)
	return <div className={s.container}>
		<img className={s.img} src={props.img} alt={props.name}/>
		<p className={s.name}>{`${props.name} #${props.id}`}</p>
		<div className={s.contentInfo}>
			<div className={s.row}><span className={s.type}>Type</span><span className={s.types}>{outTypes}</span></div>
			<div className={s.row}><span className={s.type}>Attack</span><span>{props.detailed.attack}</span></div>
			<div className={s.row}><span className={s.type}>Defense</span><span>{props.detailed.defense}</span></div>
			<div className={s.row}><span className={s.type}>HP</span><span>{props.detailed.hp}</span></div>
			<div className={s.row}><span className={s.type}>SP Attack</span><span>{props.detailed.spAttack}</span></div>
			<div className={s.row}><span className={s.type}>SP Defense</span><span>{props.detailed.spDefense}</span></div>
			<div className={s.row}><span className={s.type}>Speed</span><span>{props.detailed.speed}</span></div>
			<div className={s.row}><span className={s.type}>Weight</span><span>{props.detailed.weight}</span></div>
			<div className={s.row}><span className={s.type}>Total moves</span><span>{props.detailed.totalMoves}</span></div>
		</div>
	</div>
}

export default DetailedItem
