const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile')
const provider = new HDWalletProvider(
    'skin jaguar hedgehog lizard enough autumn net bag naive february dial uncle',
    'https://rinkeby.infura.io/v3/d74f06effce04fdcbe3465483b46f07f',
)
const web3 = new Web3(provider)
const deploy = async () => {
    accounts = await web3.eth.getAccounts();
    // console.log('deploying from', accounts[0])
    const result = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({ data: bytecode })
        .send({
            from: accounts[0], gasPrice: '200000', gasLimit: '250000',
        })
    console.log('contract deployed to', result.options.address);
}
deploy();