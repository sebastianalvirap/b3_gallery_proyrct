import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import { Akita } from './components/Akita';
import { Doberman } from './components/Doberman';
import { Dogo_Argentino } from './components/Dogo_Argentino';
import { Pastor_Aleman } from './components/Pastor_Aleman';
import { Pitbull } from './components/Pitbull';
import { Rottweiler } from './components/Rottweiler';
import { Znavigation } from './components/Znavigation';

function App() {

  return (
    <>
      <BrowserRouter>
        <div>
          <h1 className='text-center my3'>Gallery Proyect</h1>
        </div>
        <div className='container d-flex justify-content-center'>
          <Routes>
            <Route path='/Akita' element={<Akita className='main-img-container'/>}/>
            <Route path='/Doberman' element={<Doberman className='main-img-container'/>}/>
            <Route path='/Dogo_Argentino' element={<Dogo_Argentino className='main-img-container'/>}/>
            <Route path='/Pastor_Aleman' element={<Pastor_Aleman className='main-img-container'/>}/>
            <Route path='/Pitbull' element={<Pitbull className='main-img-container'/>}/>
            <Route path='/Rottweiler' element={<Rottweiler className='main-img-container'/>}/>
          </Routes>
          </div>
        <div className='container'>
          <Znavigation />
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;