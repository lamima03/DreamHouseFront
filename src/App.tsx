import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './Components/Header/Header';
import { Footer } from './Components/Footer/Footer';
import { Home } from './Pages/Home';
import { Login } from './Pages/Auth/Login';
import Register from './Pages/Auth/Register';
import Dashboard from './Components/Dashboard/Dashboard';
import CreateAppartement from './Pages/CreateaAppartement';
import PaymentPage from './Pages/Paiement';
import Component from './Pages/Step1';
import EmailForm from './Pages/step2';
import EmailVerification from './Pages/step3';
import PasswordForm from './Pages/step4';
import SmsVerification from './Pages/Step5';
import UsernameForm from './Pages/step6';
import PhoneInputForm from './Pages/step7';
import { AcheterAppartement } from './Components/BuyAppartement';
import { AcheterMaison } from './Components/BuyHouse';
import { DetailMaison } from './Pages/DetailMaison';
import SendData from './Components/sendData';




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
            <Route path="/verification" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard/>}/>
            <Route path="/annonce" element={<CreateAppartement/>}/>
            <Route path='/paiement'element={<PaymentPage/>}></Route>
            <Route path='/step1'element={<Component/>}></Route>
            <Route path='/step2'element={<EmailForm/>}></Route>
            <Route path='/step3'element={<EmailVerification/>}></Route>
            <Route path='/step4'element={<PasswordForm/>}></Route>
            <Route path='/step5'element={<SmsVerification/>}></Route>
            <Route path='/step6'element={<UsernameForm/>}></Route>
            <Route path='/step7'element={<PhoneInputForm/>}></Route>
            <Route path='/paiement'element={<PaymentPage/>}></Route> 
            <Route path="/acheter/appartement" element={<AcheterAppartement />} />
            <Route path="/acheter/maison" element={<AcheterMaison/>} />
            <Route path="/maisons/:id" element={<DetailMaison />} />
            <Route path='/send' element ={<SendData/>} />


          </Routes>
      
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
