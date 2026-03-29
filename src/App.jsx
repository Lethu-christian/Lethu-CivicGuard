import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing'; 
import Home from './pages/Home';       
import Leaderboard from './pages/Leaderboard';
import Admin from './pages/Admin';
import Login from './pages/Login';
import ContestantDetails from './pages/ContestantDetails';
import Gallery from './pages/Gallery';
import Socials from './pages/Socials';
import ProtectedRoute from './components/ProtectedRoute';




function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/admin" element={
          <ProtectedRoute>
            <Admin />
          </ProtectedRoute>
        } />
        <Route path="/login" element={<Login />} />
        <Route path="/contestant/:id" element={<ContestantDetails />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/socials" element={<Socials />} />
      </Routes>
    </Router>
  );
}




export default App;
