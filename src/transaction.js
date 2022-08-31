import React from 'react';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

const Transaction = (props)=> {
  const transaction = props.transaction;
    
  const calculateReward =(transaction)=>{
    let reward = 0;
      if(transaction > 100) {
        reward = (transaction - 100) * 2 + 50;
        props.addToTotal(reward);
      }
      else if (transaction >50) {
        reward = (transaction - 50);
        props.addToTotal(reward);
      }
      return reward;
  }

  return (
      <TableRow>
          <TableCell style={{ width: 100 }}>{props.date}</TableCell>
          <TableCell style={{ width: 100 }}>${transaction}</TableCell>
          <TableCell style={{ width: 100 }}>{calculateReward(transaction)}</TableCell>
      </TableRow>            
  );
}
  
export default Transaction;
  