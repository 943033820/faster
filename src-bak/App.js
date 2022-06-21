import React from 'react';
import {message,Spin} from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import './App.css';
import Web3 from 'web3';
const antIcon = (
	<LoadingOutlined
	  style={{
		fontSize: 24,
	  }}
	  spin
	/>
  );
const chainId='4';
const tokenAddress='0xa6821f25631588910cb529f92929a84dbe06abb0';
const tokenAbi=[{"inputs":[{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"symbol","type":"string"},{"internalType":"uint256","name":"saleStart","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"FC_PROVENANCE","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Max_Fasters","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"REVEAL_TIMESTAMP","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"emergencySetStartingIndexBlock","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"fasterPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxFasterPurchase","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"numberOfTokens","type":"uint256"}],"name":"mintFaster","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"removeWhiteListUser","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"reserveFasters","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"baseURI","type":"string"}],"name":"setBaseURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"provenanceHash","type":"string"}],"name":"setProvenanceHash","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"revealTimeStamp","type":"uint256"}],"name":"setRevealTimestamp","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"setStartingIndex","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"users","type":"address[]"}],"name":"setWhiteList","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"startingIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"startingIndexBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"whiteList","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}];
const web3=new Web3(new Web3.providers.HttpProvider('https://rinkeby.infura.io/v3/bb08b8ca1bae427e8b5ba450b8d00e23'));
const contract = new web3.eth.Contract(tokenAbi, tokenAddress)
class App extends React.Component{
  state={
	    musicdata:[{"musicname":"知足","author":'五月天','src':'五月天 - 知足.mp3'},
	              {"musicname":"嘉宾","author":'张远','src':'张远 - 嘉宾.mp3'},
	             ],
	    musicindex:0,
		musicplay:false,
		showMintModal:false,
		mintcount:1,
		account:'',
		maxcount:333,
		isWhiteList:false,
		showLoading:false,
		heartcount:999
  }
 componentDidMount(){
	this.connectWallet();
	window.ethereum.on("accountsChanged",(accounts)=>{
        window.location.reload();
    });
	window.ethereum.on("chainChanged",(chainId1)=>{
		window.location.reload();
    });
 }

 connectWallet=async ()=>{
    //判断用户是否安装MetaMask钱包插件
    if (typeof window.ethereum === "undefined") {
        //没安装MetaMask钱包进行弹框提示
        message.warning("请安装MetaMask")
    } else {
        //如果用户安装了MetaMask，你可以要求他们授权应用登录并获取其账号
        window.ethereum.enable()
            .catch((reason)=>{
                //如果用户拒绝了登录请求
                if (reason === "User rejected provider access") {
                } else {
                    message.warning("There was a problem signing you in");
                }
            }).then((accounts)=>{
                // 判断是否连接erc
               if (window.ethereum.networkVersion!==chainId) {
                  message.warning("please connect erc mainnet!");
				  this.changeChain(chainId);
                  return;
               }
               this.setState({account:accounts[0]});
			   contract.methods.whiteList(accounts[0]).call().then((res,err)=>{
				    if(!err) this.setState({isWhiteList:res});
			   });
            });
    }
 }

 changeChain=async (chainId)=>{
	try {
		await window.ethereum.request({
		  method: 'wallet_switchEthereumChain',
		  params: [{ chainId:web3.utils.toHex(chainId) }],
		});
	  } catch (switchError) {
		// This error code indicates that the chain has not been added to MetaMask.
		if (switchError.code === 4902) {
		  try {
			await window.ethereum.request({
			  method: 'wallet_addEthereumChain',
			  params: [
				{
				  chainId:web3.utils.toHex(chainId),
				  chainName: 'Rinkeby测试网络',
				  rpcUrls: ['https://rinkeby.infura.io/v3/'] /* ... */,
				},
			  ],
			});
		  } catch (addError) {
			
		  }
		}
	  }
 }

 changeMusic=(value)=>{
       var musicindex=this.state.musicindex+value;
	   var musiclength=this.state.musicdata.length;
	   if(musicindex<0){
		  musicindex=musiclength-1;
	   }
	   if(musicindex===musiclength){
		  musicindex=0;
	   }
	   this.setState({musicindex:musicindex});
  }

  togggleMusicState=()=>{
	 if(this.state.musicplay){
		this.playMusic.pause();
		this.setState({musicplay:false});
		this.playMusic.removeEventListener('ended'); 
	 }else{
		this.playMusic.play();
		this.setState({musicplay:true}); 
		this.playMusic.addEventListener('ended',()=>{  
			this.changeMusic(1);
	   },false); 
	 }
  }
  
  openNewUrl=(url)=>{
	  window.open(url);
  }

  toggleMintModal=(show)=>{
	  this.setState({showMintModal:show});
  }

  changeMintCount=(value)=>{
		var mintcount=this.state.mintcount+value;
		if(mintcount<=2 &&mintcount>=0){
			this.setState({mintcount:mintcount});
		}
  }

  getTotalSupply=async ()=>{
	var totalsupply=await contract.methods.totalSupply().call();
	var count=web3.utils.fromWei(totalsupply,'wei')
	return count;
  }
  
  getAccountBlance=async ()=>{
	var balance=await web3.eth.getBalance(this.state.account);
	var count=web3.utils.fromWei(balance,'ether')
	return count;
  }

  getTransactionReceipt=async (hash,callback)=>{
	 var result=await web3.eth.getTransactionReceipt(hash);
	 if(result){
		callback(result);
	 }else{
		this.getTransactionReceipt(hash,callback);
	 }

  }
  mintHandler=async ()=>{
	    this.setState({showLoading:true});
	    if(!this.state.account){
			message.info("please connect metamask wallet!");
			this.setState({showLoading:false});
			return
		}
		if(this.state.mintcount===0){
			message.error("mintcount cannot be zero!");
			this.setState({showLoading:false});
			return
		}
		var totalSupply=await this.getTotalSupply();
		console.info('totalsupply:'+totalSupply);
		if(totalSupply+this.state.account>this.state.maxcount){
			message.error("mintcount cannot be greater than total!");
			this.setState({showLoading:false});
			return
		}
		var ethbalance=await this.getAccountBlance();
		console.info('ethbalance:'+ethbalance);
		if(ethbalance<=this.state.mintcount*0.1){
			message.error("Insufficient balance!");
			this.setState({showLoading:false});
			return
		}
		var value=web3.utils.toWei(this.getTotalEth()+'','ether');
		value=web3.utils.toHex(value);
		var params={
			from:this.state.account,
			nonce:web3.utils.toHex(await web3.eth.getTransactionCount(this.state.account)),
			to:tokenAddress,
			gas:'100000',
			value:value,
			data: contract.methods.mintFaster(this.state.mintcount).encodeABI()
		}
		try{
			await window.ethereum.request({
				method: 'eth_sendTransaction',
				params: [params],
			}).then(async (hash)=>{
				this.getTransactionReceipt(hash,(result)=>{
					if(result.status){
						message.success('mint success!');
					}else{
						message.error('mint error!');
					}
					this.setState({showLoading:false});
				});
				
			})
		}catch(error){
			message.error(error.message);
			this.setState({showLoading:false});
		}
		
  }

  getTotalEth=()=>{
	  var freevalue=this.state.isWhiteList?-0.1:0;
	  var mintvalue=this.state.mintcount*0.1;
	  return freevalue+mintvalue;
  }

  addHeartCount=()=>{
	  this.setState({heartcount:this.state.heartcount+1});
  }

  render(){
	const account=this.state.account;
	return (
				<div className="portal-container">
					{/* head start */}
					<div className='portal-headContainer'>
							<div className='head-titleContainer'>
								<div className='head-logo'></div>
							</div>
							<div className='head-wallelt' onClick={this.connectWallet.bind(this)}>{account?account.substring(0,5)+'....'+account.substring(account.length-5,account.length):'Connect Wallet'}</div>
							<div className='head-link head-twitter' onClick={this.openNewUrl.bind(this,'https://twitter.com/FasterCoin')}>
								<svg width="22" height="17" viewBox="0 0 22 17" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M19.7386 4.2367C19.7526 4.42263 19.7526 4.6086 19.7526 4.79453C19.7526 10.4656 15.2158 17 6.92388 17C4.36929 17 1.99621 16.2961 0 15.0742C0.362958 15.1141 0.711909 15.1273 1.08883 15.1273C3.19667 15.1273 5.13706 14.45 6.68656 13.2945C4.70432 13.2547 3.04314 12.0195 2.4708 10.3195C2.75001 10.3593 3.02918 10.3859 3.32236 10.3859C3.72717 10.3859 4.13202 10.3328 4.5089 10.2399C2.44291 9.84138 0.893367 8.11484 0.893367 6.02968V5.97657C1.4936 6.29533 2.19163 6.49454 2.93143 6.52107C1.71695 5.75075 0.921297 4.43592 0.921297 2.94841C0.921297 2.15155 1.14461 1.42108 1.53549 0.783574C3.75505 3.3867 7.09138 5.08667 10.8325 5.27264C10.7627 4.95389 10.7208 4.62189 10.7208 4.28985C10.7208 1.92576 12.731 0 15.2297 0C16.5279 0 17.7005 0.517967 18.5241 1.35469C19.5431 1.16876 20.5203 0.810147 21.3858 0.318752C21.0507 1.31487 20.3388 2.15159 19.4036 2.6828C20.3109 2.58988 21.1904 2.35076 22 2.01876C21.3859 2.86873 20.6181 3.62573 19.7386 4.2367Z" fill="white"/>
								</svg>
							</div>
							<div className='head-link head-opensea' onClick={this.openNewUrl.bind(this,'http://opensea.io/')}>
								<svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M1.30987 11.4203L1.38481 11.2978L6.02824 3.96179C6.09605 3.85725 6.25666 3.86806 6.30663 3.98342C7.08113 5.73901 7.75212 7.92358 7.43804 9.28262C7.30599 9.84138 6.93836 10.5984 6.52435 11.2978C6.47081 11.3987 6.4137 11.4996 6.34946 11.597C6.32091 11.6402 6.27093 11.6655 6.2174 11.6655H1.4455C1.317 11.6655 1.24205 11.5249 1.30987 11.4203ZM22 13.9438C22 14.0123 21.9608 14.0699 21.9037 14.0952C21.5432 14.2502 20.3118 14.8234 19.8015 15.5407C18.4952 17.3756 17.4993 20 15.2687 20H5.96757C2.6697 20 0 17.2927 0 13.951V13.8428C0 13.7563 0.0713828 13.6842 0.16061 13.6842H5.34296C5.44647 13.6842 5.52142 13.7779 5.51428 13.8825C5.47502 14.2213 5.53927 14.571 5.69988 14.8882C6.00683 15.5191 6.6457 15.912 7.33454 15.912H9.90073V13.8897H7.36309C7.2346 13.8897 7.15608 13.7383 7.23103 13.6301C7.25959 13.5869 7.28814 13.5436 7.32383 13.4932C7.56297 13.1471 7.90559 12.6136 8.24823 12.0043C8.48023 11.5934 8.70508 11.1536 8.8871 10.7138C8.9228 10.6345 8.95135 10.5516 8.98347 10.4722C9.03343 10.3317 9.08341 10.1983 9.11909 10.0685C9.15479 9.95674 9.1869 9.84139 9.21546 9.73324C9.30112 9.35833 9.33681 8.96179 9.33681 8.55083C9.33681 8.38861 9.32967 8.21918 9.3154 8.06056C9.30826 7.88392 9.28685 7.70728 9.26543 7.53064C9.25115 7.37563 9.2226 7.22062 9.19405 7.062C9.15479 6.82769 9.10482 6.59337 9.04771 6.35905L9.0263 6.26893C8.98347 6.10671 8.94421 5.9553 8.89424 5.79308C8.7479 5.28839 8.58372 4.79452 8.40528 4.33309C8.34103 4.14924 8.26964 3.9726 8.1947 3.79957C8.08762 3.5328 7.97698 3.29128 7.87704 3.06417C7.82351 2.95963 7.78067 2.8659 7.73785 2.76857C7.68788 2.66042 7.63791 2.55227 7.58438 2.44773C7.54868 2.36842 7.50586 2.29272 7.47731 2.22062L7.16322 1.63663C7.12039 1.55732 7.19177 1.45999 7.27743 1.48522L9.24045 2.02235H9.24759C9.25115 2.02235 9.25115 2.02235 9.25472 2.02235L9.51169 2.09805L9.79723 2.17736L9.90073 2.2062V1.031C9.90073 0.461428 10.3504 0 10.9108 0C11.1892 0 11.4426 0.115357 11.6211 0.302812C11.803 0.490267 11.9172 0.746215 11.9172 1.031V2.77938L12.1279 2.83706C12.1421 2.84427 12.16 2.85148 12.1743 2.86229C12.2242 2.89834 12.2992 2.95602 12.392 3.02812C12.467 3.0858 12.5454 3.15789 12.6383 3.2336C12.8274 3.38861 13.0558 3.58688 13.3021 3.81399C13.3664 3.87167 13.4306 3.92934 13.4913 3.99063C13.8089 4.28983 14.1658 4.63951 14.5085 5.02884C14.6048 5.14059 14.6977 5.24874 14.794 5.3677C14.8868 5.48666 14.9902 5.60202 15.076 5.71738C15.1938 5.87239 15.3151 6.03461 15.4258 6.20404C15.4757 6.28335 15.5364 6.36626 15.5828 6.44557C15.7256 6.65826 15.8468 6.87815 15.9646 7.09805C16.0146 7.19899 16.0647 7.31074 16.1075 7.41889C16.2395 7.71449 16.343 8.0137 16.4073 8.31651C16.4286 8.3814 16.4429 8.44989 16.4501 8.51478V8.5292C16.4714 8.61572 16.4786 8.70945 16.4857 8.80678C16.5143 9.11319 16.5 9.42322 16.4358 9.73324C16.4073 9.86301 16.3715 9.98558 16.3287 10.119C16.2823 10.2451 16.2394 10.3749 16.1824 10.5011C16.0717 10.757 15.9433 11.0166 15.7897 11.2545C15.7398 11.3446 15.6791 11.4384 15.622 11.5285C15.5577 11.6222 15.49 11.7123 15.4329 11.7988C15.3508 11.9106 15.2652 12.026 15.1759 12.1305C15.0974 12.2386 15.0189 12.3468 14.9297 12.4441C14.8083 12.5919 14.6905 12.7289 14.5656 12.8623C14.4942 12.9488 14.4157 13.0389 14.3336 13.1182C14.255 13.2084 14.173 13.2877 14.1016 13.3598C13.9766 13.4859 13.8767 13.5797 13.791 13.6626L13.5876 13.8464C13.5591 13.8753 13.5198 13.8897 13.4806 13.8897H11.9172V15.912H13.8839C14.3229 15.912 14.7405 15.757 15.0795 15.465C15.1938 15.3641 15.697 14.9243 16.2931 14.261C16.3144 14.2358 16.3395 14.2213 16.3679 14.2141L21.7966 12.628C21.9001 12.5991 22 12.6748 22 12.783V13.9438Z" fill="white"/>
								</svg>
							</div>
							<a className='head-link head-whitepaper' href={require('./assets/metacounter_en.pdf')} target='_blank'>
								{/* <a href={require('./assets/metacounter_en.pdf')} style={{display:'none'}}></a> */}
								<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
								    <path d="M3 14.79V13.67H15V14.79H3ZM16.88 1.54H18V18H3.18C2.33661 18 1.52777 17.665 0.9314 17.0686C0.335035 16.4722 0 15.6634 0 14.82L0 3.18C0 2.33661 0.335035 1.52777 0.9314 0.9314C1.52777 0.335035 2.33661 0 3.18 0L14.74 0V11.75H3.1C2.56957 11.75 2.06086 11.9607 1.68579 12.3358C1.31071 12.7109 1.1 13.2196 1.1 13.75V14.83C1.1 15.3763 1.31704 15.9003 1.70336 16.2866C2.08968 16.673 2.61365 16.89 3.16 16.89H16.86L16.88 1.54ZM3.18 1.12H13.62V10.63H3C2.29862 10.6479 1.62455 10.9056 1.09 11.36V3.18C1.08997 2.90693 1.14423 2.63659 1.24963 2.38468C1.35502 2.13277 1.50945 1.90434 1.70393 1.71265C1.89841 1.52096 2.12905 1.36986 2.38246 1.26811C2.63586 1.16637 2.90696 1.11602 3.18 1.12Z" fill="white"/>
								</svg>
							</a>
					</div>
					{/* head end */}
					<div className='portal-ColorContainer1'></div>
					<div className='portal-ColorContainer2'></div>
					<div className='portal-ContentContainer'>
						<div className='portal-ContentLeft'>
							<div className='content-title'>我们是连接Web2与Web3的Beta社区</div>
							<div className='content-desscription'>
								<ul>
									<li>我们是队友，而不是群友。</li>
									<li>我们一起挖掘价值，而不只是关注价格。</li>
									<li>我们虽在摸索，但始终在前进。</li>
								</ul>
							</div>
							<div className='mint-button' onClick={this.toggleMintModal.bind(this,true)}>Mint NFT</div>
							<div className='join-dc-button'>
								<img className='join-dc-button-img' src={require('./assets/dc.png')} ></img>
								<div className='join-dc-button-label' onClick={this.openNewUrl.bind(this,'https://discord.gg/Ny5HNFhb')}>Join Discord</div>
							</div>
							<div className='tokeninfo'>
								<div className='token-price'>Price&nbsp;:&nbsp;&nbsp;0.1&nbsp;ETH</div>
								<div className='token-total'>TotalSupply&nbsp;:&nbsp;&nbsp;{this.state.maxcount}</div>
							</div>
						</div>
						<div className='portal-ContentRight'>
							<div className='box-container'>
								<div className='gif-container'></div>
								<div className='gif-contentLeft'>
									<img className="gif-leftpng" src={require('./assets/gifleft.png')}></img>
									<div className='gif-leftContent-container'>
										<div className='gif-leftname'>FC CLUB</div>
										<div className='gif-leftprice'>0.1 ETH</div>
									</div>
									
								</div>
								<div className='gif-contentRight'>
									<div className='gif-contentRight-top'>WE ARE HERE</div>
									<div className='gif-contentRight-heartcount'>{this.state.heartcount}</div>
									<div className='gif-contentRight-heart' onClick={this.addHeartCount.bind(this)}></div>
								</div>
							</div>
						</div>
					</div>
					<div  className={document.body.clientHeight<700?"portal-footerContainer2":"portal-footerContainer1"}>
						<div className='footer-music'>
							<div className='music-logo'>
								<svg width="47" height="56" viewBox="0 0 47 56" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M8.65577 21.9225L18.8485 2.99312L40.3666 0L30.1738 19.0912L47 16.9071L0 55.0895L19.3339 20.79L8.65577 21.9225Z" fill="url(#paint0_linear_19_71)"/>
									<path d="M24.5921 19.7384L34.7849 0.80895L40.3666 0L30.1738 19.0912L24.5921 19.7384Z" fill="#4658EB"/>
									<path d="M1.6988 53.7143L37.9398 18.1205L47 16.9071L1.6988 53.7143Z" fill="#4658EB"/>
									<path d="M21.5181 16.3408L9.38382 21.8417L19.3339 20.79L21.5181 16.3408Z" fill="#7581F5"/>
									<defs>
									<linearGradient id="paint0_linear_19_71" x1="0.979167" y1="8.36179" x2="48.9006" y2="10.8672" gradientUnits="userSpaceOnUse">
									<stop stop-color="#9B51E0"/>
									<stop offset="1" stop-color="#3081ED"/>
									</linearGradient>
									</defs>
									</svg>
								</div>
								<div className='music-voice-img'>
									<span style={this.state.musicplay?{animationPlayState:'running'}:{animationPlayState:'paused'}}></span>
									<span style={this.state.musicplay?{animationPlayState:'running'}:{animationPlayState:'paused'}}></span>
									<span style={this.state.musicplay?{animationPlayState:'running'}:{animationPlayState:'paused'}}></span>
								</div>
								<div className='music-nameContainer'>
									<div className='music-name'>{this.state.musicdata[this.state.musicindex]['musicname']}</div>
									<div className='music-author-name'>{this.state.musicdata[this.state.musicindex]['author']}</div>
								</div>
								<div className='music-pre' onClick={this.changeMusic.bind(this,-1)}>
									<svg width="9" height="10" viewBox="0 0 9 10" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M9 0L2 5L9 10V0ZM2 5V0H0V10H2V5Z" fill="white"/>
									</svg>
								</div>
								<div className='music-button' onClick={this.togggleMusicState.bind(this)}>
									{
										!this.state.musicplay? 
										<svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
											    <path d="M0 0V12L10 6L0 0Z" fill="white"/>
												</svg>: 
										<svg width="10" height="12" viewBox="0 0 8 10" fill="none" xmlns="http://www.w3.org/2000/svg">
										        <path d="M0 0H3V10H0V0ZM5 0H8V10H5V0Z" fill="white" />
									           </svg>
									}

								</div>
								<div className='music-next' onClick={this.changeMusic.bind(this,1)}>
									<svg width="9" height="10" viewBox="0 0 9 10" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M0 0L7 5L0 10V0ZM7 5V0H9V10H7V5Z" fill="white"/>
									</svg>
								</div>
						</div>
						<div className='footer-label'>2022 ©️FC Club</div>
					</div>
					<audio  ref={(x) => {this.playMusic=x;}} src={require('./assets/music/'+this.state.musicdata[this.state.musicindex]['src'])} style={{"display":"none"}} ></audio>
					<div className='modal-background' style={this.state.showMintModal?{'display':null}:{'display':'none'}}></div>
					<div className='mint-modalContainer' style={this.state.showMintModal?{'display':null}:{'display':'none'}}>
						 <div className='modal-head'>
						    <div className='modal-title'>Mint</div>
							<div className='modal-close' onClick={this.toggleMintModal.bind(this,false)} title='close'></div>
						 </div>
						 <div className='modal-content'>
								<div className='content-counter'>
										<div className='counter counter-left' onClick={this.changeMintCount.bind(this,-1)} style={this.state.mintcount===0?{'pointerEvents':'none',color:'rgb(112,114,118)',backgroundColor:'rgba(25,29,35,1)'}:{'pointerEvents':null}}>-</div>
										<div className='counter-center' style={this.state.mintcount>0?{'color:':'#FFFFFF'}:{'color':'#333A3F'}}>{this.state.mintcount}</div>
										<div className='counter counter-right' onClick={this.changeMintCount.bind(this,1)} style={this.state.mintcount===2?{'pointerEvents':'none',color:'rgb(112,114,118)',backgroundColor:'rgba(25,29,35,1)'}:{'pointerEvents':null}}>+</div>
								</div>
								<div className='content-line'>
									 <div className='content-line-label'>Total Price:</div>
									 <div className='content-line-content'>{this.state.mintcount*0.1}ETH</div>
								</div>
								<div className='content-line'>
									 <div className='content-line-label'>Free Mint:</div>
									 <div className='content-line-content freemint'>-{this.state.isWhiteList?0.1:0}ETH</div>
								</div>
								<div className='content-line'>
									 <div className='content-line-label'>Subtotal:</div>
									 <div className='content-line-content subtotal'>{this.getTotalEth()}ETH</div>
								</div>
								<div className='content-mint-button' onClick={this.mintHandler.bind(this)} style={this.state.showLoading?{'pointerEvents':'none'}:{'pointerEvents':null}}><span style={this.state.showLoading?{'display':'none'}:{'display':null}}>Mint</span><Spin indicator={antIcon}  className='spinContainer' style={this.state.showLoading?{'display':null}:{'display':'none'}}></Spin></div>
						 </div>
					</div>
				</div>
			)
	}
}
export default App;
