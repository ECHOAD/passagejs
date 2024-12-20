/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.35.7.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/
import { MsgExecuteContractEncodeObject } from "@cosmjs/cosmwasm-stargate";
import { Timestamp, Uint128, Coin, ExpiryRange } from "./MarketplaceV2.types";
export interface MarketplaceV2Msg {
    contractAddress: string;
    sender: string;
    updateConfig: ({ askExpiry, bidExpiry, minPrice, operators, tradingFeeBps }: {
        askExpiry?: ExpiryRange;
        bidExpiry?: ExpiryRange;
        minPrice?: Uint128;
        operators?: string[];
        tradingFeeBps?: number;
    }, _funds?: Coin[]) => MsgExecuteContractEncodeObject;
    setAsk: ({ expiresAt, fundsRecipient, price, reserveFor, tokenId }: {
        expiresAt: Timestamp;
        fundsRecipient?: string;
        price: Coin;
        reserveFor?: string;
        tokenId: string;
    }, _funds?: Coin[]) => MsgExecuteContractEncodeObject;
    removeAsk: ({ tokenId }: {
        tokenId: string;
    }, _funds?: Coin[]) => MsgExecuteContractEncodeObject;
    setBid: ({ expiresAt, price, tokenId }: {
        expiresAt: Timestamp;
        price: Coin;
        tokenId: string;
    }, _funds?: Coin[]) => MsgExecuteContractEncodeObject;
    removeBid: ({ tokenId }: {
        tokenId: string;
    }, _funds?: Coin[]) => MsgExecuteContractEncodeObject;
    acceptBid: ({ bidder, tokenId }: {
        bidder: string;
        tokenId: string;
    }, _funds?: Coin[]) => MsgExecuteContractEncodeObject;
    setCollectionBid: ({ expiresAt, price, units }: {
        expiresAt: Timestamp;
        price: Coin;
        units: number;
    }, _funds?: Coin[]) => MsgExecuteContractEncodeObject;
    removeCollectionBid: (_funds?: Coin[]) => MsgExecuteContractEncodeObject;
    acceptCollectionBid: ({ bidder, tokenId }: {
        bidder: string;
        tokenId: string;
    }, _funds?: Coin[]) => MsgExecuteContractEncodeObject;
}
export declare class MarketplaceV2MsgComposer implements MarketplaceV2Msg {
    sender: string;
    contractAddress: string;
    constructor(sender: string, contractAddress: string);
    updateConfig: ({ askExpiry, bidExpiry, minPrice, operators, tradingFeeBps }: {
        askExpiry?: ExpiryRange;
        bidExpiry?: ExpiryRange;
        minPrice?: Uint128;
        operators?: string[];
        tradingFeeBps?: number;
    }, _funds?: {
        denom?: string | undefined;
        amount?: string | undefined;
    }[] | undefined) => MsgExecuteContractEncodeObject;
    setAsk: ({ expiresAt, fundsRecipient, price, reserveFor, tokenId }: {
        expiresAt: Timestamp;
        fundsRecipient?: string;
        price: Coin;
        reserveFor?: string;
        tokenId: string;
    }, _funds?: {
        denom?: string | undefined;
        amount?: string | undefined;
    }[] | undefined) => MsgExecuteContractEncodeObject;
    removeAsk: ({ tokenId }: {
        tokenId: string;
    }, _funds?: {
        denom?: string | undefined;
        amount?: string | undefined;
    }[] | undefined) => MsgExecuteContractEncodeObject;
    setBid: ({ expiresAt, price, tokenId }: {
        expiresAt: Timestamp;
        price: Coin;
        tokenId: string;
    }, _funds?: {
        denom?: string | undefined;
        amount?: string | undefined;
    }[] | undefined) => MsgExecuteContractEncodeObject;
    removeBid: ({ tokenId }: {
        tokenId: string;
    }, _funds?: {
        denom?: string | undefined;
        amount?: string | undefined;
    }[] | undefined) => MsgExecuteContractEncodeObject;
    acceptBid: ({ bidder, tokenId }: {
        bidder: string;
        tokenId: string;
    }, _funds?: {
        denom?: string | undefined;
        amount?: string | undefined;
    }[] | undefined) => MsgExecuteContractEncodeObject;
    setCollectionBid: ({ expiresAt, price, units }: {
        expiresAt: Timestamp;
        price: Coin;
        units: number;
    }, _funds?: {
        denom?: string | undefined;
        amount?: string | undefined;
    }[] | undefined) => MsgExecuteContractEncodeObject;
    removeCollectionBid: (_funds?: {
        denom?: string | undefined;
        amount?: string | undefined;
    }[] | undefined) => MsgExecuteContractEncodeObject;
    acceptCollectionBid: ({ bidder, tokenId }: {
        bidder: string;
        tokenId: string;
    }, _funds?: {
        denom?: string | undefined;
        amount?: string | undefined;
    }[] | undefined) => MsgExecuteContractEncodeObject;
}
