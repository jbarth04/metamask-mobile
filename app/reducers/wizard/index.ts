import { REHYDRATE } from 'redux-persist';

export interface WizardState {
  step: number;
}

export interface WizardAction {
  type: string;
  step?: number;
}

const initialState: WizardState = {
  step: 0,
};

const onboardingWizardReducer = (state = initialState, action: WizardAction): WizardState => {
  switch (action.type) {
    case REHYDRATE:
      return {
        ...initialState,
      };
    case 'SET_ONBOARDING_WIZARD_STEP':
      return {
        ...state,
        step: action.step || 0,
      };
    default:
      return state;
  }
};
export default onboardingWizardReducer;
