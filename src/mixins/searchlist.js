
export default {
    computed: {
        filteredUsers: function() {
                return this.users.filter((elem) => {
                    if(elem.hasOwnProperty(this.searchBy)) { 
                        return elem[this.searchBy].toString().includes(this.text);
                    }
                    else return this.users;
                })
        }
    }
}

