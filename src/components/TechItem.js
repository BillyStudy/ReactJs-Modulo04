import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';

function TechItem({ tech, onDelete }) {
    return(
        <li>
            <button type="button" 
                    className="button" 
                    onClick={onDelete} 
                    style={{backgroundColor: 'darkred', width: 25, height: 25, padding: 5, marginRight: 20, borderRadius: 1000}}       
            />
            {tech}
        </li>  
    )
}

TechItem.defaultProps = {
    tech: 'Oculto',
};

TechItem.prototype = {          //yarn add prop-types ===> Reconhece o tipo de propriedade à ser passada
    tech: PropTypes.string,
    onDelete: PropTypes.func.isRequired
};

export default TechItem;