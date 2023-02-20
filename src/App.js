import React from 'react';
import Cards from './components/Cards';
import './App.css'

function App() {
  return (
    <div className='CardsDiv'>
      <Cards name={"Anshul"} />
      <Cards name={"Ankit"}/>
      <Cards name={"Shivam"}/>
    </div>
  );
}
export default App;
