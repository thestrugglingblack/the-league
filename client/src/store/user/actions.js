import keymirror from 'keymirror';
import { getUser } from '../../utils/client'

export const UserActions = keymirror({
  USER_SIGNIN: null,
  USER_SIGNUP: null,
  SET_USER_INFORMATION: null,
  AUTH_ERROR: null,
  USER_SIGNOUT: null,
  SET_LOADING: null
})

//UserSignUp
const userSignUp = () => ({
  type: UserActions.USER_SIGNUP
})

//UserSignIn
const userSignIn = () => ({
  type: UserActions.USER_SIGNIN
})

//UserInformation
const setUserInformation = ({userInformation}) => ({
  type: UserActions.SET_USER_INFORMATION,
  userInformation
})

//Error
const authError = ({errorMsg}) => ({
  type: UserActions.AUTH_ERROR,
  errorMsg
})

//UserSignOut
export const userSignOut = () => ({
  type: UserActions.USER_SIGNOUT,
})

//SetLoading
export const setLoading = ({loading}) => ({
  type: UserActions.SET_LOADING,
  loading
})


export const userSigningIn = () => {
  return async dispatch => {
    try {
      dispatch(setLoading({ loading: true }))

        // Find User Base off of EmailAddress, ID, Password
        const userInformation = await getUser()

        //If Found set the user details associated first_name, last_name, email_address, id
        return dispatch( setUserInformation({ userInformation }))

      } catch (e) {
        console.error("Something went wrong during authentication: ", e)

        //If Not Found set say erorr and recommend signing up
        return dispatch(authError({ e }))
      }
    }
}

export const userSigningUp = () => {
  return async dispatch => {
    try {

      } catch (e) {

      }
    }
}
