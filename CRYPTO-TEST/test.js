const CONTRACTS = {
    'PCS_ROUTER' : '0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D',
    'WBTC' : '0xBb2b8038a1640196FbE3e38816F3e67Cba72D940',
    'USDT' : '0x0d4a11d5EEaaC28EC3F61d100daF4d40471f1852'
}
const provider = new ethers.providers.JsonRpcProvider('https://mainnet.infura.io/v3/7f2659baca8241b1bd7e66897392af6f');
const router = new ethers.Contract( CONTRACTS['PCS_ROUTER'], ['function getAmountsOut(uint amountIn, address[] memory path) public view returns (uint[] memory amounts)', 'function symbol() external view returns (string memory)'], provider);

const main = async function() {
    updatePrice('main-text-wbtc', 'WBTC');
    setTimeout(main, 5000);
}   

const updatePrice = async function(elementId, contracts) {
    let price = await router.getAmountsOut(ethers.utils.parseUnits('1.0', 'ether'),[CONTRACTS[contracts],CONTRACTS['USDT']]);
    document.getElementById(elementId).innerHTML = parseFloat(ethers.utils.formatEther(price[1])).toFixed(4).toLocaleString("en-US");
}
main();


