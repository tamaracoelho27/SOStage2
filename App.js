import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import PersonalInfo from './components/PersonalInfo';
import Dashboard from './components/dashboard';

function App() {
  return (
  <Router>
    <Routes>
      <Route>
        <Route path="/" element={<SignUp />} />
        <Route path="/personalinfo" element={<PersonalInfo />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>
    </Routes>
  </Router>

  );
}

export default App;
