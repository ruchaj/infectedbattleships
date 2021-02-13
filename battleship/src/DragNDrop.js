import React from 'react';
import ReactDOM from 'react-dom';
import '.index.css';
import AppDragDropDemo from './AppDragDropDemo';
ReactDOM.render(<AppDragDropDemo />,     document.getElementById("root"));
import React, { Component } from 'react';
export default class AppDragDropDemo extends Component {  render () {    return (      <div className="container-drag">        DRAG & DROP DEMO      </div>    );  }}
export default class AppDragDropDemo extends Component {      
    state = {            
        tasks: [{name:"Learn Angular",             
        category:"wip",              
        bgcolor: "yellow"},                        
        {name:"React",              
        category:"wip",              
        bgcolor:"pink"},                        
        {name:"Vue",              
        category:"complete",              
        bgcolor:"skyblue"}                
    ]}
    render () {    
        return (      
        <div className="container-drag">        
        DRAG & DROP DEMO      </div>    
        );  
    }
}

