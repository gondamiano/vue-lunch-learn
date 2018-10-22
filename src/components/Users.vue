<template>
    <div class="container" v-show="users != null" >
        <user-table v-bind:users="this.users"></user-table>
        <user-info v-bind:user="this.selectedUser"></user-info>
    </div>
</template>

<script>

import UserService from '../services/UserService.js'
import userInfo from './User.vue';
import userTable from './userTable.vue';

export default {
    name: 'Users',
    components: {
        'user-info' : userInfo,
        'user-table': userTable,
    },
    data() {
        return {
            users: [],
            selectedUser: {},
            searchBy: '',
        }
    },
    created() {
        UserService.getUsers().then(
            ((response) => {
                this.users = response;
                console.log(this.$store.state.counter)
            }),
            (err) => {
                console.log("Get Users request fail!")
            }
        )
    },
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
