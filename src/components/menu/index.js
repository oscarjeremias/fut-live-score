import React from "react"
import { ContextTheme } from "../../contexts/contextTheme"
import { ContextMenu } from "../../contexts/contextMenu"
import { useContext } from "react"

import style from "./style.module.css"

export function Menu() {
	const { theme } = useContext(ContextTheme)
	const { active, setActive } = useContext(ContextMenu)
	return (
		<menu className={`${style.menu} ${style.[theme]} ${style.[active]}`} 
	onClick={() => {
			const verificar = active === "" ? "active" : ""
			setActive(verificar)
			}}>
			<div></div>
			<div></div>
			<div></div>
		</menu>
	)
}

