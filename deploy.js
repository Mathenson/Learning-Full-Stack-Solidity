
const { ethers, ContractFactory } = require ("ethers");
const fs = require("fs-extra"); 


async function main() {

    //access a provider
    const provider = new ethers.providers.JsonRpcProvider("http://127.0.0.1:8545");
    const wallet = new ethers.Wallet(
        "0x6d84a0902bcd8221f9751b4052acdb970eaad135127324b04c73fb6df06d04f3",
        provider
        );
    //access the abi and the binary
    const abi = fs.readFileSync("contracts_hello-world_sol_Greetings.abi", "utf8");
    const binary = fs.readFileSync("contracts_hello-world_sol_Greetings.bin", "utf-8")
    
    //to deploy contract we need access to the WALLET, ABI and BINARY
    //with the contractfactory library
        const contractFactory = new ethers.ContractFactory(abi, binary, wallet);
        console.log("Deploying, Please wait");
        const contract = await contractFactory.deploy()
        console.log(contract);
    
    }
main()
    .then(() => ProcessingInstruction.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });