export const BrowserActionTypes = {
  ADD_TO_VIEWED_DAPP: 'ADD_TO_VIEWED_DAPP',
};

export interface AddToViewedDappAction {
  type: 'ADD_TO_VIEWED_DAPP';
  hostname: string;
}

export interface AddToHistoryAction {
  type: 'ADD_TO_BROWSER_HISTORY';
  url: string;
  name: string;
}

export interface ClearHistoryAction {
  type: 'CLEAR_BROWSER_HISTORY';
  id: number;
  metricsEnabled?: boolean;
  marketingEnabled?: boolean;
}

export interface AddToWhitelistAction {
  type: 'ADD_TO_BROWSER_WHITELIST';
  url: string;
}

export interface CloseAllTabsAction {
  type: 'CLOSE_ALL_TABS';
}

export interface CreateNewTabAction {
  type: 'CREATE_NEW_TAB';
  url: string;
  linkType?: string;
  id: number;
}

export interface CloseTabAction {
  type: 'CLOSE_TAB';
  id: number;
}

export interface SetActiveTabAction {
  type: 'SET_ACTIVE_TAB';
  id: number;
}

export interface UpdateTabAction {
  type: 'UPDATE_TAB';
  id: number;
  data: any;
}

export interface StoreFaviconAction {
  type: 'STORE_FAVICON_URL';
  origin: string;
  url: string;
}

export function addToViewedDapp(hostname: string): AddToViewedDappAction {
  return {
    type: BrowserActionTypes.ADD_TO_VIEWED_DAPP,
    hostname,
  };
}

export function addToHistory({ url, name }: { url: string; name: string }): AddToHistoryAction {
  return {
    type: 'ADD_TO_BROWSER_HISTORY',
    url,
    name,
  };
}

export function clearHistory(metricsEnabled?: boolean, marketingEnabled?: boolean): ClearHistoryAction {
  return {
    type: 'CLEAR_BROWSER_HISTORY',
    id: Date.now(),
    metricsEnabled,
    marketingEnabled,
  };
}

export function addToWhitelist(url: string): AddToWhitelistAction {
  return {
    type: 'ADD_TO_BROWSER_WHITELIST',
    url,
  };
}

export function closeAllTabs(): CloseAllTabsAction {
  return {
    type: 'CLOSE_ALL_TABS',
  };
}

export function createNewTab(url: string, linkType?: string): CreateNewTabAction {
  return {
    type: 'CREATE_NEW_TAB',
    url,
    linkType,
    id: Date.now(),
  };
}

export function closeTab(id: number): CloseTabAction {
  return {
    type: 'CLOSE_TAB',
    id,
  };
}

export function setActiveTab(id: number): SetActiveTabAction {
  return {
    type: 'SET_ACTIVE_TAB',
    id,
  };
}

export function updateTab(id: number, data: any): UpdateTabAction {
  return {
    type: 'UPDATE_TAB',
    id,
    data,
  };
}

export function storeFavicon({ origin, url }: { origin: string; url: string }): StoreFaviconAction {
  return {
    type: 'STORE_FAVICON_URL',
    origin,
    url,
  };
}
