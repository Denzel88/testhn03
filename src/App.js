
import './App.css';
import {Home} from './Home';
import {Department} from './Department';
import {Employee} from './Employee';
import {BrowserRouter as Router, Routes,Link, Route} from 'react-router-dom';



function App() {
  return (

  <Router>
    <div className="App container">
      <h3 className="d-flex justify-content-center m-3">

         ReactJS Frontend
      </h3>
      <nav className="navbar navbar-expand-sm bg-light navbar-dark">
          <ul className="navbar-nav" >
              <li className="nav-item- m-1">
                <Link className="btn btn-light btn-outline-primary" to="/Home">
                    Home
                </Link>
              </li> 
              <li className="nav-item- m-1">
                <Link className="btn btn-light btn-outline-primary" to="/Department">
                    Department
                </Link>
              </li> 
              <li className="nav-item- m-1">
                <Link className="btn btn-light btn-outline-primary" to="/Employee">
                    Employee
                </Link>
              </li> 
          </ul>
      </nav>

      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/Department' element={<Department/>}/>
        <Route path='/Employee' element={<Employee/>}/>
      </Routes>
    </div>

  </Router>
  );
}

export default App;
