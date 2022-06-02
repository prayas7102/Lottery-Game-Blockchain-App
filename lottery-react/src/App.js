import React, { Component, useEffect, useState } from 'react';
import './App.css';
import web3 from './Web3';
import Lottery from "./Lottery"
function App() {
  const [manager, setManager] = useState("");
  const [player, setPlayer] = useState([]);
  const [balance, setBalance] = useState("");
  const [value, setValue] = useState("");

  useEffect(){
    const getManager = async () => {
      const manager = await Lottery.methods.manager.call();
      setManager(manager);
      const player = await Lottery.methods.getPlayers.call();
      setPlayer(player);
      const balance = await web3.eth.getBalance.call(Lottery.options.address);
      setBalance(balance);
    }
    getManager();
  }

  const submitResponse = async(e) => {
    e.preventDefault();
    const accounts = await web3.eth.getAccounts();
    await Lottery.methods.enter().send({ 
      from: accounts[0], 
      value: web3.utils.toWei(value, 'ether') 
    })
  }

  return (
    <div className="App">
      <h2>Lottery Contract</h2>
      <p>Contract is managed by {manager}.</p>
      <p>Currently there are {player.length} players.</p>
      <p>Winning amount is {web3.utils.fromWei(balance, 'ether')} ether.</p>
      <hr />
      <form onSubmit={submitResponse()}>
        <h4>Try your luck</h4>
        <div>
          <label>Amount of ether to enter</label>
          <input value={value} onChange={(e) => { setValue(e) }} />
        </div>
        <button>
          Enter
        </button>
      </form>
    </div>
  );
}

export default App;
