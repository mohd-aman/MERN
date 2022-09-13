import React,{useContext} from 'react'
import ThemeContext from '../ThemeContext';
import Cdropdown from './Cdropdown';
import Ccategory from './Ccategory';
function Content() {
    const value = useContext(ThemeContext);
    console.log(value);
    const cStyle = {
        height:'30vh',
        width:'90vw',
        backgroundColor:`${value.theme=='Dark'?'black':'grey'}`,
        margin: '0 auto',
        marginTop:'5%'
    }
    const pStyle ={
        color:`${value.theme=='Dark'?'white':'black'}`
    }  
    console.log('Content render');
    return (
        <div className='content' style={cStyle}>   
        <h2 style={pStyle}>Content</h2> 
        <Cdropdown/>
               
                 <Ccategory/>

        </div>
    )
}

export default Content
