import React,{useState,useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
// import { useLocation } from "react-router-dom"

//import web3

import Web3 from "web3";
import Web3Modal from "web3modal";
// import axios
import axios from "axios";
// markle tree 
import { MerkleTree } from "merkletreejs";

//config
// Config
import {
  PAGE_URI,
  NETWORK_NAME,
  NETWORK_PRIMARY_CHAIN_ID,
  NETWORK_SECONDARY_CHAIN_ID,
  CONTRACT_ADDRESS,
  CONTRACT_ABI,
  FREESALEWHITELIST,
  PRESALEWHITELIST,
  ETHERSCAN_API_KEY,
} from "./config";
import keccak256 from 'keccak256';

const Mint = () => {

    useEffect(() => {
        AOS.init();
      }, []
      )

     // States
     const [walletConnected, setWalletConnected] = useState(false);

     const [totalMinted, setTotalMinted] = useState(0);
     const [mintQuantity, setMintQuantity] = useState(1);
     
     // Sales
     const [paused, setPaused] = useState(true);
     
     const [freesale, setfreesale] = useState(null);
     const [presale, setpresale] = useState(null);
     
     // Costs
     const [presaleCost, setpresaleCost] = useState(0);
     const [publicsaleCost, setPublicsaleCost] = useState(0);
     
     // Per Address & TX Limit
     const [nftFreesalePerAddressLimit, setNftFreesalePerAddressLimit] = useState(null);
     
     const [nftPresalePerAddressLimit, setNFTPresalePerAddressLimit] = useState(null);
     
     const [nftPublicsalePerAddressLimit, setNFTPublicsalePerAddressLimit] = useState(null);
     
     
       // Connect Wallet
       const connectWallet = async () => {
         if (Web3.givenProvider) {
           const providerOptions = {};
     
           const web3Modal = new Web3Modal({
             network: "mainnet",
             cacheProvider: true,
             providerOptions,
           });
     
           const provider = await web3Modal.connect();
           const web3 = new Web3(provider);
     
           web3.eth.net.getId();
     
           const { ethereum } = window;
     
           const networkId = await ethereum.request({
             method: "net_version",
           });
     
           if (
             networkId === NETWORK_PRIMARY_CHAIN_ID ||
             networkId === NETWORK_SECONDARY_CHAIN_ID
           ) {
             setWalletConnected(true);
     
             ethereum.on("chainChanged", () => {
               window.location.reload();
             });
           } else {
             alert(`Please change network to ${NETWORK_NAME}`);
           }
         } else {
           window.open(`https://metamask.app.link/dapp/${PAGE_URI}`);
         }
       };
     
       useEffect(() => {
         connectWallet();
       }, []);

       useEffect(async () => {
         if (Web3.givenProvider) {
           const web3 = new Web3(Web3.givenProvider);
           await Web3.givenProvider.enable();
     
           const contract = new web3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS);
     
           contract.methods
             .totalSupply()
             .call()
             .then((response) => {
               setTotalMinted(response);
             })
             .catch((err) => {
               console.log(err);
             });
         }
       }, [walletConnected]);
     
       useEffect( () => {
         axios
           .get(
             `https://api.etherscan.io/api?module=stats&action=tokensupply&contractaddress=${CONTRACT_ADDRESS}&apikey=${ETHERSCAN_API_KEY}`
           )
           .then(function (response) {
             setTotalMinted(response.data.result);
           })
           .catch(function (error) {
             console.log(error);
           });
       }, []);
     
       // Fetch Smart Contract Info
       useEffect(async () => {
         if (Web3.givenProvider) {
           const web3 = new Web3(Web3.givenProvider);
           await Web3.givenProvider.enable();
     
           const contract = new web3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS);
     
           const accounts = await web3.eth.getAccounts();
           const account = accounts[0];
     
           // Paused
           contract.methods
             .paused()
             .call()
             .then((res) => {
               setPaused(res);
     
               // freesale
               contract.methods
                 .freesale()
                 .call()
                 .then((res) => {
                   setfreesale(res);
     
                   // presale
                   contract.methods
                     .presale()
                     .call()
                     .then((res) => {
                       setpresale(res);
     
                       // presale Cost
                       contract.methods
                         .presaleCost()
                         .call()
                         .then((res) => {
                           setpresaleCost(res / 1000000000000000000);
     
                           // Publicsale Cost
                           contract.methods
                             .publicsaleCost()
                             .call()
                             .then((res) => {
                               setPublicsaleCost(res / 1000000000000000000);
     
                               // NFT freesale Per Address Limit
                               contract.methods
                                 .nftFreesalePerAddressLimit()
                                 .call()
                                 .then((res) => {
                                   setNftFreesalePerAddressLimit(parseInt(res));
     
                                   // NFT presale Per Address Limit
                                   contract.methods
                                     .nftPresalePerAddressLimit()
                                     .call()
                                     .then((res) => {
                                       setNFTPresalePerAddressLimit(parseInt(res));
     
                                       // NFT Publicsale Per Address Limit
                                       contract.methods
                                         .nftPublicsalePerAddressLimit()
                                         .call()
                                         .then((res) => {
                                           setNFTPublicsalePerAddressLimit(
                                             parseInt(res)
                                           );
                                         });
                                     });
                                 });
                             });
                         });
                     });
                 });
             });
         }
       }, []);
     
       // Mint Functions
       const freesaleMint = async () => {
         if (Web3.givenProvider) {
           const web3 = new Web3(Web3.givenProvider);
           await Web3.givenProvider.enable();
     
           const price = 0 * mintQuantity;
           var tokens = web3.utils.toWei(price.toString(), "ether");
           var bntokens = web3.utils.toBN(tokens);
     
           const contract = new web3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS);
     
           const accounts = await web3.eth.getAccounts();
           const account = accounts[0];
     
           const leaves = FREESALEWHITELIST.map((x) => keccak256(x));
           const tree = new MerkleTree(leaves, keccak256, { sortPairs: true });
           const buf2hex = (x) => "0x" + x.toString("hex");
       
     
     
           const leaf = keccak256(account);
           const proof = tree.getProof(leaf).map((x) => buf2hex(x.data));
           console.log(buf2hex(tree.getRoot()))
     
           // if (FREESALEWHITELIST.indexOf(account) !== -1) {
           //   contract.methods
           //     .addressfreesaleMintedBalance(account)
           //     .call()
           //     .then((mintedBalance) => {
           //       if (mintedBalance < nftFreesalePerAddressLimit) {
           //         contract.methods
           //           .freesaleMint(mintQuantity, proof)
           //           .send({ gasLimit: "300000", from: account, value: bntokens })
           //           .then(() => {
           //             alert(
           //               "Congratulations you have successfully minted your Alpha Bulls! Check Opensea"
           //             );
           //           })
           //           .catch((err) => {
           //             console.log(err);
           //           });
           //       } else {
           //         alert(
           //           `You can only mint max ${nftFreesalePerAddressLimit} NFT in freesale`
           //         );
           //       }
           //     });
           // } else {
           //   alert("You are not whitelisted");
           // }
     
           console.log(proof);
     
           contract.methods
             .freesaleMint(mintQuantity, proof)
             .send({ gasLimit: "150000", from: account, value: bntokens })
             .then(() => {
               alert(
                 "Congratulations you have successfully minted your Alpha Bulls! Check Opensea"
               );
             })
             .catch((err) => {
               console.log(err);
             });
         }
       };
     
       const presaleMint = async () => {
         if (Web3.givenProvider) {
           const web3 = new Web3(Web3.givenProvider);
           await Web3.givenProvider.enable();
     
           const price = (publicsaleCost * mintQuantity).toFixed(3);
           var tokens = web3.utils.toWei(price.toString(), "ether");
           var bntokens = web3.utils.toBN(tokens);
     
           const contract = new web3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS);
     
           const accounts = await web3.eth.getAccounts();
           const account = accounts[0];
     
           const leaves = PRESALEWHITELIST.map((x) => keccak256(x));
           const tree = new MerkleTree(leaves, keccak256, { sortPairs: true });
           const buf2hex = (x) => "0x" + x.toString("hex");
     
           const leaf = keccak256(account);
           const proof = tree.getProof(leaf).map((x) => buf2hex(x.data));
     
           if (PRESALEWHITELIST.indexOf(account) !== -1) {
             contract.methods
               .addressPresaleMintedBalance(account)
               .call()
               .then((mintedBalance) => {
                 if (
                   parseInt(mintedBalance) < nftPresalePerAddressLimit &&
                   mintQuantity + parseInt(mintedBalance) <=
                     nftPresalePerAddressLimit
                 ) {
                   contract.methods
                     .presaleMint(mintQuantity, proof)
                     .send({ gasLimit: "300000", from: account, value: bntokens })
                     .then(() => {
                       alert(
                         "Congratulations you have successfully minted your Alpha Bulls! Check Opensea"
                       );
                     })
                     .catch((err) => {
                       console.log(err);
                     });
                 } else {
                   alert(
                     `You can only mint max ${nftPresalePerAddressLimit} NFT in presale`
                   );
                 }
               });
           } else {
             alert("You are not whitelisted");
           }
         }
       };
     
       const publicsaleMint = async () => {
         if (Web3.givenProvider) {
           const web3 = new Web3(Web3.givenProvider);
           await Web3.givenProvider.enable();
     
           const price = (publicsaleCost * mintQuantity).toFixed(3);
           var tokens = web3.utils.toWei(price.toString(), "ether");
           var bntokens = web3.utils.toBN(tokens);
     
           const contract = new web3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS);
     
           const accounts = await web3.eth.getAccounts();
           const account = accounts[0];
     
           contract.methods
             .addressPublicsaleMintedBalance(account)
             .call()
             .then((mintedBalance) => {
               if (
                 parseInt(mintedBalance) < nftPublicsalePerAddressLimit &&
                 mintQuantity + parseInt(mintedBalance) <=
                   nftPublicsalePerAddressLimit
               ) {
                 contract.methods
                   .publicsaleMint(mintQuantity)
                   .send({ gasLimit: "300000", from: account, value: bntokens })
                   .then(() => {
                     alert(
                       "Congratulations you have successfully minted your Alpha Bulls! Check Opensea"
                     );
                   })
                   .catch((err) => {
                     console.log(err);
                   });
               } else {
                 alert(
                   `You can only mint max ${nftPublicsalePerAddressLimit} NFT in publicsale`
                 );
               }
             });
         }
       };
  return (
    <div className="mint cpy-8">
        <div className="container">
            <div className="mint_wrapper row gap-5">
               <div className="mint_wrapper_left col-lg-6 col-md-12 " data-aos="fade-top" data-aos-duration="1000" data-aos-delay="1">
                    <img src="../assets/img/5mint.gif" alt=""/>
               </div>
               <div className="mint_wrapper_right col-lg-6 col-md-12 " data-aos="fade-top" data-aos-duration="1000" data-aos-delay="8">
                    <div className="mint_title">
                        <h2>Mint Section</h2>
                        {/* <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p> */}
                    </div>
                    <div className="mint_box ">
                        <div className="mint_price d-flex justify-content-between ">
                            <p>mint price</p>
                            <div className="mint_price_show">
                                <p>{freesale === true && presale === false
                                      ? "FREE"
                                      : freesale === false && presale === true
                                     ? `${presaleCost} ETH`
                                     : freesale === false && presale === false
                                     ? `${publicsaleCost} ETH`
                                     : null}{" "}
                                </p>
                            </div>
                        </div>
                        <div className="mint_conunt d-flex justify-content-between">
                            <div className="conunt_box d-flex">
                            <button
                        className="custom-btn"
                        onClick={() => {
                          if (freesale === true && presale === false) {
                            if (mintQuantity < nftFreesalePerAddressLimit) {
                              setMintQuantity(mintQuantity + 1);
                            }
                          } else if (freesale === false && presale === true) {
                            if (mintQuantity < nftPresalePerAddressLimit) {
                              setMintQuantity(mintQuantity + 1);
                            }
                          } else if (freesale === false && presale === false) {
                            if (mintQuantity < nftPublicsalePerAddressLimit) {
                              setMintQuantity(mintQuantity + 1);
                            }
                          }
                        }}>+</button>
                                    <p className="number">{mintQuantity}</p>
                                    <button className='custom-btn'  onClick={() => {
                          if (mintQuantity > 1) {
                            setMintQuantity(mintQuantity - 1);
                          }
                        }} >-</button>
                            </div>
                            <p>
                      {freesale === true && presale === false
                        ? nftFreesalePerAddressLimit
                        : freesale === false && presale === true
                        ? nftPresalePerAddressLimit
                        : freesale === false && presale === false
                        ? nftPublicsalePerAddressLimit
                        : null}{" "} {" "} Max</p>
                        </div>
                        <div className="total_mint d-flex justify-content-between">
                            <p>total</p>
                            <div className="mint_price_show">
                                <p>{freesale === true && presale === false
                                      ? `FREE`
                                      : freesale === false && presale === true
                                     ? `${mintQuantity * presaleCost} ETH`
                                     : freesale === false && presale === false
                                     ? `${mintQuantity * publicsaleCost} ETH` 
                                     : null}{" "}</p>
                            </div>
                        </div>
                        <div className="mint_btn text-center">
                            {/* <button className='custom-btn'>Mint Now</button> */}
                            {paused ? (
                                     <button className="custom-btn">Coming Soon</button>
                                   ) : (
                                       <button
                                         className="custom-btn"
                                            onClick={
                                                   walletConnected
                                                     ? freesale === true && presale === false
                                                     ? freesaleMint
                                                     : freesale === false && presale === true
                                                    ? presaleMint
                                                    : freesale === false && presale === false
                                                    ? publicsaleMint
                                                    : null
                                                    : connectWallet
                                                   }
                                                   >
                                                 {walletConnected
                                               ? freesale === true && presale === false
                                               ? "Mint (Freesale)"
                                               : freesale === false && presale === true
                                               ? "Mint (Presale)"
                                               : freesale === false && presale === false
                                               ? "Mint (Publicsale)"
                                               : "Loading..."
                                               : "Connect Wallet"}
                                              </button>
                             )}
                        </div>
                    </div>
               </div>
            </div>
        </div>
    </div>
  )
}

export default Mint