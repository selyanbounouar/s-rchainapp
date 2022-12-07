import {useState, useEffect } from 'react';
import { ethers } from 'ethers';
import { Document, Page, Text, View, StyleSheet, PDFViewer } from '@react-pdf/renderer';
import Token from './artifacts/contracts/Token.sol/Token.json';
import './App.css';
import { saveAs } from 'file-saver';
import { pdf } from '@react-pdf/renderer';
import nft1 from './Images/4.png';
import nft2 from './Images/5.png';
import nft3 from './Images/6.png';
import nft4 from './Images/7.png';
import background from './Images/background.png';
const tokenAddress = "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512";
const Client_address= "0x29C97e6A438708cC95BF9C160478F23F6C3baEAA"

function App() {

  const [balance, setBalance] = useState();

  useEffect(() => {
    getBalance();
  }, [])

  async function getBalance() {
    if(typeof window.ethereum !== 'undefined') {
      const accounts = await window.ethereum.request({method: 'eth_requestAccounts'});
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const contract = new ethers.Contract(tokenAddress, Token.abi, provider);
      const balance = await contract.balanceOf(accounts[0]);
      setBalance(balance / (10**18));
    }
  }
  return (
    <div className="App">
      <p className="titre">Sûrchain : A solution for your valuable stuff</p>
      <img className="background" src={background} alt=""/>
      <p className="txt5">If you want to know more
      <a href="https://acrobat.adobe.com/id/urn:aaid:sc:EU:ee1d987d-0d4d-4cd6-b72e-3ee69d2c4bef" target="blank"> about the project</a>
      </p>
      <p className="vagues">~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~</p>
      <p className="Example">Example of Client_1's wallet</p>
      <p className="txt4">- Client_1: {Client_address}</p>
      <p className="txt1">- Number of TSO owned : 30 {balance}</p>
      <div>
        <p className="txt2">- Your stuff :</p>
        <img className="NFT" src={nft4} alt=""/>
        <img className="NFT" src={nft2} alt=""/>
        <img className="NFT" src={nft3} alt=""/>
      </div>
      <div>
        <p className="txt3">Objet 1</p>
        <p className="txt3">Objet 2</p>
        <p className="txt3">Objet 3</p>
      </div>
    </div>
  );
}

export default App;
