import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Registration from './pages/Registration';
import OrganisationSetup from './pages/OrganisationSetup';
import ChatbotIntegration from './pages/ChatbotIntegration';
import Dashboard from './pages/Dashboard';
import Home from "./pages/Home"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Registration />} />
        <Route path="/home" element={<Home/>}/>
        <Route path="/setup" element={<OrganisationSetup />} />
        <Route path="/integration" element={<ChatbotIntegration />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
