<template>
    <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
  <!-- Brand/logo -->
  <a class="navbar-brand" href="#">Lunch & Learn</a>
  
  <!-- Links -->
  <ul class="navbar-nav">
    <li class="nav-item">
      <router-link :to="{ name: 'Home'}" class="item"> Home  </router-link>
    </li>
    <li class="nav-item">
      <router-link :to="{ path: '/Users'}" class="item"> Users </router-link>
    </li>
    <li class="nav-item">
      <router-link :to="{ name: 'About', params: {rol: '12', charge:'3', name: 'johnny bravo' }}" class="item"> About </router-link>
    </li>    
     <li class="nav-item">
     <a class="nav-link" @click="redirect()" > More </a>
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
        redirect() {
            //this.$router.push('/users');
            //this.$router.replace('/users');
            this.$router.go(-1);
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

