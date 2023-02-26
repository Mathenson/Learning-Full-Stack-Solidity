import { ethers} from "./ethers-5.1.esm.min.js";
import { abi, contractAddress} from "./constant.js"


const connectButton = document.getElementById("connectButton")
const greetButton = document.getElementById("greet")

connectButton.onclick = connect
greetButton.onclick = greet
async function connect() {
    if (typeof window.ethereum !== "undefned") {
        await window.ethereum.request({method: "eth_requestAccounts"})
        connectButton.innerHTML = "Connected!"
        console.log("connected!")

    } else {
        console.log("No Metamask!")
    }
}

async function greet() {
    console.log("greetings from Solidity..")
    if (typeof window.ethereum != "undefined") {
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        const signer = provider.getSigner()
        const contract = new ethers.Contract(contractAddress, abi, signer)
        const tx = await contract.greetings()
        alert(tx)

    }
}