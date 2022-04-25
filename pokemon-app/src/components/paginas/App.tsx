import './App.css';
import Game from './game/Game';
import Home from './home/Home';
import {BrowserRouter as Router, Routes,Route} from "react-router-dom"



function App() {

  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Game' element={<Game/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App;
