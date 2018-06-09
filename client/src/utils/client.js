//default request
const makeRequest( path, options = {} ){
  const params = {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': ''
    },
    ...options
  }

  if(!options.method) params.method = 'GET';
  return fetch("https://localhost:3000"+ path).then(response => {
    if(!response.ok){
      return response.json().then(message => {
        throw new Error(`Server error: ${response.statusText || response.status},\n${message && JSON.stringify(message, null,2)}`)
      })
    }
    return response.json
  })
}

// USERS ENPOINTS
export const createUser = () =>{
  console.log("Creating User");
}

export const getUser = () => {
  console.log("Getting User");
  return {
    email_address: "test@test.com",
    first_name: "firstTest",
    last_name: "lastTest"
  }
}

export const updateUser = () => {
  console.log("Updating User");
}

export const deleteUser = () => {

}
