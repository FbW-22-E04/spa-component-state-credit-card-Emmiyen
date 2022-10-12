import React from "react"
import CreditCard from "./CreditCard"


function App() {
const bankName = "Big Bank, Inc."
const year ="08/19"
const secCode = 1234
const name = "DANICA YENER"
const creditNumber ={
  p1: 1234,
  p2: 5678,
  p3: 8765,
  p4: 4321,
}


  return (
    <div className="App">
     <CreditCard
      bankName= {bankName} expiryDate= {year} 
      personName={name}
      num={creditNumber} />
    </div>
  );
}

export default App;
