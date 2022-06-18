import web3 from "./Web3";
const address = `${process.env.DEPLOYED_ADDRESS}`;
const abi = [
    {
        constant: true,
        inputs: [],
        name: 'manager',
        outputs: [[Object]],
        payable: false,
        stateMutability: 'view',
        type: 'function'
    },
    {
        constant: false,
        inputs: [],
        name: 'pickWinner',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        constant: true,
        inputs: [],
        name: 'random',
        outputs: [[Object]],
        payable: false,
        stateMutability: 'view',
        type: 'function'
    },
    {
        constant: true,
        inputs: [],
        name: 'getPlayers',
        outputs: [[Object]],
        payable: false,
        stateMutability: 'view',
        type: 'function'
    },
    {
        constant: true,
        inputs: [[Object]],
        name: 'people',
        outputs: [[Object]],
        payable: false,
        stateMutability: 'view',
        type: 'function'
    },
    {
        constant: false,
        inputs: [],
        inputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'constructor'
    }
];
export default new web3.eth.Contract(abi, address);