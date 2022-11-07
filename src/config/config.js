import NFT from '../abi/NFT.json';

export const DEBUG = false;
export const MAINNET_RPC_URL = "https://mainnet.ethereumpow.org";
export const TESTNET_RPC_URL = "https://rpc.testnet.fantom.network/";

export const contractAddress = NFT.address;

export const NETWORK_ID = DEBUG ? 4002 : 10001;
export const RPC_URL = NETWORK_ID == 4002 ? TESTNET_RPC_URL : MAINNET_RPC_URL;
export const NETWORK_NAME = DEBUG ? 'Fantom_Test' : 'Mainnet'

export const OPENSEA_LINK = 's';
export const WHITELIST_LIMIT = 300;

export const PRESALE_DATE = 'Nov 8, 2022';