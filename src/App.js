import React,{ useState, useEffect  }from 'react';
import Transactions from './transactions';



function App() {
  const [data,setData]=useState([]);

  const getData=()=>{
    try{
      fetch('data.json'
      ,{
        headers : { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
         }
      }
      )
      .then(function(response){
        console.log(response)
        return response.json();
      })
      .then(function(myJson) {
        console.log(myJson);
        setData(myJson);
      });
    }
    catch(error) {
      console.log("error message: " + error);
    }
  }

  useEffect(()=>{
    getData()
  },[])

  return (
    <div>
        <h1 style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>Transactions in the past three months</h1>
        <Transactions transactionList = {data}/>
    </div>
  );
}

export default App;
