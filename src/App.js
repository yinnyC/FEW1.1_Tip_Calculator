import React, {useState} from 'react';
import './App.css';
import Form from "./Components/Form/Form"
import Display from "./Components/Display/Display";
function App() {
  
  const [data,setData] = useState({
    bill:10.00,
    tip:10,
    numOfPeople:1
  })

  const eventhandler = fromChild => {
    const {name,value} = fromChild
    setData({...data,
      [name]:value
    })
  }
  return (
    <div className="App">
      <h1>Tip Calculator</h1>
      <div className="main">
        <Form 
        bill={data.bill}
        tip = {data.tip}
        numOfPeople={data.numOfPeople}
        onChange={eventhandler}/>
        <Display 
        bill={data.bill}
        tip = {data.tip}
        numOfPeople={data.numOfPeople}
        />
      </div>
    </div>
  );
}

export default App;
