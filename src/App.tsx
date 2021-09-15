import './App.css';

function App() {
  return (
    <div className='App-header'>
      <section className='Parent-section'>
        <h3>Parent component</h3>
        <div className='Data-section'>
          <ul>
            <li>🍎</li>
            <li>🍒</li>
            <li>🍓</li>
            <li>🥝</li>
          </ul>
        </div>
        <div className='Child-section'>
          <h4>Child component</h4>
          <div className='Data-section'>
            <ul>
              <li>🍎</li>
              <li>🍒</li>
              <li>🍓</li>
              <li>🥝</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
