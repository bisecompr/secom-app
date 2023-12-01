import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Routers from './Routers';
import Menu from './components/Menu'
import MenuAdmin from './components/MenuAdmin'


function App() {
  
  const role = sessionStorage.getItem('_role')

  const InterativeMenu = () => {

    if( role === 'Admin'){
        return <MenuAdmin />
    }
    return <Menu />
  }

  return (
    <div className="App">
      
      <Router>
          {InterativeMenu()}
          <Routers/>
      </Router>
      
    </div>
  );
}

export default App;
