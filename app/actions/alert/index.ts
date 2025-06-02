export interface DismissAlertAction {
  type: 'HIDE_ALERT';
}

export interface ShowAlertAction {
  type: 'SHOW_ALERT';
  isVisible?: boolean;
  autodismiss?: number;
  content?: any;
  data?: any;
}

export function dismissAlert(): DismissAlertAction {
  return {
    type: 'HIDE_ALERT',
  };
}

export function showAlert({ isVisible, autodismiss, content, data }: { isVisible?: boolean; autodismiss?: number; content?: any; data?: any }): ShowAlertAction {
  return {
    type: 'SHOW_ALERT',
    isVisible,
    autodismiss,
    content,
    data,
  };
}
