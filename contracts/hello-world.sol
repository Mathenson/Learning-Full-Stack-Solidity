//SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

string constant GREET = "Hi from Solidity";

contract Greetings {
    // A function that greet new User from Solidity
    function greetings() external pure returns (string memory) {
        return GREET;
    }
}
