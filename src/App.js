import Settings from './pages/Settings';
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className='flex justify-center items-center sm:h-screen bg-blue-900 text-white'>
        <Routes>
          <Route path='/' element={<Settings/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
