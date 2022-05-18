pragma solidity ^0.4.17;
contract Lottery{
    address [] public people;
    address public manager;
    function Lottery() public{
        manager=msg.sender;
    }
    function enter() public payable {
        require(msg.value > 0.1 ether);
        people.push(msg.sender);
    }
    function random() public view returns (uint) {
        return uint(keccak256(block.difficulty,now,people));
    }
}