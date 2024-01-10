import './App.css';
import CreateComponent from './components/create/CreateComponent'

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <span className="navbar-text">
          Lysa Web Code
        </span>
        
      </nav>
      <CreateComponent/>

      <footer>
        <p>&copy; 2024 Cadastro de candidato | <a href="https://www.linkedin.com/in/monalysa-yoshikawa/" target="_blank">Linkedin</a> | <a href="https://github.com/LysaKYoshikawa" target="_blank">Github</a></p>
      </footer>
    </div>
  );
}

export default App;
