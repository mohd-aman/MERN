import React, { useState } from "react";
import Footer from "./Footer";
import NavBar from "./NavBar";

export const ThemeContext = React.createContext("");

function App(){
    let [theme,setTheme] = useState("light");
    const handleTheme = ()=>{
        if(theme == 'light'){
            setTheme('dark')
        }else{
            setTheme('light')
        }
    }
    return(
        <ThemeContext.Provider value={theme}>
            <button onClick = {handleTheme}>Change Theme</button>
            <NavBar></NavBar>
            <Footer></Footer>
        </ThemeContext.Provider>
    )
}

export default App