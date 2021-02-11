/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import React from 'react';

export class Todo extends React.Component {

    constructor(props) {
        super(props);
    }   

    render() {
        return (  
            <h2> {this.props.text} {this.props.priority} {this.props.dueDate.toString()} </h2>        
        );

    }

}

