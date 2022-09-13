import React,{useContext,useState} from 'react'
import ThemeContext from '../ThemeContext';
import Dropdown from './Dropdown';
import Category from './Category';
function Navbar() {
    const value = useContext(ThemeContext);
    // console.log(value);
  
    const navStyle = {
        height:'30vh',
        width:'90vw',
        backgroundColor:`${value.theme=='Dark'?'black':'grey'}`,
        margin: '0 auto',
        marginTop:'5%'
    }
    const pStyle ={
        color:`${value.theme=='Dark'?'white':'black'}`
    }
    console.log('Nav render');
    return (
        <div className='navbar' style={navStyle}>
            <h2 style={pStyle}>
                Navbar
                </h2> 
                 <Dropdown/>
                 <Category/>
                
                
        </div>
    )
}

export default Navbar
