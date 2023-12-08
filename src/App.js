import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Employee from './employee';
import AddEmployee from './addEmployee';
import GetEmployee from './getEmployee';
import UpdateEmployee from './updateEmployee';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/' element={<Employee />} />
          <Route exact path='/add' element={<AddEmployee />} />
          <Route exact path='/get/:employeeid' element={<GetEmployee/>}/>
          <Route exact path='/update/:employeeid' element={<UpdateEmployee/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
