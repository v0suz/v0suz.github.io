
const CONTRACTS = {
    'PCS_ROUTER' : '0x10ed43c718714eb63d5aa57b78b54704e256024e',
    'WBNB' : '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
    'BUSD' : '0xe9e7cea3dedca5984780bafc599bd69add087d56',
    'USDT' : '0x55d398326f99059ff775485246999027b3197955',
    'ETH' : '0x2170ed0880ac9a755fd29b2688956bd959f933f8',
    'BTCB': '0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c',
    'ADA' : '0x3ee2200efb3400fabb9aacf31297cbdd1d435d47',
    'BELT' : '0xE0e514c71282b6f4e823703a39374Cf58dc3eA4f',
    'CAKE' : '0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82',
    'ALPACA' : '0x8F0528cE5eF7B51152A59745bEfDD91D97091d2F',
    'BUNNY' : '0xC9849E6fdB743d08fAeE3E34dd2D1bc69EA11a51',
    
    

}
const provider = new ethers.providers.JsonRpcProvider('https://bsc-dataseed.binance.org/');
const router = new ethers.Contract( CONTRACTS['PCS_ROUTER'], ['function getAmountsOut(uint amountIn, address[] memory path) public view returns (uint[] memory amounts)', 'function symbol() external view returns (string memory)'], provider);

const main = async function() {
    updatePrice('main-text-bnb', 'WBNB');
    updatePrice('main-text-eth', 'ETH');
    updatePrice('main-text-btc', 'BTCB');
    updatePrice('main-text-ada', 'ADA');
    updatePrice('main-text-belt', 'BELT');
    updatePrice('main-text-cake', 'CAKE');
    updatePrice('main-text-alpaca', 'ALPACA');
    updatePrice('main-text-bunny', 'BUNNY');
    setTimeout(main, 5000);
}   

const updatePrice = async function(elementId, contracts) {
    let price = await router.getAmountsOut(ethers.utils.parseUnits('1.0', 'ether'),[CONTRACTS[contracts],CONTRACTS['USDT']]);
    document.getElementById(elementId).innerHTML = parseFloat(ethers.utils.formatEther(price[1])).toFixed(4).toLocaleString("en-US");
}

main();