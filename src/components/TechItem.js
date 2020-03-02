import React from 'react';
import '../App.css';

function TechItem({ tech, onDelete }) {
    return(
        <li>
            <button type="button" className="button" onClick={onDelete} style={{backgroundColor: 'darkred', width: 30, height: 30, padding: 5, marginRight: 20, borderRadius: 1000}}>X</button>
            {tech}
        </li>  
    )
}

export default TechItem;