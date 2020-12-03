import React, {Component} from 'react';
import './Form.css'
class Form extends Component{
  constructor(props){
    super(props)
    this.state ={}
  }
  // (e) => this.setState({ tip: e.target.value })
  handleChange(e){
    const name = e.target.name
    const value = e.target.value
    this.handleChildchange(name,value)
  }
  handleAddOne(e){
    const name = e.target.name
    const value = parseInt(this.props[name])+1
    this.handleChildchange(name,value)
  }
  handleMinusOne(e){
    const name = e.target.name
    const value = parseInt(this.props[name])-1
    this.handleChildchange(name,value)
  }

  handleChildchange(name,value){
    if (this.props.onChange) {
      this.props.onChange({name:name,value:value});
    }
  }

  render() {
    return(
    <form className="Form">
      <div className='row'>
        <label>Bill</label>
          <div className="user-input">
            <button onClick={(e) => { this.handleAddOne(e);}} type="button" name="bill" className="add-one">+</button>
            <input 
              type="number"
              name="bill"
              value={this.props.bill}
              onChange={(e)=>{this.handleChange(e);}}
            />
            <button onClick={(e) => { this.handleMinusOne(e); }} type="button" name="bill" className="minus-one">-</button>
          </div>
      </div>
      <div className='row'>
        <label>Tip %</label>
        <div className="user-input">
					<button onClick={(e) => { this.handleAddOne(e); }} type="button" name="tip" className="add-one">+</button>
            <input 
              type="number"
              name="tip"
              value={this.props.tip}
              onChange={(e)=>{this.handleChange(e);}}
            />
          <button onClick={(e) => { this.handleMinusOne(e); }} type="button" name="tip" className="minus-one">-</button>
       </div>
      </div>
      <div className='row'>
        <label>
            Number of people</label>
            <div className="user-input">
					  <button onClick={(e) => { this.handleAddOne(e); }} type="button" name="numOfPeople" className="add-one">+</button>
              <input 
                type="number"
                name="numOfPeople"
                min="1"
                value={this.props.numOfPeople}
                onChange={(e)=>{this.handleChange(e);}}
              />
            <button onClick={(e) => { this.handleMinusOne(e); }} type="button" name="numOfPeople" className="minus-one">-</button>
       </div>
      </div>
    </form>
    )
  }
}


export default Form;