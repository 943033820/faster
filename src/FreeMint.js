import React from 'react';
import {message,Col,Row} from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import './FreeMint.css';
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
const web3=new Web3(new Web3.providers.WebsocketProvider('wss://mainnet.infura.io/ws/v3/bb08b8ca1bae427e8b5ba450b8d00e23'));
const contract = new web3.eth.Contract(tokenAbi, tokenAddress);
var  ethereum='';
class FreeMint extends React.Component{
  state={
	    musicdata:[{"musicname":"1","author":'1','src':'1.mp3'},
	              {"musicname":"2","author":'2','src':'2.mp3'},
				  {"musicname":"3","author":'3','src':'3.mp3'},
	             ],
	    musicindex:0,
		musicplay:false,
		showWalletModal:false,
		account:'',
		showLoading:false,
		contentMargin:45,
		color1top:0,
		color2top:0,
		wallet:'',
		data:[]
  }
 componentDidMount(){
	this.getPastLogs();
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
  
  toggleWalletModal=(show)=>{
	this.setState({showWalletModal:show});
  }

  
  getAccountBlance=async ()=>{
	var balance=await web3.eth.getBalance(this.state.account);
	var count=web3.utils.fromWei(balance,'ether')
	return count;
  }

  

  getFreeMintInfo=async (transactionHash,count)=>{
	var transactionResult=await web3.eth.getTransaction(transactionHash);
	var value=await web3.utils.fromWei(transactionResult.value,'ether');
	try{
		const response = await fetch('https://api.opensea.io/api/v1/asset_contract/'+transactionResult.to);
		const req = await response.json();
		var mintprice=value/count;
		var length=mintprice.toString().split('.').length;
		if(length===2){
			var valuelength=mintprice.toString().split('.')[1].length;
			if(valuelength>3){
				mintprice=mintprice.toFixed(4);
			}
		}
		var data=this.state.data;
		var info={"name":req.name,'mintcount':count,'mintprice':mintprice,'address':transactionResult.to,'image_url':req.image_url};
		if(req.name&&req.image_url){
			data.unshift(info);
			this.setState({data:data});
		}
	}catch(e){
		console.info(e);
	}
  }

  subscribeLogs=()=>{
	// var params={};
	// var subscription = web3.eth.subscribe('logs', {
	// 	topics: ['0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef','0x0000000000000000000000000000000000000000000000000000000000000000']
	// },async(error, result)=>{
	// 	if(!error){
	// 		if(result.data=='0x'){
	// 			if(!params[result.transactionHash]){
	// 				if(params) this.getFreeMintInfo(params);
	// 				params={};
	// 				params[result.transactionHash]=1;
	// 			}else{
	// 				params[result.transactionHash]++;
	// 			}
	// 		}else{

	// 		}
			
	// 	}
	// }) 
  }

  getPastLogs=async ()=>{
	var result=await web3.eth.getPastLogs({topics: ['0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef','0x0000000000000000000000000000000000000000000000000000000000000000']});
	var data={};
	for(var i=0;i<result.length;i++){
		//if(result[i].data!='0x') continue;
		var transactionHash=result[i].transactionHash;
		if(data[transactionHash]){
			data[transactionHash]=data[transactionHash]+1;
		}else{
			data[transactionHash]=1;
		}
	}
	// console.info(result);
	// console.info(data);
	for(var transactionHash in data){
		//console.info(transactionHash)
		var result=await this.getFreeMintInfo(transactionHash,data[transactionHash]);
	}
  }

  getInfoByBlock=(blocknumber)=>{
	//  var result=await web3.eth.getBlock(blocknumber);
	//  var transactions=result.transactions;
	//  for(var i=0;i<transactions.length;i++){
	// 	var tresult=await web3.eth.getTransaction(transactions[i]);
	// 	var value=await web3.utils.fromWei(tresult.value,'ether');
	// 	console.info(tresult);
	//  }
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
						<Col span={24}>
							{
								this.state.data.map((item,i)=>{
									return <div className='line-container' key={i}>
									<div className='line-img'>
									   <img src={item.image_url}/>
									</div>
									<div className='line-content'>
										<div className='line-content-top'>
											 <div className='line-content-top-name'>{item.name}</div>
											 <div className='line-content-top-count'>X{item.mintcount}</div>
										</div>
										<div className='line-content-bottom'>
											 <div className='line-content-bottom-mintprice'>mint price:</div>
											 <div className='line-content-bottom-price'>{item.mintprice}</div>
										</div>
									</div>
									<div className='line-link'>
										<div className='line-link-etherscan'>
											<a href={'https://etherscan.io/address/'+item.address} target='_blank' rel="noopener noreferrer">
											   <svg data-v-0088b406="" fill="#8A939B" height="18" viewBox="0 0 293.775 293.671" width="18" xmlns="http://www.w3.org/2000/svg"><g data-v-0088b406="" id="etherscan-logo-circle" transform="translate(-219.378 -213.33)"><path data-v-0088b406="" d="M280.433,353.152A12.45,12.45,0,0,1,292.941,340.7l20.737.068a12.467,12.467,0,0,1,12.467,12.467v78.414c2.336-.692,5.332-1.43,8.614-2.2a10.389,10.389,0,0,0,8.009-10.11V322.073a12.469,12.469,0,0,1,12.468-12.47h20.778a12.469,12.469,0,0,1,12.467,12.467v90.279s5.2-2.106,10.269-4.245a10.408,10.408,0,0,0,6.353-9.577V290.9a12.466,12.466,0,0,1,12.466-12.467h20.778A12.468,12.468,0,0,1,450.815,290.9v88.625c18.014-13.055,36.271-28.758,50.759-47.639a20.926,20.926,0,0,0,3.185-19.537,146.6,146.6,0,0,0-136.644-99.006c-81.439-1.094-148.744,65.385-148.736,146.834a146.371,146.371,0,0,0,19.5,73.45,18.56,18.56,0,0,0,17.707,9.173c3.931-.346,8.825-.835,14.643-1.518a10.383,10.383,0,0,0,9.209-10.306V353.152" data-name="Path 1" id="Path_1"></path> <path data-v-0088b406="" d="M244.417,398.641A146.808,146.808,0,0,0,477.589,279.9c0-3.381-.157-6.724-.383-10.049-53.642,80-152.686,117.4-232.79,128.793" data-name="Path 2" id="Path_2" transform="translate(35.564 80.269)"></path></g></svg>
											</a>
										</div>
										<div className='line-link-opensea'>
											<a href='#' target='_blank' rel="noopener noreferrer">
											<svg data-v-0088b406="" fill="#8A939B" height="18" viewBox="0 0 293.775 293.671" width="18" xmlns="http://www.w3.org/2000/svg"><g data-v-0088b406="" id="etherscan-logo-circle" transform="translate(-219.378 -213.33)"><path data-v-0088b406="" d="M280.433,353.152A12.45,12.45,0,0,1,292.941,340.7l20.737.068a12.467,12.467,0,0,1,12.467,12.467v78.414c2.336-.692,5.332-1.43,8.614-2.2a10.389,10.389,0,0,0,8.009-10.11V322.073a12.469,12.469,0,0,1,12.468-12.47h20.778a12.469,12.469,0,0,1,12.467,12.467v90.279s5.2-2.106,10.269-4.245a10.408,10.408,0,0,0,6.353-9.577V290.9a12.466,12.466,0,0,1,12.466-12.467h20.778A12.468,12.468,0,0,1,450.815,290.9v88.625c18.014-13.055,36.271-28.758,50.759-47.639a20.926,20.926,0,0,0,3.185-19.537,146.6,146.6,0,0,0-136.644-99.006c-81.439-1.094-148.744,65.385-148.736,146.834a146.371,146.371,0,0,0,19.5,73.45,18.56,18.56,0,0,0,17.707,9.173c3.931-.346,8.825-.835,14.643-1.518a10.383,10.383,0,0,0,9.209-10.306V353.152" data-name="Path 1" id="Path_1"></path> <path data-v-0088b406="" d="M244.417,398.641A146.808,146.808,0,0,0,477.589,279.9c0-3.381-.157-6.724-.383-10.049-53.642,80-152.686,117.4-232.79,128.793" data-name="Path 2" id="Path_2" transform="translate(35.564 80.269)"></path></g></svg>
											</a>
										</div>
										<div className='line-link-website'>
											<a href='#' target='_blank' rel="noopener noreferrer">
											<svg data-v-0088b406="" fill="#8A939B" height="18" viewBox="0 0 293.775 293.671" width="18" xmlns="http://www.w3.org/2000/svg"><g data-v-0088b406="" id="etherscan-logo-circle" transform="translate(-219.378 -213.33)"><path data-v-0088b406="" d="M280.433,353.152A12.45,12.45,0,0,1,292.941,340.7l20.737.068a12.467,12.467,0,0,1,12.467,12.467v78.414c2.336-.692,5.332-1.43,8.614-2.2a10.389,10.389,0,0,0,8.009-10.11V322.073a12.469,12.469,0,0,1,12.468-12.47h20.778a12.469,12.469,0,0,1,12.467,12.467v90.279s5.2-2.106,10.269-4.245a10.408,10.408,0,0,0,6.353-9.577V290.9a12.466,12.466,0,0,1,12.466-12.467h20.778A12.468,12.468,0,0,1,450.815,290.9v88.625c18.014-13.055,36.271-28.758,50.759-47.639a20.926,20.926,0,0,0,3.185-19.537,146.6,146.6,0,0,0-136.644-99.006c-81.439-1.094-148.744,65.385-148.736,146.834a146.371,146.371,0,0,0,19.5,73.45,18.56,18.56,0,0,0,17.707,9.173c3.931-.346,8.825-.835,14.643-1.518a10.383,10.383,0,0,0,9.209-10.306V353.152" data-name="Path 1" id="Path_1"></path> <path data-v-0088b406="" d="M244.417,398.641A146.808,146.808,0,0,0,477.589,279.9c0-3.381-.157-6.724-.383-10.049-53.642,80-152.686,117.4-232.79,128.793" data-name="Path 2" id="Path_2" transform="translate(35.564 80.269)"></path></g></svg>
											</a>
										</div> 
									</div>
								</div>
								})
							}
						</Col>
						{/* <Col span={6}>

						</Col> */}
					</div>
					<audio  ref={(x) => {this.playMusic=x;}} src={require('./assets/music/'+this.state.musicdata[this.state.musicindex]['src'])} style={{"display":"none"}} autoPlay={this.state.musicplay?true:false}></audio>
					<audio  src={require('./assets/music/2.mp3')} style={{"display":"none"}}></audio>
					<audio  src={require('./assets/music/3.mp3')} style={{"display":"none"}}></audio>
					<div className='modal-background' style={this.state.showMintModal||this.state.showWalletModal?{'display':null}:{'display':'none'}}></div>
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
export default FreeMint;
