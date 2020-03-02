import React, { Component } from 'react';
import '../App.css';

import TechItem from './TechItem';

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
        if (this.state.newTech !== '') {
            this.setState({ techs: [ ...this.state.techs, this.state.newTech]});
            this.setState({ newTech: ''});
        }
        
    }

    handleDelete = (tech) => {
        this.setState({ techs: this.state.techs.filter(t => t !== tech)})
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit} className="formList">
                <ul className="list">
                    {this.state.techs.map(tech => <TechItem tech={tech} key={tech} onDelete={() => this.handleDelete(tech)}/>)}
                </ul>
                <input type="text" onChange={this.handleInputChange} maxLength={20} value={this.state.newTech} />
                <button type="submit" className="button">Adicionar</button>
            </form>
        )
    }
}

