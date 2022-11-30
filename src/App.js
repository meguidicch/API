import {Route,Routes} from 'react-router-dom'
import './App.css';
import Home from './Components/Home';
import Navuser from './Components/Navuser';
import Listuser from './Components/Listuser';
import Profil from './Components/Profil';

function App() {
  return (
    <div>
      <Navuser/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/List' element={<Listuser/>}/>
        <Route path='/user/:asma'element={<Profil/>}/>
      </Routes>
    </div>
  );
}

export default App;
