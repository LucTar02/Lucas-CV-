import { Link } from "react-router-dom";
import '../App.css';
import { useState } from 'react';
import VemsCV from '../components/VemsCV.jsx'



function Navbar() {
    const [color, setColor] = useState("#282c34");  
    const changeColor = (newColor) => {
        setColor(newColor);
        document.body.style.backgroundColor = newColor;
        // för att sätta en färg så man kan ändra den
    };
    return (
        <div className="Header-head-section">
            <VemsCV namn="Lucas Tärnell"/> 
            {/* Namn på personens cv */}

            <nav>
        <Link to="/" onClick={() => changeColor('#282c34')} className="navLink">Home </Link>
        <Link to="/Kontakt" onClick={() => changeColor('#1d3455')} className="navLink"> Kontakt</Link>
        <Link to="/Projekt" onClick={() => changeColor('#24353e')} className="navLink"> Projekt</Link>
        <Link to="/OmMig" onClick={() => changeColor('#283034')} className="navLink"> Om Mig</Link>
    </nav>
        </div>
    );
}
export default Navbar;