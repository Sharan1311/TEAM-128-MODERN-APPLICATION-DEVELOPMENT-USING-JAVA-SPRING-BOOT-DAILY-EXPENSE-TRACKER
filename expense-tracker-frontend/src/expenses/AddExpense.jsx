import React, {useState } from 'react';
import axios from "axios";
import {Link,useNavigate} from "react-router-dom";


export default function AddExpense() {

    let navigate=useNavigate();


    const[expense,setExpense]=useState({

        category:"",
        description:"",
        amount:""

    })

    const { category,description,amount}=expense

    const onInputChange=(e) => { 

        setExpense({...expense,[e.target.name]: e.target.value});


    };

    const onSubmit =async (e) => {

        e.preventDefault();
        await axios.post("http://expense-tracker-backend:8080/expense",expense)
        navigate("/")


    };



  return (
    <div className="container">
        <div className="row">
            <div className="col-md-6 offset-md-4 border rounded p-4 mt-2 shadow ">
               <h2 className="text-center m-4">Add Expense</h2>
               <form onSubmit={(e)=>onSubmit(e)}> 
               <div className="mb-3">
                <label htmlFor="Category" className="form-label">
                    Category
                </label>
                <input type="text" className="form-control" placeholder=" Enter the Category"
                name="category"
                value={category}
                onChange={(e)=>onInputChange(e)}/>
               </div>
               <div className="mb-3">
                <label htmlFor="Description" className="form-label">
                    Description
                </label>
                <input type="text" className="form-control" placeholder=" Enter the Description"
                name="description"
                value={description}
                onChange={(e)=>onInputChange(e)}/>
               </div>
               <div className="mb-3">
                <label htmlFor="Amount" className="form-label">
                    Amount
                </label>
                <input type="text" className="form-control" placeholder=" Enter the Amount"
                name="amount"
                value={amount}
                onChange={(e)=>onInputChange(e)}/>
               </div>
               <button type="submit" className="btn btn-outline-success">Submit</button>
               <Link className="btn btn-outline-danger mx-2" to="/">Cancel</Link>
            </form>
            </div>
        </div>

    </div>
  )
}

