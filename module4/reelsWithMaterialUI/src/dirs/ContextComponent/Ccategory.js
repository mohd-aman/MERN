import React,{useContext} from 'react';
import ThemeContext from '../ThemeContext';

function Ccategory() {
    const value = useContext(ThemeContext);
    const catStyle = {
        height:'20%',
        width:'100%',
        backgroundColor:`${value.theme=='Dark'?'grey':'black'}`,
        margin: '0 auto',
    }
    const pchStyle ={
        color:`${value.theme=='Dark'?'black':'white'}`
    }
    console.log('Ccategory render');
    return (
        <div className='category' style={catStyle}>
            <h1 style={pchStyle}>
                This is the Category Component
            </h1>
           
        </div>
    )
}

export default Ccategory
