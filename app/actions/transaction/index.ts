import TransactionTypes from '../../core/TransactionTypes';

const {
  ASSET: { ETH, ERC20, ERC721 },
} = TransactionTypes;

export interface ResetTransactionAction {
  type: 'RESET_TRANSACTION';
}

export interface NewAssetTransactionAction {
  type: 'NEW_ASSET_TRANSACTION';
  selectedAsset: any;
  assetType: string;
}

export interface SetRecipientAction {
  type: 'SET_RECIPIENT';
  from: string;
  to: string;
  ensRecipient?: string;
  transactionToName?: string;
  transactionFromName?: string;
}

export interface SetSelectedAssetAction {
  type: 'SET_SELECTED_ASSET';
  selectedAsset: any;
  assetType: string;
}

export interface PrepareTransactionAction {
  type: 'PREPARE_TRANSACTION';
  transaction: any;
}

export interface SetTransactionSecurityAlertResponseAction {
  type: 'SET_TRANSACTION_SECURITY_ALERT_RESPONSE';
  transactionId: string;
  securityAlertResponse: any;
}

export interface SetTransactionObjectAction {
  type: 'SET_TRANSACTION_OBJECT';
  transaction: any;
}

export interface SetTransactionIdAction {
  type: 'SET_TRANSACTION_ID';
  transactionId: string;
}

export interface SetTokensTransactionAction {
  type: 'SET_TOKENS_TRANSACTION';
  asset: any;
}

export interface SetEtherTransactionAction {
  type: 'SET_ETHER_TRANSACTION';
  transaction: any;
}

export interface SetNonceAction {
  type: 'SET_NONCE';
  nonce: string;
}

export interface SetProposedNonceAction {
  type: 'SET_PROPOSED_NONCE';
  proposedNonce: string;
}

export interface SetMaxValueModeAction {
  type: 'SET_MAX_VALUE_MODE';
  maxValueMode: boolean;
}

export interface SetTransactionValueAction {
  type: 'SET_TRANSACTION_VALUE';
  value: string;
}

export function resetTransaction(): ResetTransactionAction {
  return {
    type: 'RESET_TRANSACTION',
  };
}

export function newAssetTransaction(selectedAsset: any): NewAssetTransactionAction {
  return {
    type: 'NEW_ASSET_TRANSACTION',
    selectedAsset,
    assetType: selectedAsset.isETH
      ? ETH
      : selectedAsset.tokenId
      ? ERC721
      : ERC20,
  };
}

export function setRecipient(
  from: string,
  to: string,
  ensRecipient?: string,
  transactionToName?: string,
  transactionFromName?: string,
): SetRecipientAction {
  return {
    type: 'SET_RECIPIENT',
    from,
    to,
    ensRecipient,
    transactionToName,
    transactionFromName,
  };
}

export function setSelectedAsset(selectedAsset: any): SetSelectedAssetAction {
  return {
    type: 'SET_SELECTED_ASSET',
    selectedAsset,
    assetType: selectedAsset.isETH
      ? ETH
      : selectedAsset.tokenId
      ? ERC721
      : ERC20,
  };
}

export function prepareTransaction(transaction: any): PrepareTransactionAction {
  return {
    type: 'PREPARE_TRANSACTION',
    transaction,
  };
}

export function setTransactionSecurityAlertResponse(
  transactionId: string,
  securityAlertResponse: any,
): SetTransactionSecurityAlertResponseAction {
  return {
    type: 'SET_TRANSACTION_SECURITY_ALERT_RESPONSE',
    transactionId,
    securityAlertResponse,
  };
}

export function setTransactionObject(transaction: any): SetTransactionObjectAction {
  return {
    type: 'SET_TRANSACTION_OBJECT',
    transaction,
  };
}

export function setTransactionId(transactionId: string): SetTransactionIdAction {
  return {
    type: 'SET_TRANSACTION_ID',
    transactionId,
  };
}

export function setTokensTransaction(asset: any): SetTokensTransactionAction {
  return {
    type: 'SET_TOKENS_TRANSACTION',
    asset,
  };
}

export function setEtherTransaction(transaction: any): SetEtherTransactionAction {
  return {
    type: 'SET_ETHER_TRANSACTION',
    transaction,
  };
}

export function setNonce(nonce: string): SetNonceAction {
  return {
    type: 'SET_NONCE',
    nonce,
  };
}

export function setProposedNonce(proposedNonce: string): SetProposedNonceAction {
  return {
    type: 'SET_PROPOSED_NONCE',
    proposedNonce,
  };
}

export function setMaxValueMode(maxValueMode: boolean): SetMaxValueModeAction {
  return {
    type: 'SET_MAX_VALUE_MODE',
    maxValueMode,
  };
}

export function setTransactionValue(value: string): SetTransactionValueAction {
  return {
    type: 'SET_TRANSACTION_VALUE',
    value,
  };
}
