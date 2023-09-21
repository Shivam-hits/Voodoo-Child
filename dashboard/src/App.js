import './App.css';
import Header from '../src/container/header/header.jsx';
import Con1 from "../src/container/con1/con1.jsx"
import Con2 from "../src/container/con2/con2.jsx"
function App() {
  return (
    <div className="App">
      <Header/>

      <div className="body_container">
        <Con1/>
        <Con2/>
      </div>

    </div>
  );
}

export default App;
