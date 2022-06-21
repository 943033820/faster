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
const chainId='1';
const tokenAddress='0xa6821f25631588910cb529f92929a84dbe06abb0';
const tokenAbi=[{"inputs":[{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"symbol","type":"string"},{"internalType":"uint256","name":"saleStart","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"FC_PROVENANCE","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Max_Fasters","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"REVEAL_TIMESTAMP","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"emergencySetStartingIndexBlock","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"fasterPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxFasterPurchase","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"numberOfTokens","type":"uint256"}],"name":"mintFaster","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"removeWhiteListUser","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"reserveFasters","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"baseURI","type":"string"}],"name":"setBaseURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"provenanceHash","type":"string"}],"name":"setProvenanceHash","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"revealTimeStamp","type":"uint256"}],"name":"setRevealTimestamp","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"setStartingIndex","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"users","type":"address[]"}],"name":"setWhiteList","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"startingIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"startingIndexBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"whiteList","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}];
const web3=new Web3(new Web3.providers.HttpProvider('https://rinkeby.infura.io/v3/bb08b8ca1bae427e8b5ba450b8d00e23'));
const contract = new web3.eth.Contract(tokenAbi, tokenAddress);
var  ethereum='';
class App extends React.Component{
  state={
	    musicdata:[{"musicname":"1","author":'1','src':'1.mp3'},
	              {"musicname":"2","author":'2','src':'2.mp3'},
				  {"musicname":"3","author":'3','src':'3.mp3'},
	             ],
	    musicindex:0,
		musicplay:false,
		showMintModal:false,
		showWalletModal:false,
		mintcount:1,
		account:'',
		maxcount:333,
		isWhiteList:false,
		showLoading:false,
		heartcount:999,
		contentMargin:45,
		color1top:0,
		color2top:0,
		wallet:''
  }
 componentDidMount(){
	//this.connectWallet();
	this.resize();
	window.addEventListener('resize',()=>{
		this.resize();
	});
 }

 resize=()=>{
	var height=document.body.offsetHeight;
	var contentMargin=(height-810)/2;
	this.setState({contentMargin:contentMargin,color1top:contentMargin+60,color2top:contentMargin+640});
 }

 connectWallet=async (wallet)=>{
	this.setState({wallet:wallet})
	if(wallet==='bitkeep'){
         //判断用户是否安装钱包插件
		if (typeof window.bitkeep.ethereum === "undefined") {
			message.warning("请安装BitKeep")
			window.open('https://bitkeep.com/download?type=2');
			return
		}else{
			ethereum=window.bitkeep.ethereum;
		}
	}else if(wallet==='metamask'){
		if (typeof window.ethereum === "undefined") {
			message.warning("请安装MetaMask")
			window.open('https://metamask.io');
			return
		}else{
			ethereum=window.ethereum;
		}
	}
    ethereum.enable()
	.catch((reason)=>{
		//如果用户拒绝了登录请求
		if (reason === "User rejected provider access") {
		} else {
			message.warning("There was a problem signing you in");
		}
	}).then((accounts)=>{
		// 判断是否连接erc
		if (ethereum.networkVersion+''!==chainId) {
			message.warning("please connect erc mainnet!");
			this.changeChain(chainId);
			return;
		}
		this.setState({account:accounts[0].toLowerCase(),showWalletModal:false});
		// contract.methods.whiteList(accounts[0]).call().then((res,err)=>{
		// 	if(!err) this.setState({isWhiteList:res});
		// });
		ethereum.on("accountsChanged",(accounts)=>{
			//window.location.reload();
			this.connectWallet(wallet);
		});
		ethereum.on("chainChanged",(chainId1)=>{
			window.location.reload();
		});
	});
 }

 changeChain=async (chainId)=>{
	try {
		await ethereum.request({
		  method: 'wallet_switchEthereumChain',
		  params: [{ chainId:web3.utils.toHex(chainId) }],
		});
	  } catch (switchError) {
		// This error code indicates that the chain has not been added to MetaMask.
		if (switchError.code === 4902) {
		  try {
			await ethereum.request({
			  method: 'wallet_addEthereumChain',
			  params: [
				{
				  chainId:web3.utils.toHex(chainId),
				  chainName: '以太坊 Ethereum 主网络',
				  rpcUrls: ['https://mainnet.infura.io/v3/'] /* ... */,
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
		this.playMusic.removeEventListener('ended',()=>{}); 
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
	message.success('coming soon');
	//this.setState({showMintModal:show});
  }

  toggleWalletModal=(show)=>{
	this.setState({showWalletModal:show});
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
							<div className='head-wallelt' onClick={this.toggleWalletModal.bind(this,true)}>{account?account.substring(0,5)+'....'+account.substring(account.length-5,account.length):'Connect Wallet'}</div>
							<a className='head-link head-twitter' href='https://twitter.com/FasterCClub' target='_blank' rel="noopener noreferrer" >
								<div className='twitter-svg'></div>
							</a>
							<a className='head-link head-opensea' href='https://opensea.io/' target='_blank' rel="noopener noreferrer" >
							    <div className='os-svg'></div>
							
							</a>
							<a className='head-link head-whitepaper' href='https://discord.com/invite/Ny5HNFhb' target='_blank' rel="noopener noreferrer" >
							    <div className='wp-svg'></div>								
							</a>
							<div className='head-link head-music' onClick={this.togggleMusicState.bind(this)}></div>
					</div>
					{/* head end */}
					<div className='portal-ColorContainer1' style={{top:this.state.color1top}}></div>
					<div className='portal-ColorContainer2' style={{top:this.state.color2top}}></div>
					<div className='portal-ContentContainer' style={{marginTop:this.state.contentMargin+'px'}}>
						<div className='portal-ContentLeft'>
						    <div className='content-title'><div className='yellowtitle'>链</div><div>接</div><div className='rec'></div></div>
							<div className='content-title'><div>队友</div><div className='rec'></div><div>WEB3</div><div className='rec'></div><div>元宇宙</div></div>
							<div className='content-desscription'>
								<ul>
									<li>我们是队友，而不是群友</li>
									<li>我们一起挖掘价值，而不只是关注价格</li>
									<li>我们虽在摸索，但始终在前进</li>
								</ul>
							</div>
							<div className='mint-button' onClick={this.toggleMintModal.bind(this,true)}>Mint NFT</div>
							<div className='join-dc-button'  onClick={this.openNewUrl.bind(this,'https://fc-club.gitbook.io/fcclub-introduction/')}>
								<img className='join-dc-button-img'></img>
								<div className='join-dc-button-label'>Flash Deck</div>
							</div>
							<div className='tokeninfo'>
								<div className='token-price'>Price : 0.1 ETH</div>
								<div className='token-total'>Total Supply : {this.state.maxcount}</div>
							</div>
						</div>
						<div className='portal-ContentRight'>
							<div className='box-container'>
								<div className='gif-container'></div>
							</div>
						</div>
					</div>
					<audio  ref={(x) => {this.playMusic=x;}} src={require('./assets/music/'+this.state.musicdata[this.state.musicindex]['src'])} style={{"display":"none"}} autoPlay={this.state.musicplay?true:false}></audio>
					<audio  src={require('./assets/music/2.mp3')} style={{"display":"none"}}></audio>
					<audio  src={require('./assets/music/3.mp3')} style={{"display":"none"}}></audio>
					<div className='modal-background' style={this.state.showMintModal||this.state.showWalletModal?{'display':null}:{'display':'none'}}></div>
					<div className='modalContainer' style={this.state.showMintModal?{'display':null}:{'display':'none'}}>
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
					<div className='modalContainer' style={this.state.showWalletModal?{'display':null}:{'display':'none'}}>
						 <div className='modal-head'>
						    <div className='modal-title'>Wallet</div>
							<div className='modal-close' onClick={this.toggleWalletModal.bind(this,false)} title='close'></div>
						 </div>
						 <div className='modal-content'>
								<div className='wallet-content-line' onClick={this.connectWallet.bind(this,'metamask')} id={this.state.wallet==='metamask'?'walletChoosed':''}>
									 <img className='content-line-svg metamask'/>
									 <div className='content-line-content'>MetaMask</div>
								</div>
								<div className='wallet-content-line' onClick={this.connectWallet.bind(this,'bitkeep')} id={this.state.wallet==='bitkeep'?'walletChoosed':''}>
									 <img className='content-line-svg bitkeep'/>
									 <div className='content-line-content'>BitKeep</div>
								</div>
						 </div>
					</div>

				</div>
			)
	}
}
export default App;
