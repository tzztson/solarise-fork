import { useContractFunction,useCall,useEthers } from "@usedapp/core"
import useContract from "./useContract"
import TOKEN from "../abi/TOKEN.json";
import NFT from "../abi/NFT.json";
import { BigNumber } from "ethers";

export const useApprove = () => {
    const contract = useContract(TOKEN.address, TOKEN.abi);
    const { state, send } = useContractFunction(contract, 'approve');
    return {state, send};
}

export const useAllowance = () => {
    const { account, active } = useEthers();
    const contract = useContract(TOKEN.address, TOKEN.abi);
    const {value, error} = useCall({
        contract: contract,
        method: "allowance",
        args: [account,NFT.address]
    }) || {value:[ BigNumber.from(0)]};
    return value ? value[0] : BigNumber.from(0);
}

export const useBalance = () => {
    const { account, active } = useEthers();
    const contract = useContract(TOKEN.address, TOKEN.abi);
    const {value, error} = useCall({
        contract: contract,
        method: "balanceOf",
        args: [account]
    }) || {value: [BigNumber.from(0)]};
    return value ? value[0] : BigNumber.from(0);
}