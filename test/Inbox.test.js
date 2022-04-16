const assert = require('assert')
const ganache = require("ganache-cli")
const Web3 = require('web3');
const web3 = new Web3(ganache.provider())
const { interface, bytecode } = require('../compile')
let accounts;
let inbox;
beforeEach(async () => {
    accounts = await web3.eth.getAccounts();
    // console.log(JSON.parse(interface))
    inbox = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({ data: bytecode, arguments: ['hi there'] })
        .send({ from: accounts[0], gas: "1000000" })
})

describe('Inbox', () => {
    it('deploys a contract', () => { 
        assert.ok(inbox.options.address)
        // console.log(accounts,inbox) 
    })
    it('has a default mssg', async() => { 
        const message=await inbox.methods.message().call();
        // console.log(message) 
        assert.equal(message,'hi there')
    })
    it('can change the mssg', async() => { 
        await inbox.methods.setMessage('bye').send({from: accounts[0]})
        const message=await inbox.methods.message().call();
        // console.log(message) 
        assert.equal(message,'bye')
    })
})