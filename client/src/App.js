import './App.css';
import header from '/components/header'

function App() {
  return (
    <div className="App">
      Hello, world!
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
