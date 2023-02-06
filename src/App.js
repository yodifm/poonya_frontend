
import 'assets/scss/style.scss'
import LandingPage from 'pages/LandingPage';

import {BrowserRouter as Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" component={LandingPage}></Route>

      </Routes>
    </div>
  );
}

export default App;
