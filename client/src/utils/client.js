//default request
const makeRequest( path, options = {} ){
  const params = {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': ''
    },
    ...options
  }


}
// USERS ENPOINTS
export const createUser = () =>{
  console.log("Creating User");
}

export const getUser = () => {
  console.log("Getting User");
}
