import React from 'react'
import Header from './components/Header'
import AddContract from './components/AddContract'
import ContractCard from './components/ContractCard'
import './App.css';

function App() {

  return (
    <div>
      <Header />
      <AddContract />
      <ContractCard />
    </div>
  );
}

export default App;
