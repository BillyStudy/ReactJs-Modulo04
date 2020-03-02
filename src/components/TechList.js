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

    render(){
        return(
            <form onSubmit={this.handleSubmit} className="formList">
                <ul className="list">
                    {this.state.techs.map(tech => <li key={tech}>{tech}</li>)}
                </ul>
                <input type="text" onChange={this.handleInputChange} maxLength={20} value={this.state.newTech} />
                <button type="submit" className="button">Adicionar</button>
            </form>
        )
    }
}

