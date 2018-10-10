<template>
    <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
  <!-- Brand/logo -->
  <a class="navbar-brand" href="#">Lunch & Learn</a>
  
  <!-- Links -->
  <ul class="navbar-nav">
    <li class="nav-item">
      <!--<a class="nav-link" @click="redirect(msg)" >{{ msg }}</a> -->
      <router-link :to="{ name: 'Home'}" class="item"> Home  </router-link>
    </li>
    <li class="nav-item">
      <!--<a class="nav-link" @click="redirect(msg)" >{{ msg }}</a> -->
      <router-link :to="{ name: 'Users'}" class="item"> Users </router-link>
    </li>
    <li class="nav-item">
      <!--<a class="nav-link" @click="redirect(msg)" >{{ msg }}</a> -->
      <router-link :to="{ name: 'About'}" class="item"> About </router-link>
    </li>
  </ul>
</nav>
</template>

<script>
export default {
    name: 'NavBar',
    data: () => {
        return {
            messages: ['Home', 'Usuarios', 'About']
        }
    },
    
    methods: {
        redirect(msg) {
            window.location.replace(msg)
        }
    }
}
</script>

<style scoped>

.nav-link {
    cursor: pointer;
}

.nav-item {
    margin-left: 10px;
    color: white;
}

.nav-item:hover {
    cursor: default;
}

.router-link {
    color: white;
}

</style>

