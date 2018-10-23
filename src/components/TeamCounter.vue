<template>
    <div>
        <div v-if="this.$store.getters.getTeamLength > 0">
            <p :click="showTeamMembers = !showTeamMembers" > Team Members: {{ this.$store.getters.getTeamLength }}</p>
            
        </div>
    </div>
</template>

<script>
export default {
    name: 'TeamCounter',
    created() {
        console.log(this );
    },
    data() {
        return {
            showTeamMembers: false,
        }
    }
}
</script>

<style scoped>

p {
    font-size: 40px;
    position: relative;
    width: 50%;
    display:flex;
}
</style>
