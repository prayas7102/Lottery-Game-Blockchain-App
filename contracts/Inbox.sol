pragma solidity ^0.4.17;

contract Inbox {
    string public message;

    function Inbox(string inimessage) public {
        message = inimessage;
    }

    function setMessage(string newmessage) public {
        message = newmessage;
    }
}
