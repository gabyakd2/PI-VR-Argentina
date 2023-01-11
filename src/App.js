// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/Navbar/Navbar';
import SideNavBar from './components/Sidebar/SideBar';
import { RouteController } from './routes/RouterController';

function App() {
  return (
    <div className="App">
      <NavBar />
      <RouteController />
    </div>
  );
}

export default App;
