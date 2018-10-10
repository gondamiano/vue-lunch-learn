const UserService = {
    getUsers () {
        return new Promise(function (resolve, reject) {
            Vue.http.get('http://localhost:3030/users').then(
                function (response) {
                    resolve(response.body)
                },
                function (response) {
                    reject(response)
                }
            )
        })   
    },

    getUserInformation (id) {
        return new Promise((resolve, reject) => {
            Vue.http.get('http://localhost:3030/users/info/' + id).then(
                (response) => {
                    resolve(response.body)
                },
                (response) => {
                    reject(response);
                }
            )
        })
    }
}

export default UserService