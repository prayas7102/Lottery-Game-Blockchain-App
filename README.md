# Blockchain Lottery Game

This project is one of the most basic and famous blockchain Ethereum project by Stephen Grider. 

In this react-based website, a person can create a lottery game while declare him as the manager. 
For this he/she has to pay computational or gas fee, in form of wei. Other users can participate as participants by paying some minimum to manager of the lottery contract. 

The winner is decided by this formula, 
uint256(keccak256(block.difficulty, now, people))
Where people is the array of participants. 
In short now is just an alias for block.timestamp and it is the number of seconds since the Epoch. 
Keccak256 is a hash function. 

The winner decided by this formula gets all the ether transferred to his wallet. 

## Acknowledgements

Ethereum and Solidity: The Complete Developer's Guide by Stephen Grider. 

Use Ethereum, Solidity, and Smart Contracts to build production-ready apps based on the blockchain. 

https://www.udemy.com/course/ethereum-and-solidity-the-complete-developers-guide/




## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`MNEUMONIC` : Your metamask mnemonic. 
`RINKEBY`: Link of where you have deployed your smart contract on rinkeby. 


## Installation

Install my-project with npm
Following dependencies with the given version only should be installed before running the project on local. 

Run: "npm i" In root directory. 

"dependencies": {
    "dotenv": "^16.0.1",
    "ganache-cli": "^6.12.2",
    "mocha": "^9.2.2",
    "solc": "^0.4.17",
    "truffle-hdwallet-provider": "0.0.3",
    "web3": "^1.3.5"
  }

Run npm i by going in lottery-react directory to install these dependencies: 

"dependencies": {
    "@testing-library/jest-dom": "^5.16.4",
    "@testing-library/react": "^13.2.0",
    "@testing-library/user-event": "^13.5.0",
    "assert": "^2.0.0",
    "buffer": "^6.0.3",
    "crypto-browserify": "^3.12.0",
    "https-browserify": "^1.0.0",
    "mailgun-js": "^0.6.7",
    "os-browserify": "^0.3.0",
    "process": "^0.11.10",
    "react": "^18.1.0",
    "react-app-rewired": "^2.2.1",
    "react-dom": "^18.1.0",
    "react-scripts": "^2.1.3",
    "stream-browserify": "^3.0.0",
    "stream-http": "^3.2.0",
    "url": "^0.11.0",
    "web-vitals": "^2.1.4",
    "web3": "^1.7.3"
  }
## Tech Stack

**Client:** React, CSS, HTML

**Server:** Smart Contract in Solidity


## Usage/Examples

Go to :: 
Lottery-Game-Blockchain-App/test/Lottery.test.js

To run tests on smart contract. 

