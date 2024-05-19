import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Chat from './components/Chat';



function App() {

  return (
    <div className='h-full'>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/chat" element={<Chat/>}/>
        <Route path="/login" element={<Login/>}/>
        
        
      </Routes>

      {/* <Login/> */}
         
    
    </div>
  );
}

export default App;
