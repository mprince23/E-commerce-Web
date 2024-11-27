const url = 'http://localhost:8080'

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