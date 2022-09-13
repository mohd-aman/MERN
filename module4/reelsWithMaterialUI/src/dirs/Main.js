import React,{useState} from 'react'
import Navbar from './Components/Navbar';
import Content from './Components/Content';
import ThemeContext from '../React_Javascript/Lectures/4. Reels/reels/src/ThemeContext';
function Main() {
    const [ntheme,setnTheme] =useState('Light')
    return (
        <div>
            <ThemeContext.Provider value={{theme:ntheme,chfn:setnTheme}}>
            <Navbar/>
            <Content/>
            </ThemeContext.Provider>
         
        </div>
    )
}
export default Main
