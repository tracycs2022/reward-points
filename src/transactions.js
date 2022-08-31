import React,{ useState, useEffect  }from 'react';
import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import Transaction from './transaction';

const Transactions = (props)=> {
    const list = props.transactionList;
    let total = 0;
    const addToTotal = (point) =>{
        total += point;
        console.log(total);
    }
    return (
      <div>
          <TableContainer  sx={{ maxHeight: 440 }} >
                <Table stickyHeader>
                    <TableHead>
                        <TableRow>
                            <TableCell style={{ width: 100 }}>Date</TableCell>
                            <TableCell style={{ width: 100 }}>Transaction Amount</TableCell>
                            <TableCell style={{ width: 100 }}>Reward Points</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {list.map(item => {
                           return <Transaction key = {item.date} 
                                               date = {item.date} 
                                               transaction = {item.transaction}
                                               addToTotal = {(point)=>addToTotal(point)}/>
                                               
                        })}  
                    </TableBody>
                 </Table>
          </TableContainer>
          <button onClick ={()=>alert("Total points: " + total)}>Show total points</button>
      </div>
    );
  }
  
export default Transactions;
  