import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import download from 'downloadjs';

export default function ViewExpense() {
  const [expense, setExpense] = useState({
    id: '',
    category: '',
    description: '',
    amount: '',
  });

  const { id } = useParams();

  useEffect(() => {
    loadExpense();
  }, []);

  const loadExpense = async () => {
    const result = await axios.get(`http://expense-tracker-backend:8080/expense/${id}`);
    setExpense(result.data);
  };

  const downloadReceipt = () => {
    const receipt = {
        id: expense.id,
        category: expense.category,
        description: expense.description,
        amount: expense.amount,
      };
    
      const receiptJSON = JSON.stringify(receipt, null, 2);
    
      download(receiptJSON, `receipt_${expense.id}.json`, 'application/json');
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-4 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">View Expense</h2>

          <div className="card">
            <div className="card-header">
              Details of the Expense id: {expense.id}
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <b>Category:</b>
                  {expense.category}
                </li>
                <li className="list-group-item">
                  <b>Description:</b>
                  {expense.description}
                </li>
                <li className="list-group-item">
                  <b>Amount:</b>
                  {expense.amount}
                </li>
              </ul>
            </div>
          </div>
          <div className="my-2">
            <button className="btn btn-primary mx-2" onClick={downloadReceipt}>
              Print
            </button>
            <Link className="btn btn-primary mx-2" to="/">
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
