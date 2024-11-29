const url = process.env.REACT_APP_BACKEND_URL

const Api = {
    signUp: {
        url: `${url}/api/singUp`,
        method: "POST"
    },
    login: {
        url: `${url}/api/login`,
        method: "POST"
    },
}



export default Api