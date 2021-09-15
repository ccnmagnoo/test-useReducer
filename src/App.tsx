import './App.css';
import MyProvider from './Components/context';
import { Parent } from './Components/Parent-component';

function App() {
  return (
    <MyProvider>
      {/*context provider*/}
      <div className='App-header'>
        <Parent />
      </div>
    </MyProvider>
  );
}

export default App;
