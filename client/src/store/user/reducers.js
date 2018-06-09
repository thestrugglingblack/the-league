import { UserActions } from './actions'

let defaultState = {
  isAuthorized: false,
  loading: false,
  error: null,
  userInformation: null
}


const user = (state = defaultState, action) => {
  switch (action.type) {

    case UserActions.USER_SIGNIN:
      return {
        ...state,
        error: null,
      }

    case UserActions.USER_SIGNUP:
      return {
        ...state,
        error: null,
        isAuthorized: true
      }

    case UserActions.SET_USER_INFORMATION:
      return {
        ...state,
        error: null,
        userInformation: action.userInformation,
        isAuthorized: true
      }
    case UserActions.AUTH_ERROR:
      return {
        ...state,
        error: action.errorMsg,
        loading: false,
        isAuthorized: false,
      }

    case UserActions.USER_SIGNOUT:
      return defaultState;

    case UserActions.SET_LOADING:
      return {
        ...state,
        loading: action.loading
      }

    default:
      return state;

  }
}

export default user;
