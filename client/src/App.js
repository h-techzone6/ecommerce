import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';import boostrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar'
import HomeScreen from './screens/HomeScreen'
import Productdescscreen from './screens/Productdescscreen'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Router>
      {/* Wrap your routes in a Routes component */}
      <Routes>
        {/* Each Route should be a child of Routes */}
        <Route path="/" element={<HomeScreen />} />
        <Route path="/product/:id" element={<Productdescscreen />} />
        
      </Routes>
    </Router>
      
      
    </div>
  );
}

export default App;
