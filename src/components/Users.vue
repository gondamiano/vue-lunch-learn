<template>
    <div class="container" v-show="users != null" >
        <team-counter></team-counter>
        <user-table v-bind:users="this.users"></user-table>
        <user-info></user-info>
    </div>
</template>

<script>

import UserService from '../services/UserService.js';
import userInfo from './User.vue';
import userTable from './userTable.vue';
import teamCounter from './TeamCounter.vue';

export default {
    name: 'Users',
    components: {
        'user-info' : userInfo,
        'user-table': userTable,
        'team-counter' : teamCounter,
    },
    data() {
        return {
            users: [],
            selectedUser: {},
            searchBy: '',
        }
    },
    created() {
      console.log(this.$store)
      console.log(this.$store.state.counter)
      axios.get('https://jsonplaceholder.typicode.com/todos').then(
        (response) => {
          this.users = response.data;
        })
        .catch((err) => {
          console.log("Get Users request fail!")
        }
      )
    }, 
        /*UserService.getUsers().then(
            ((response) => {
                this.users = response;
                console.log(this.$store.state.counter)
            }),
            (err) => {
                console.log("Get Users request fail!")
            }
        )
    },*/
    computed: {
        value() {
            return this.$store.getters.getTeam;
        }
    }
}

</script>

<style scoped>

.list:hover {
    cursor: pointer;
    background-color: rgb(121, 201, 255);
}

</style>
