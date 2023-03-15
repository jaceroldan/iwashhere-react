import { Outlet } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Home />
      <Outlet />
    </div>
  );
}

export default App;
