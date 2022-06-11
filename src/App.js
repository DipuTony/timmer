import './App.css';
import Timer from './components/Timer';
import MyCalculator from './components/MyCalculator';
import Bulb from './components/Bulb';
import LocalStorage from './components/LocalStorage';
import Testing from './components/Testing';



function App() {
  return (
  <>
    <div id="container">
      <Testing />
    <LocalStorage />
      <Timer />
      <MyCalculator />
      <Bulb/>
      
    </div>
  </>
  );
}

export default App;
