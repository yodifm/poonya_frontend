
import 'assets/scss/style.scss'
import LandingPage from 'pages/LandingPage';
import LoginPage from 'pages/LoginPage';
import Dashboard from 'pages/Dashboard';
import Dashboard_Ticket from 'pages/Dashboard_Ticket';
import Dashboard_Sales from 'pages/Dashboard_Sales';
import Generate from 'pages/Generate';
import ClickPage from 'pages/ClickPage';
import FormLogin from 'parts/FormLogin';
import TestCode from 'parts/TestCode';
import EditPrice from 'parts/EditPrice';




import {BrowserRouter as Routes, Route, Link} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" component={LandingPage}></Route>
        <Route exact path="/LoginPage" component={FormLogin}></Route>
        <Route exact path="/Dashboard" component={Dashboard}></Route>
        <Route exact path="/Generate" component={Generate}></Route>
        <Route exact path="/ClickPage" component={ClickPage}></Route>
        <Route exact path="/Dashboard_Ticket" component={Dashboard_Ticket}></Route>
        <Route exact path="/Dashboard_Sales" component={Dashboard_Sales}></Route>
        <Route exact path="/TestCode" component={TestCode}></Route>
        <Route exact path="/EditPrice" component={EditPrice}></Route>

      </Routes>
    </div>
  );
}

export default App;
