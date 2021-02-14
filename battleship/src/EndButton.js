import React from 'react';
import './DragNDrop.css';
import ReactDOM from 'react-dom';


export default class Square extends React.Component {
    constructor() {
        super();
        this.state = {
          value: 0,
          message: 'default click state'
        }
      }
     
      onClick = () => {
        this.setState({
          value: this.state.value + 1
        });
        
        this.setState({
          message: `click-state ${this.state.value}`
        });
      }
      
       onClickfn = () => {
        this.setState((prevState,props) => ({
          value: prevState.value + 1
        }));
        
        this.setState((prevState,props) => ({
          message: `click-state ${prevState.value}`
        }),() => {
          console.log(`After update: ${this.state.value}`));
        });      
        
      }
      
     
      render(){
        return( 
          <div>
            <div>render -> state={this.state.value} - 
                {this.state.message}
            </div>
            <button onClick={this.onClick}>Click-setState</button>
            <button onClick={this.onClickfn}>Click-setState fn</button>
          </div>
        );
      }
   }
   
   ReactDOM.render(
     <App />, 
     document.getElementById("root")
   );