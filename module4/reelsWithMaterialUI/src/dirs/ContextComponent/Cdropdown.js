import React,{useContext} from 'react'
import ThemeContext from '../ThemeContext';
function Cdropdown() {
    const value = useContext(ThemeContext);
    const dropStyle = {
        height:'20%',
        width:'100%',
        backgroundColor:`${value.theme=='Dark'?'black':'grey'}`,
        margin: '0 auto',
        marginTop:'5%'
    }
    const hStyle ={
        color:`${value.theme=='Dark'?'white':'black'}`
    }
    return (
        <div className='dropdown' style={dropStyle}>
            <h1 style={hStyle}>
                This is dropdown
            </h1>
        </div>
    )
}

export default Cdropdown
