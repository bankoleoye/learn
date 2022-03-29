import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Message from './components/Message.js'
// import Hello from './components/Hello';

function App() {
  return (
    <div className="App">
      <Message />
      {/* <Greet name="John" heroName="Smith" />
      <Greet name="Joh" heroName="Sam" />
      <Greet name="Jo" heroName="Segs">
         <p>Kalakua</p>
         </Greet>  */}
        <Welcome name="Ade" heroName="Sola" />
    </div>
  );
}

export default App;
