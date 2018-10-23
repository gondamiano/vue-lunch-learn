<template>
    <div>
        <div class="input-group mb-3">
            <div class="input-group-prepend">
                <span class="input-group-text" id="inputGroup-sizing-default">Search</span>
            </div>
            <input type="text" class="form-control" v-model="text" aria-label="Default" aria-describedby="inputGroup-sizing-default">
            <div class="input-group-append">
                <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >{{searchBy == '' ? 'Filter by ' : searchBy}}</button>
                <div class="dropdown-menu">
                <a class="dropdown-item" href="#" v-for="(row, index) in users[0]" :key="index" v-on:click="setSearchBy(index)">{{index}}</a>
                </div>
            </div>
                </div>
        <table class="table" v-if="users">
            <thead>
                <tr class="raw">
                    <th v-for="(row, index) in users[0]" :key="index">{{index}}</th>
                </tr>
            </thead>
            <tr class="list" v-for="user in filteredUsers.slice(0,20)" :key="user.id" v-on:click="showUserInformation(user)">
                <td v-for="(value, index) in user" :key="index">{{ value }}</td>
            </tr>
            <hr>
        </table>
    </div>
</template>

<script>

import searchMixins from '../mixins/searchlist.js';
import UserService from '../services/UserService.js';

export default {
    name: 'userTable',
    props: ['users'],
    mixins: [searchMixins],
    data() {
        return {
            text: '',
            searchBy: '',
            bool: undefined,
        }
    },
    methods: {
        setSearchBy(val) {
            this.searchBy = val;
        },
        showUserInformation(user) {
            console.log(user.id);
          /*  UserService.getUserInformation(user.id).then(
                ((response) => {
                    this.selectedUser = {...user, ...response};
                }),
                (err) => {
                    console.log("fallo");
                }
            )*/

            axios.get('https://jsonplaceholder.typicode.com/posts/' + user.id).then(
              (response) => {
                //this.$store.state.counter = 12341;
                //this.$store.state.team.push({...user, ...response.data});

                this.$store.dispatch('asyncAddCounter');

                this.bool = this.$store.getters.checkTeamMember(user.id);
                console.log(response.data);
                if(this.bool == undefined) {
                    this.$store.commit('addUserToTeam', {...user, ...response.data});
                }
              })
              .catch((err) => {
                console.log('La llamada fallo');
                this.router.push(home);
              })
        },
    }
}
</script>

<style scoped>

.list:hover {
    background-color: #41b883;
    opacity: 1;
    cursor: pointer;
}

</style>
