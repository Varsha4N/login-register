
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import LoginPage from './pages/login/loginPage';
import RegisterPage from './pages/register/registerPage';
import HomePage from './pages/home/homePage';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<LoginPage/>}/>
          <Route path='/login' element={<LoginPage/>}/>

          <Route path='/register' element={<RegisterPage/>}/>

          <Route path='/home' element={<HomePage/>}/> 
        </Routes>
      </Router>
    </div>
  );
}

export default App;
