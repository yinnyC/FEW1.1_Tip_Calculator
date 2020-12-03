import React, {Component} from 'react';
import './Display.css';

class Display extends Component{
  constructor(props){
    super(props)
    this.state ={
    }
  }
  getTipAmount(){
    const bill = parseInt(this.props.bill)
    const tip = parseInt(this.props.tip)
    const numOfPeople = parseInt(this.props.numOfPeople)
    const tipAmount = parseFloat(((bill * (tip / 100)) / numOfPeople).toFixed(2))	
    const totalAmount = (tipAmount + bill).toFixed(2);
    return (
      <div className="Display">
      <div className="row">
        <label>Tip</label>
        <p id="tip-amount">${tipAmount}</p>
      </div>
      <div className="row">
        <label>Total</label>
        <h4 id="total-amount">${totalAmount}</h4>
      </div>
    </div>
    )
  }
  render() {
    return(
      <div>
        {this.getTipAmount()}
      </div>
      
    )
  }
}


export default Display;