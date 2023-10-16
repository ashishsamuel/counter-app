import './App.css';
import Count from './components/Count';
import Counter from './components/Counter';
import Person from './components/Person';

function App() {

  const name = "Peter Parker"
  return (
    <div className='text-center mt-5'>
      <h1>Counter App</h1>
      <Counter/>
      {/* <div className='mt-5'>
        <Count/>
      </div>
      <div className='mt-5'>
        <Person name={name}/>
      </div> */}
    </div>
  );
}

export default App;
