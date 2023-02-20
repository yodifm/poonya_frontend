
import 'assets/scss/style.scss'
import LandingPage from 'pages/LandingPage';
import LoginPage from 'pages/LoginPage';
import Dashboard from 'pages/Dashboard';
import Generate from 'pages/Generate';
import FormLogin from 'parts/FormLogin';


import {BrowserRouter as Routes, Route, Link} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" component={LandingPage}></Route>
        <Route exact path="/LoginPage" component={FormLogin}></Route>
        <Route exact path="/Dashboard" component={Dashboard}></Route>
        <Route exact path="/Generate" component={Generate}></Route>

      </Routes>
    </div>
  );
}

export default App;
