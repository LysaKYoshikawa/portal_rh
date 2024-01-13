import './App.css';
import CardComponent from './components/card/CardComponent'

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <span className="navbar-text">
          Lysa Web Code
        </span>
        
      </nav>
      <CardComponent/>

      <footer>
        <p>&copy; 2024 Cadastro de candidato | <a href="https://www.linkedin.com/in/monalysa-yoshikawa/" target="_blank">Linkedin</a> | <a href="https://github.com/LysaKYoshikawa" target="_blank">Github</a></p>
      </footer>
    </div>
  );
}

export default App;
