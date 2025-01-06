import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from '../pages/login';
import Dashboard from '../pages/dashboard';
import NotFound from '../pages/notfound';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
