import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./layout/Navbar";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddExpense from './expenses/AddExpense';
import EditExpense from './expenses/EditExpense';
import ViewExpense from './expenses/ViewExpense';
function App() {
    return (
        <div className="App">
            <Router>
            <Navbar/>
            <Routes>

                <Route excat path="/" element={<Home/>}/>
                <Route excat path="/addexpense" element={<AddExpense/>}/>
                <Route excat path = "/editexpense/:id" element={<EditExpense/>}/>
                <Route excat path = "/viewexpense/:id" element={<ViewExpense/>}/>
            </Routes>


            </Router>

        </div>
    );
}

export default App;