import logo from './logo.svg';
import './App.css';
import Helper from './utils/error.util';
import axios from 'axios';

function App() {
  const helper = new Helper()
  const handle = async () => {
    try {
      const todo = await axios.get('https://jsonplaceholder.typicode.com/todos');
      if (todo) {
        console.log(todo)
        helper.setResponse(todo).report()
      }
    } catch (error) {
      console.log(error)
      helper.setMessage(error).report()
    }
  }
  handle()
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
