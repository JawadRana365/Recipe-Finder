import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NavBar from './components/Header/NavBar';
import { useState } from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Main from './components/Main/Main';
import RecipeDetails from './components/RecipeDetails/RecipeDetails';


function App() {
  const[search,setSearch] = useState("")
  return (
    <Router>
      <div className="App">
        <NavBar search={search} setSearch={setSearch}/>

        <Routes>
          <Route path='/' element={<Main search={search}/>} />
          <Route path='/recipe-details/:id' element={<RecipeDetails/>} />
        </Routes>

        <ToastContainer />
      </div>
    </Router>
  );
}

export default App;
