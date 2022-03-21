import React from "react"
import style from "./style.module.css"
import { useContext } from "react"
import { ContextMenu } from "../../contexts/contextMenu"
import { ContextTheme } from "../../contexts/contextTheme"
import { ButtonTheme } from "../buttoTheme"
import { ListLeague } from "../listLeague"

export function MenuActive() {
	const { theme } = useContext(ContextTheme)
	const { active } = useContext(ContextMenu)
	return (
	<div className={`${style.container} ${style.[theme]} ${style.[active]}`}>
<div>
<ButtonTheme /> 
</div>
<ListLeague />
</div>
)
}
