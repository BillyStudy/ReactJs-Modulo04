import React, { Component } from 'react';
import '../App.css';

export default class TechList extends Component{
    
    state = {
        newTech:'',
        techs: ['NodeJS', 'ReactJS', 'React-Native']
    }
    handleInputChange = e => {
        this.setState({ newTech: e.target.value });
    }

    handleSubmit = e => {
        e.preventDefault();
        this.setState({ techs: [ ...this.state.techs, this.state.newTech]});
        this.setState({ newTech: ''});
    }

    handleDelete = (tech) => {
        this.setState({ techs: this.state.techs.filter(t => t !== tech)})
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit} className="formList">
                <ul className="list">
                    {this.state.techs.map(tech => 
                        <li key={tech}>
                            <button type="button" className="button" onClick={() => this.handleDelete(tech)} style={{backgroundColor: 'darkred', width: 30, height: 30, padding: 5, marginRight: 20, borderRadius: 1000}}>X</button>
                            {tech}
                        </li>  
                    )}
                </ul>
                <input type="text" onChange={this.handleInputChange} maxLength={20} value={this.state.newTech} />
                <button type="submit" className="button">Adicionar</button>
            </form>
        )
    }
}

