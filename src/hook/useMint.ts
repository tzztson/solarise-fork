import { useContractFunction } from "@usedapp/core"
import { contractAddress } from "../config/config"
import useContract from "./useContract"
import contractAbi from "../abi/NFT.json";

export const useMintNormal = () => {
    const contract = useContract(contractAddress, contractAbi.abi);
    const { state, send } = useContractFunction(contract, 'mints');
    return {state, send};
}

export const useMintWhitelist = () => {
    const contract = useContract(contractAddress, contractAbi.abi);
    const { state, send } = useContractFunction(contract, 'whiteListMints');
    return {state, send};
}