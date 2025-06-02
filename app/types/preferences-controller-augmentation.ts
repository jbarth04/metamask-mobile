declare module '@metamask/preferences-controller' {
  interface PreferencesController {
    setTokenNetworkFilter(filter: any): void;
    setDisplayNftMedia(enabled: boolean): void;
    setUseNftDetection(enabled: boolean): void;
    setPrivacyMode(privacyMode: boolean): void;
    setTokenSortConfig(tokenSortConfig: { key: string; order: 'asc' | 'dsc'; sortCallback: string }): void;
    setShowMultiRpcModal(showMultiRpcModal: boolean): void;
    setShowTestNetworks(showTestNetworks: boolean): void;
    setUseTokenDetection(enabled: boolean): void;
    setIsMultiAccountBalancesEnabled(enabled: boolean): void;
    setIsIpfsGatewayEnabled(enabled: boolean): void;
    setIpfsGateway(gateway: string): void;
    setEnableNetworkIncomingTransactions(chainId: string, enabled: boolean): void;
    setSecurityAlertsEnabled(enabled: boolean): void;
    setUseTransactionSimulations(enabled: boolean): void;
    setFeatureFlag(flag: string, enabled: boolean): void;
    setSelectedAddress(address: string): void;
    setAccountLabel(address: string, label: string): void;
    state: PreferencesState;
  }

  export interface PreferencesState {
    displayNftMedia?: boolean;
    tokenNetworkFilter?: any;
    showMultiRpcModal?: boolean;
    selectedAddress?: string;
    useTokenDetection?: boolean;
    useNftDetection?: boolean;
    privacyMode?: boolean;
    showTestNetworks?: boolean;
    isMultiAccountBalancesEnabled?: boolean;
    isIpfsGatewayEnabled?: boolean;
    ipfsGateway?: string;
    securityAlertsEnabled?: boolean;
    useTransactionSimulations?: boolean;
    tokenSortConfig?: {
      key: string;
      order: 'asc' | 'dsc';
      sortCallback: string;
    };
    [key: string]: any;
  }
}
