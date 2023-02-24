import './App.css';
import Navbar from './component/Navbar';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import Footer from './component/Footer';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <div className="App-Navbar">
      <Navbar />
      </div>
      <div className='App-content'>
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default App;
