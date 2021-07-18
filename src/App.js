import logo from './logo.svg';
import './App.css';
import User from './User'

function App() {
  return (
    <div className="App">
      
      <User data={ {name : 'sandeep sharma', age : 29} } />
    </div>
  );
}

export default App;
