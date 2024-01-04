import logo from './logo.svg';
import './App.css';
import CreateComponent from './components/create/CreateComponent'

function App() {
  return (
    <div className="App">
      <nav class="navbar navbar-light bg-light">
        
        <img src="../public/logo192-transparente.png" width="30" height="30" alt=""/>
        
      </nav>
      <CreateComponent/>
    </div>
  );
}

export default App;
