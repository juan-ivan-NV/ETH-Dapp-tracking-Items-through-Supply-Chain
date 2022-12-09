# ETH-Dapp-tracking-Items-through-Supply-Chain.

Supply chain Dapp with Ethereum platform as backend.

Project Details

<table>
<tr> <td>Part 1</td> <td>Plan the project with write-ups</td> </tr>
<tr> <td>Part 2</td> <td>Write smart contracts</td> </tr>
<tr> <td>Part 3</td> <td>Test smart contract code coverage</td> </tr>
<tr> <td>Part 4</td> <td>Deploy smart contracts on a public test network (Rinkeby)</td> </tr>
<tr> <td>Part 5</td> <td>Modify client code to interact with smart contracts</td> </tr>
<tr> <td>Optional</td> <td>Implement Infura to store product image</td> </tr>
</table>


## Part 1: Plan the project with write-ups.

<table>
<tr> <td>Requirement 1</td> <td>Project write-up - UML</td> </tr>
<tr> <td>Requirement 2</td> <td>Project write-up - Libraries</td> </tr>
<tr> <td>Requirement 3</td> <td>Project write-up - IPFS</td> </tr>
</table>


## Part 2: Write smart contracts.

### Requirement 1: Define and implement required interfaces.


<a href = "https://github.com/udacity/nd1309-Project-6b-Example-Template">Starter code</a>

* To use the starter code, please run <code>npm i -g truffle@4.1.14</code> to install Truffle v4 with Solidity v0.4.24.

* To check the Solidity compiler version on your local installation, you can run this command: <code>truffle version</code>.

#### Smart contracts.

* AccessControl - Collection of Contracts: These contracts manages the various addresses and constraints for operations that can be executed only by specific roles.

* Base - SupplyChain.sol: This is where we define the most fundamental code shared throughout the core functionality. This includes our main data storage, constants, and data types, plus internal functions for managing these items.

* Core - Ownable.sol: is the contract that controls ownership and transfer of ownership.


### Requirement 2: Build out AccessControl Contracts.

From the Starter Code, the files in <code>coffeeaccesscontrol</code> controls access control for each actor.

Build out these contracts so that each actor’s role in your supply chain is distinct with no overlap in their access abilities. The abilities listed for each role are exhaustive.

Example of 4 actors in a coffee supply chain are: Farmer, Distributor, Retailer, Consumer.

### Requirement 3: Build out Base Contract.

From the Starter Code, <strong>SupplyChain.sol</strong> contract holds all common structs, events and base variables.

This smart contract must implement functions that track:

* Product ID
* Product UPC
* Origination Information
* Origin Actor (e.g. Farmer ID, Farmer Name, )
* Misc. organization information (e.g. Farmer Information)
* Longitude and Latitude of Origin Coordinates (e.g. Farm’s Longitude and Latitude)
* Product notes
* Product price

### Requirement 4: Build out Core Contract

<strong>Ownable.sol</strong> is the contract that controls ownership and transfer of ownership.

This Core Contract must implement:

* Ownable - Define an owner for all the contracts.
* Secondary - Allows contract to be transferred owners.

## Part 3: Test smart contract code coverage.

### Requirement: Smart contract has associated tests.

Requirement: Smart contract has associated tests.

At minimum, test every function for every function you implemented from your Sequence Diagram. For example, from this Sequence Diagram we would need to test 10 functions:

* harvestItem()
* processItem()
* packItem()
* addItem()
* buyItem()
* shiptItem()
* receiveItem()
* purchaseItem()
* fetchItemBufferOne()
* fetchItemBufferTwo()

<img src='images/screen-shot-2018-11-26-at-5.16.19-pm.png'/>

## Part 4: Deploy smart contracts on public test network.

Deploy your smart contract on the Ethereum RINKEBY test network.

<table>
<tr> <td>Requirement 1</td> <td>Deploy smart contract on a public test network</td> </tr>
<tr> <td>Requirement 2</td> <td>Submit Transaction hash, contract hash, and contract address</td> </tr>
</table>


### Requirement 1: Deploy smart contract on a public test network.

Deploy your smart contract with the Rinkeby test network.

<p>Tip: Refer to Infura screencast for assistance on deploying your smart contract with Infura and Truffle.</p>

### Requirement 2: Submit Contract Address.

Provide a document with your project submission that includes the contract address.

Document for your project must be in either ".txt" or ".md" format.

<p>Hint: You can view the Contract address using a blockchain explorer (e.g. Etherscan).</p>


## Part 5: Modify client code to interact with smart contract.

Create the frontend that allows your users to interact with your DApp. This should be a simple and clean frontend that manages product lifecycle as the product navigates down the supply chain.

Using javascript, create a single JS file with all web3 functions that allows your client code to interact with you smart contracts.

The coffee example in the boilerplate provides this code for you.

### Requirement: Configure client code for each actor.

Front-end is configured to:

1) Submit a product for shipment (farmer to the distributor, distributor to retailer, etc).
2) Receive product from shipment.
3) Validate the authenticity of the product.
Frontend code can be downloaded and executed from a local environment.

## Optional: Implement Infura to store product image.

Using your previous coursework experience, modify your DApp to allow the initial producer in the supply chain to upload an image of the product along with the UPC hash and store this image using Infura.

Consider including 2 methods - upload() and read()




docker build -t dapp-tracking-bc .
docker run -p 9545:9545 dapp-tracking-bc
docker run -t -d -p 9545:9545 -p 8080:8080 dapp-tracking-bc bash
docker run -i -t -d -p 9545:9545 -p 8080:8080 dapp-tracking-bc bash
docker run -i -t dapp-tracking-bc bash

docker exec -it [container id] bash

docker inspect [containername]


nano node_modules/browser-sync/dist/default-config.js

change the ports on the default-config.js
in this case 8080 for BROWSER SYNC
and 9545 for the app


truffle migrate --network goerli --reset 
truffle migrate --reset --network goerli
cost arround 0.12 ETH 