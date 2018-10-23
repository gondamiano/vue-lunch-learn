<template>
    <div class="container">
      <div class="">
        <p>{{ rol }}</p>
        <p>{{ charge }}</p>
        <p>{{ name }}</p>
      </div>
    </div>
</template>

<script>
export default {
  name: 'About',
  props: [
    'rol',
    'charge',
    'name',
  ],
  data() {
    return {
      posts: [],
    }
  },

  methods: {
    methodName() {

    }
  },
}
</script>

<style scoped>

</style>
