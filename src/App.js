import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Login';



function App() {

  return (
    <div className='h-full'>
      {/* <Routes>
        
        <Route path="/login" element={<Login/>}/>
        
        
      </Routes> */}

      <Login/>
         
    
    </div>
  );
}

export default App;
