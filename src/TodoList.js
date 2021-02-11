import React from 'react';
import ReactDOM from 'react-dom';
import {Todo} from './Todo'

export class TodoList extends React.Component{
    render(){
        const numbers = this.props.numbers;
        const listItems = numbers.map((number) => 
            <Todo text={number.text} priority={number.priority} dueDate={number.dueDate} />   
        );
    return (
       <ul>{listItems}</ul>
    );
    }
}