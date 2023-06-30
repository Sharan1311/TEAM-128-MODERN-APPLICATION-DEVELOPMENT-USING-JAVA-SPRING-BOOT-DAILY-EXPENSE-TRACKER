import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Home.css';
import {Link, useParams} from "react-router-dom";

export default function Home() {
  const [expenses, setExpenses] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  const {id} = useParams();

  useEffect(() => {
    loadExpenses();
  }, []);

  const loadExpenses = async () => {
    const result = await axios.get('http://localhost:8080/expenses');
    setExpenses(result.data);
    calculateTotalAmount(result.data);
  };

  const deleteExpense = async (id) => {
    await axios.delete(`http://localhost:8080/expense/${id}`)
    loadExpenses()
  }

  const calculateTotalAmount = (expenses) => {
    const total = expenses.reduce((sum, expense) => sum + expense.amount, 0);
    setTotalAmount(total);
  };

  return (
    <div className='container'>
      <div className='py-4'>
        <table className='table border shadow'>
          <thead>
            <tr>
              <th scope='col'>Id</th>
              <th scope='col'>Category</th>
              <th scope='col'>Description</th>
              <th scope='col'>Amount in INR</th>
              <th scope='col' className='text-center'>Action</th> {/* Added 'text-center' class */}
            </tr>
          </thead>
          <tbody>
            {expenses.map((expense, index) => (
              <tr key={index}>
                <th scope='row'>{index + 1}</th>
                <td>{expense.category}</td>
                <td>{expense.description}</td>
                <td>Rs {expense.amount}</td>
                <td className='text-center'>
                  <Link className="btn btn-primary mx-2" to={`/viewexpense/${expense.id}`}>View Expense</Link>
                  <Link className="btn btn-outline-primary mx-2" to={`/editexpense/${expense.id}`}>Edit Expense</Link>
                  <button className='btn btn-danger mx-2' onClick={()=>deleteExpense(expense.id)}>Delete Expense</button>
                </td>
              </tr>
            ))}
            <tr className='total-row'>
              <th scope='row' colSpan={3}></th>
              <td colSpan={2}>Total: Rs {totalAmount}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}