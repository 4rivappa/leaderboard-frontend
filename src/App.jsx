import Home from "./components/Home";
import Profile from "./components/Profile";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={ <Home /> } />
        <Route path="/profile" element={ <Home /> } />
        <Route path="/profile/:id" element={ <Profile /> } />
      </Routes>
    </Router>
  )
}