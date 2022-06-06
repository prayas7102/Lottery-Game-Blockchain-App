const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');
require("dotenv").config({ path: '.env' });

const provider = new HDWalletProvider(
    `${process.env.MNEUMONIC}`,
    `${process.env.RINKEBY}`,
);
const web3 = new Web3(provider)
const deploy = async () => {
    accounts = await web3.eth.getAccounts();
    // console.log('deploying from', accounts[0])
    const result = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({ data: bytecode })
        .send({
            from: accounts[0], gas: '1000000',
        })
    console.log('contract deployed to', result.options.address);
}
deploy();