<template>
    <div class="container">
        <div>
            <div>{{ user.id }}</div>
            <div>{{user.work}}</div>
            <div>{{ user.position }}</div>
            <div>{{ user.address }}</div>
            <div>{{ user.age }}</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'userInfo',
    props: ['user'],
}
</script>

<style scoped>

.container {
    width: 60%;
    margin: 0 auto;
}

</style>
