export interface tokenInfo {
    contract_decimals: number;
    contract_name: string;
    contract_ticker_symbol: string;
    contract_address: string;
    supports_erc?: any;
    logo_url: string;
    type: string;
    balance: string;
    balance_24h?: any;
    quote_rate: number;
    quote: number;
    nft_data?: any;
}

export interface balanceInfo {
    address: string;
    updated_at: string;
    next_update_at: string;
    quote_currency: string;
    chain_id: number;
    items: tokenInfo[];
    pagination?: any;
}

export interface tokenBalances {
    data: balanceInfo;
    error: boolean;
    error_message?: any;
    error_code?: any;
}