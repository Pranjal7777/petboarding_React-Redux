import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from "react-router-dom"
import { AllRoutes } from './components/Routex';
import { CreateEntity } from './components/Create Entity Page/Create_Entity';
import { Home } from './components/Home/Home';
function App() {
  return (
    <div className="App" >
      <BrowserRouter>
        <AllRoutes />
        {/* <CreateEntity /> */}
        {/* <Home /> */}
      </BrowserRouter>

    </div>
  );
}

export default App;
