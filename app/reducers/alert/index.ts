export interface AlertState {
  isVisible: boolean;
  autodismiss: number | null;
  content: any;
  data: any;
}

export interface AlertAction {
  type: string;
  autodismiss?: number | null;
  content?: any;
  data?: any;
}

const initialState: AlertState = {
  isVisible: false,
  autodismiss: null,
  content: null,
  data: null,
};

const alertReducer = (state = initialState, action: AlertAction): AlertState => {
  switch (action.type) {
    case 'SHOW_ALERT':
      return {
        ...state,
        isVisible: true,
        autodismiss: action.autodismiss || null,
        content: action.content || null,
        data: action.data || null,
      };
    case 'HIDE_ALERT':
      return {
        ...state,
        isVisible: false,
        autodismiss: null,
      };
    default:
      return state;
  }
};
export default alertReducer;
