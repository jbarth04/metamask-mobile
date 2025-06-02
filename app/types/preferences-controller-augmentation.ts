declare module '@metamask/preferences-controller' {
  interface PreferencesController {
    setTokenNetworkFilter(filter: any): void;
    setDisplayNftMedia(enabled: boolean): void;
    setUseNftDetection(enabled: boolean): void;
  }

  export interface PreferencesState {
    displayNftMedia?: boolean;
    tokenNetworkFilter?: any;
    showMultiRpcModal?: boolean;
    selectedAddress?: string;
    useTokenDetection?: boolean;
    useNftDetection?: boolean;
    [key: string]: any;
  }
}
