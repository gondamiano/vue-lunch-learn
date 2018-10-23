<template>
    <div class="container">
        <div v-for="user in theUsers" :key="user.id">
            <div>{{ user.id }}</div>
            <div><b>{{user.title}}</b></div>
            <div>{{ user.body }}</div>
            <div>{{ user.completed }}</div>
            <hr>
        </div>
    </div>
</template>

<script>
export default {
    name: 'userInfo',
    data() {
        return {
            bool: true,            
        }
    },

    created() {
        //this.theUsers = this.$store.getters.getTeam;
    },
    computed: {
        theUsers() {
            return this.$store.getters.getTeam;
        }
    }
}
</script>

<style scoped>

.container {
    width: 60%;
    margin: 0 auto;
}

</style>
