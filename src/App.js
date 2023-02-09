
import 'assets/scss/style.scss'
import LandingPage from 'pages/LandingPage';
import LoginPage from 'pages/LoginPage';
import Dashboard from 'pages/Dashboard';
import Generate from 'pages/Generate';


import {BrowserRouter as Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" component={LandingPage}></Route>
        <Route exact path="/LoginPage" component={LoginPage}></Route>
        <Route exact path="/Dashboard" component={Dashboard}></Route>
        <Route exact path="/Generate" component={Generate}></Route>

      </Routes>
    </div>
  );
}

export default App;
