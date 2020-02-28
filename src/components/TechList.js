import React, { Component } from 'react';

export default class TechList extends Component{
    
    state = {
        techs: ['NodeJS', 'ReactJS', 'React-Native']
    }
    
    render(){
        return(
            <ul>
                <li>NodeJS</li>
                <li>ReactJS</li>
                <li>React-Native</li>
            </ul>
        )
    }
}

