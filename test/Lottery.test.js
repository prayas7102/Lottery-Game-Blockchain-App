const assert = require('assert')
const ganache = require("ganache-cli")
const Web3 = require('web3');
const web3 = new Web3(ganache.provider())
const { interface, bytecode } = require('../compile')
let accounts;
let lottery;
beforeEach(async () => {
    accounts = await web3.eth.getAccounts();
    // console.log(JSON.parse(interface))
    lottery = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({ data: bytecode })
        .send({ from: accounts[0], gas: "1000000" })
})

describe('lottery', () => {
    it('deploys a contract', () => { 
        assert.ok(lottery.options.address)
        // console.log(accounts,lottery) 
    })
    it('allows one account to enter', async() => { 
        assert.ok(lottery.options.address)
        // console.log(accounts,lottery) 
    })
})