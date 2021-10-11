import './App.css';
import Counter from './Components/Counter';
import Description from './Components/Description';
import Disco from './Components/Disco';
import Header from './Components/Header';

function App() {
  return (
    <div className="App">
      <Counter/>
      <Header/>
      <Description/>
      <Disco/>
    </div>
  );
}

export default App;
