import './App.css';
import Header from './components/Header'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
      </Router>
    </div>
  );
}

class App extends Component{
  render(){
    return(
      <div className="App">
        <header/>
      </div>
    );
  }
}

export default App;
