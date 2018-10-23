const UserService = {
    getUsers () {
        return new Promise(function (resolve, reject) {
            Vue.http.get('https://jsonplaceholder.typicode.com/todos').then(
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
            Vue.http.get('https://jsonplaceholder.typicode.com/posts/' + id).then(
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