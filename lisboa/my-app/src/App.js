import { Routes, Route } from 'react-router-dom';
import RegisterPage from './components/pages/RegisterPage';
import LandingPage from './components/pages/LandingPage';

function App() {
  return (
      <Routes>
        <Route path="/" element={<RegisterPage />} />
        <Route path="/virtualcards/:name/:identifier" element={<LandingPage />} />
      </Routes>
  );
}

export default App;
