import React from 'react';
import './App.css';
import Header from './componants/Header';
import Footer from './componants/Footer';
import Login from './componants/Login';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Signup from './componants/Signup';
import About from './componants/About';
import Home from './componants/Home';
// import Userprofile from './componants/Userprofile';
import EditProfile from './componants/Editprofile';
// import Sidebar from './componants/Sidebar';

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <main>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/about" element={<About />} />
            <Route path="/editprofile" element={<EditProfile/>} />
          </Routes>
        </main>
        
        <Footer/>
        {/* <Sidebar/> */}
      </div>
    </Router>
  );
}

export default App;
