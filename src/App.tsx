import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './Components/Header/Header';
import { Footer } from './Components/Footer/Footer';
import { Home } from './Pages/Home';
import { Login } from './Pages/Auth/Login';
import Register from './Pages/Auth/Register';
import Verification from './Components/EmailVerification/EmailVerification';
import Dashboard from './Components/Dashboard/Dashboard';
import CreateAppartement from './Pages/CreateaAppartement';

function App() {
  return (
    <Router>
      <div className="app-container">
        {/* Header visible sur toutes les pages */}
        <div className='fixed z-50 top-0 w-full'> <Header /></div>
       
        
        {/* Routes principales */}
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/verification" element={<Verification />} />
            <Route path="/dashboard" element={<Dashboard/>}/>
            <Route path="/annonce" element={<CreateAppartement/>}/>
          </Routes>
      
        </main>
        
        {/* Footer visible sur toutes les pages */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
