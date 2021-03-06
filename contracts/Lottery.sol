pragma solidity ^0.4.17;

contract Lottery {
    address[] public people;
    address public manager;

    function Lottery() public {
        manager = msg.sender;
    }

    function enter() public payable {
        people.push(msg.sender);
    }

    function random() public view returns (uint256) {
        return uint256(keccak256(block.difficulty, now, people));
    }

    modifier restricted() {
        require(msg.sender == manager);
        _;
    }

    function pickWinner() public restricted payable{
        uint256 index = random() % people.length;
        people[index].transfer(this.balance);
        people = new address[](0);
    }

    function getPlayers() public view returns (address[]) {
        return people;
    }
}
