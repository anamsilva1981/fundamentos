import './App.css';
import FirstComponents from './components/FirstComponents';
import MyComponents from './components/MyComponents';
// import MyComponents from './components/MyComponents';
import TemplateExpressions from './components/TemplateExpressions';
import Event from './components/Event';
import Challenge from './components/Challenge';

function App() {
  return (
    <div className="App">
      <h1>Fundamentos React</h1>
      <FirstComponents />
      <TemplateExpressions />
      <MyComponents />
      <Event />
      <Challenge />
    </div>
  );
}

export default App;
