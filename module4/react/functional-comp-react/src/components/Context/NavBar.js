import { useContext } from "react"
import "./theme.css"
import {ThemeContext} from "./ThemeChanger"


function NavBar(){
    return(<>
        <div>NavBar</div>
        <Options></Options>
        <Options></Options>
        <Options></Options>
        <div>----------------------------------------------</div>
        </>)
}

function Options(){
    let CTheme = useContext(ThemeContext)
    return <div className={CTheme == 'light'?'light':'dark'}>Options</div>
}

export default NavBar