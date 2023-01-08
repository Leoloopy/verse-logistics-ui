import './App.css';
import Home from './components/Routes/home.component';
import Header from './components/nav/nav.component';
import {Routes, Route} from "react-router-dom";
import SignUp from './components/sign-up/signUp.component';

function App() {
  return (
    <Routes>
      <Route path='/home' element={<Home />} />
      <Route path='nav/' element={<Header />}>
          <Route path='signup' element={<SignUp />} />
      </Route>
    </Routes>

  );
}

export default App;
